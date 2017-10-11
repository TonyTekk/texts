// Angular
import { Injectable } from '@angular/core';

// Firebase
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

// RxJs
import { Observable } from 'rxjs/Observable';

// App
import { ArticleModel } from '../models/article.model';

@Injectable()
export class ArticleService {
    private _item = 'articles';

    private userId: string = null;
    public list: Observable<ArticleModel[]> = null;

    public constructor(
        private db: AngularFireDatabase,
        private auth: AngularFireAuth,
    ) {
        this.auth.authState.subscribe(
            (user: firebase.User) => {
                if (user) {
                    this.userId = user.uid;

                    this.list = this.db.list(`${this._item}/${this.userId}`).snapshotChanges()
                        .map(actions => actions.map(item => new ArticleModel(item.payload.val())));
                }
            });
    }

    public get(id: string): any {
        return this.db.object(`${this._item}/${this.userId}/${id}`).valueChanges();
    }

    public push(item: ArticleModel): Promise<any> {
        if (this.userId) {
            return new Promise((resolve, reject) => {
                // Generate a reference to a new location and add some data using push()
                const ref = this.db.list(`${this._item}/${this.userId}`).push({});

                // Get the unique key generated by push()
                item.id = ref.key;
                this.db.object(`${this._item}/${this.userId}/${ref.key}`)
                    .set(new ArticleModel(item))
                    .then(() => resolve())
                    .catch(() => reject());
            });
        }
    }

    public update(item: ArticleModel): Promise<any> {
        if (this.userId) {
            return new Promise((resolve, reject) => {
                this.db.object(`${this._item}/${this.userId}/${item.id}`)
                    .set(new ArticleModel(item))
                    .then(() => resolve())
                    .catch(() => reject());
            });
        }
    }

    public remove(item: ArticleModel): Promise<any> {
        if (this.userId) {
            return new Promise((resolve, reject) => {
            this.db.list(`${this._item}/${this.userId}`)
                .remove(item.id)
                .then(() => resolve())
                .catch(() => reject());
            });
        }
    }
}

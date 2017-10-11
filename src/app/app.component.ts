// Angular
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router  } from '@angular/router';
import { NavigationEnd } from '@angular/router';
import { OnDestroy} from '@angular/core';

// RxJs
import { Subscription } from 'rxjs/Subscription';

// Services
import { AuthService } from './services/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
    private routerSubscription: Subscription;
    public title: string;

    public constructor(
        public authService: AuthService,
        private router: Router
    ) {}

    public ngOnInit() {
        this.routerSubscription = this.router.events
            .subscribe(event => {
                if (event instanceof NavigationEnd) {
                    this.title = event.url;
                }
            });
    }

    public ngOnDestroy(): void {
        this.routerSubscription.unsubscribe();
    }

    public logout(): void {
        this.authService.logout();
    }
}

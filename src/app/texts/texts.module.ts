// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

// Firebase
import { AngularFireDatabase } from 'angularfire2/database';

// Material
import { MatButtonModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatTooltipModule } from '@angular/material';
import { MatDialogModule } from '@angular/material';
import { MatInputModule } from '@angular/material';

// App
import { TextsRoutingModule } from './texts-routing.module';
import { TextsComponent } from './texts.component';
import { ArticleService } from '../services/article.service';
import { TextAddComponent } from './text-add/text-add.component';

@NgModule({
    imports: [
        CommonModule,
        TextsRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatIconModule,
        MatTooltipModule,
        MatDialogModule,
        MatInputModule,
    ],
    declarations: [
        TextsComponent,
        TextAddComponent,
    ],
    entryComponents: [
        TextAddComponent,
    ],
    providers: [
        AngularFireDatabase,
        ArticleService,
    ],
})
export class TextsModule { }

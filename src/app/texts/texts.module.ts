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
import { MatTableModule } from '@angular/material';

// App
import { TextsRoutingModule } from './texts-routing.module';
import { TextsComponent } from './texts.component';
import { ArticleService } from '../services/article.service';
import { TextUpdateComponent } from './text-update/text-update.component';
import { TextRemoveComponent } from './text-remove/text-remove.component';

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
        MatTableModule,
    ],
    declarations: [
        TextsComponent,
        TextUpdateComponent,
        TextRemoveComponent,
    ],
    entryComponents: [
        TextUpdateComponent,
        TextRemoveComponent,
    ],
    providers: [
        AngularFireDatabase,
        ArticleService,
    ],
})
export class TextsModule { }

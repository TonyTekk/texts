// Animation
import { trigger } from '@angular/animations';
import { style } from '@angular/animations';
import { animate } from '@angular/animations';
import { transition } from '@angular/animations';
import { state } from '@angular/animations';

export const ShowAnimation =  trigger('show', [
    state('true', style({
        opacity: 1
    })),
    state('false',   style({
        opacity: 0
    })),
    transition('false <=> true', [
        animate(500)
    ]),
    transition('void => *', [
        style({ opacity: 0}),
        animate(500)
    ]),
]);

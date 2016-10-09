import { NgModule } from '@angular/core';
import { Modal } from './myModal.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [
        Modal
    ],
    imports: [
        BrowserModule
    ],
    exports: [
        Modal
    ]
})
export class ModalModule { }

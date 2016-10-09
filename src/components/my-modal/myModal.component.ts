import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

/**
 * Shows a bootstrap modal dialog.
 * Set the body of the dialog by adding content to the modal tag: <modal>content here</modal>.
 */

const template: string = require('./myModal.html');

@Component({
  selector: 'modal',
  template
})
export class Modal implements OnInit {
  @Input('show-modal') showModal: boolean;
  @Input('title') title: string;
  @Input('sub-title') subTitle: string;
  @Input('cancel-label') cancelLabel: string;
  @Input('positive-label') positiveLabel: string;

  /**
   * Fires an event when the modal is closed. The argument indicated how it was closed.
   * @type {EventEmitter<ModalResult>}
   */
  @Output('closed') closeEmitter: EventEmitter < ModalResult > = new EventEmitter < ModalResult > ();

  /**
   * Fires an event when the modal is ready with a pointer to the modal.
   * @type {EventEmitter<Modal>}
   */
  @Output('loaded') loadedEmitter: EventEmitter < Modal > = new EventEmitter < Modal > ();

  @Output() positiveLabelAction = new EventEmitter();


  constructor() {}

  /**
   * [ngOnInit description]
   */
  ngOnInit() {
    this.loadedEmitter.next(this);
    //console.log('modal inited', this.showModal);
  }

  /**
   * [show :will show modal, There is no method for hiding. This is done using actions of the modal itself.]
   */
  show() {
    this.showModal = true;
  }

  hide() {
    this.showModal = false;
    this.closeEmitter.next({
      action: ModalAction.POSITIVE
    });
  }

  /**
   * [positiveAction description]
   */
  positiveAction() {
    // this.showModal = false;
    // this.closeEmitter.next({
    //   action: ModalAction.POSITIVE
    // });
    this.positiveLabelAction.next(this);
    return false;

  }

  /**
   * [cancelAction description]
   */
  cancelAction() {
    this.showModal = false;
    this.closeEmitter.next({
      action: ModalAction.CANCEL
    });
    return false;
  }
}

/**
 * The possible reasons a modal has been closed.
 */
export enum ModalAction { POSITIVE, CANCEL }

/**
 * Models the result of closing a modal dialog.
 */
export interface ModalResult {
  action: ModalAction;
}
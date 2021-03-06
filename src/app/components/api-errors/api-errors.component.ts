import { Component, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
//import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-api-errors',
  templateUrl: './api-errors.component.html',
  styleUrls: ['./api-errors.component.css']
})
export class ApiErrorsComponent implements OnInit {
  //@Input() id: string;
  private element: any;

  constructor(private el: ElementRef) {
    this.element = el.nativeElement
  }

  ngOnInit(): void {
    let modal = this;
    console.log(modal)

      // ensure id attribute exists
/*
      if (!this.id) {
          console.error('modal must have an id');
          return;
      }
*/
      // move element to bottom of page (just before </body>) so it can be displayed above everything else
      document.body.appendChild(this.element);

      // close modal on background click
      this.element.addEventListener('click', function (e: any) {
              modal.close();
      });

      // add self (this modal instance) to the modal service so it's accessible from controllers
//      this.modalService.add(this);
//      this.modalService.open('apierror')
  }

  // remove self from modal service when component is destroyed
/*
  ngOnDestroy(): void {
//      this.modalService.remove(this.id);
//      this.element.remove();
  }
*/
  // open modal
  open(): void {
      this.element.style.display = 'block';
//      document.body.classList.add('jw-modal-open');
  }

  // close modal
  close(): void {
      this.element.style.display = 'none';
//      document.body.classList.remove('jw-modal-open');
  }
}

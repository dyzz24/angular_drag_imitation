import { Component, OnInit, HostListener } from '@angular/core';
import { DragServiceService } from '../drag-service.service';

@Component({
  selector: 'app-drag-component',
  templateUrl: './drag-component.component.html',
  styleUrls: ['./drag-component.component.css']
})
export class DragComponentComponent implements OnInit {

  constructor(private dragNdropService: DragServiceService) { }
  dragElems = [{name: 'one', id: 1}, {name: 'two', id: 2}, {name: 'three', id: 3}];
  realDragElem: any;
  copyDragElem: any;
  dragData: any;
  setDropData: string = null;

  ngOnInit() {
  }

  setDragData(e, item, dragElem) {

    this.realDragElem = dragElem;
    this.copyDragElem = this.dragNdropService.dragElemCreate(this.realDragElem, ['dragStart'])
    this.dragData = item;
}

delDragData() {
  this.dragNdropService.dragElemDelete(this.realDragElem, ['dragStart'], this.copyDragElem);
  this.copyDragElem = null;
}

drop() {
  this.setDropData = this.dragData.name;
}

@HostListener('document:mousemove', ['$event'])
onMousemove(event: MouseEvent) {

    if (!this.copyDragElem) {
        return;
    }
    // * if drag elem active => move it
    this.dragNdropService.moveElem(event, this.copyDragElem);
}

@HostListener('document:mouseup', ['$event'])
onMouseUp(event: MouseEvent) {

    if (this.copyDragElem) {
        // * cancel drag
        this.delDragData();
    }

}



}

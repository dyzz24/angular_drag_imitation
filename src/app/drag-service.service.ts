import { Injectable, Inject } from '@angular/core';
import {DOCUMENT} from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class DragServiceService {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  public dragElemCreate(realElem: any, classListsForRealElem?: Array<string>, classListForCopyElem?: Array<string>) {

    classListsForRealElem ? classListsForRealElem.forEach(classNames => {
      realElem.classList.add(classNames)
    }) : null;

    this.document.body.style.userSelect = 'none';
    // * create clone node, absolute position
    const copyDragElem = realElem.cloneNode(true);
    copyDragElem.style.position = 'absolute';
    copyDragElem.style.top = '-999px';
    copyDragElem.style.zIndex = '999';
    classListForCopyElem ? classListForCopyElem.forEach(classNames => {
      copyDragElem.classList.add(classNames)
    }) : null;


    //  * add to body for move
    this.document.body.appendChild(copyDragElem);
    return copyDragElem;
}
public dragElemDelete(realElem: any, classListsForRealElem: Array<string>, copyDragElem: any ) {
  this.document.body.removeChild(copyDragElem);
  classListsForRealElem ? classListsForRealElem.forEach(classNames => {
    realElem.classList.remove(classNames);
  }) : null;
  this.document.body.style.overflow = 'auto';
  this.document.body.style.userSelect = 'auto';
}

public moveElem(e, dragElem) {

dragElem.style.left = e.pageX  + 4 + 'px';
dragElem.style.top = e.pageY   + 4 + 'px';

}
}

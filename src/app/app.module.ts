import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DragServiceService} from './drag-service.service';
import { AppComponent } from './app.component';
import { DragComponentComponent } from './drag-component/drag-component.component';

@NgModule({
  declarations: [
    AppComponent,
    DragComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DragServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

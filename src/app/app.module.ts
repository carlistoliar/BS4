import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BasicTypographyComponent } from './sandbox/basic-typography.component';
import { TextAlignmentDisplayComponent } from './sandbox/text-alignment-display.component';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    BasicTypographyComponent,
    TextAlignmentDisplayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule/*NgbModule.forRoot()*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BasicTypographyComponent} from './sandbox/basic-typography.component';
import {TextAlignmentDisplayComponent} from "./sandbox/text-alignment-display.component";


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'basic typography' },
  { path: 'basic typography', component: BasicTypographyComponent},
  { path: 'text alignment display', component: TextAlignmentDisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

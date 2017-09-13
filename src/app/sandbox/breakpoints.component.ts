import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import {log} from "util";



@Component({
  selector: 'app-breakpoints',
  templateUrl: './breakpoints.component.html',
  styleUrls: ['./breakpoints.component.css']
})
export class BreakpointsComponent implements OnInit, OnDestroy {

  constructor() {}

  ngOnInit() {

  }

  ngOnDestroy(){
    document.body.style.background = "white";
  }

  @HostListener('window:resize', ['$event'])
  onResize(event){
    if (event.target.innerWidth < 576) {
      document.body.style.background = "white";
    }
    if (event.target.innerWidth > 576 && event.target.innerWidth < 768) {
      document.body.style.background = "red";
    }
    if (event.target.innerWidth > 768 && event.target.innerWidth < 992) {
      document.body.style.background = "blue";
    }
    if (event.target.innerWidth > 992 && event.target.innerWidth < 1200) {
      document.body.style.background = "green";
    }
    if (event.target.innerWidth > 1200) {
      document.body.style.background = "yellow";
    }

  }

}

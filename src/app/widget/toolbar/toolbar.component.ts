
import { Component,ElementRef,HostListener,OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  host: {
    "(window:resize)":"onWindowResize($event)"
  }
})
export class ToolbarComponent implements OnInit {
  @ViewChild('stickyMenu') menuElement: ElementRef;
  width:number = window.innerWidth;
  mobileWidth:number = 768; 
  namePhoto:string;
  elementPosition: any;
  sticky: boolean = false;
  public innerWidth: any;

  constructor() {
    
  }

  ngAfterViewInit(){
    this.elementPosition = this.menuElement.nativeElement.offsetTop;
    console.log(this.elementPosition);
  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    if(this.innerWidth <= this.mobileWidth){
      this.namePhoto = 'logo-playground-black';
    } else{
      this.namePhoto = 'logo-playground-white';
    }
  }

  onWindowResize(event) {
    this.width = event.target.innerWidth;
    if(this.width <= this.mobileWidth){
      console.log(this.width);
      this.namePhoto = 'logo-playground-black';
    } else {
      this.namePhoto = 'logo-playground-white';
    }
  }

  @HostListener('window:scroll', ['$event'])
  handleScroll(){
    this.innerWidth = window.innerWidth;
    if(this.innerWidth >= this.mobileWidth){
      const windowScroll = window.pageYOffset;
      console.log(window.pageYOffset);
      if(windowScroll >= this.elementPosition){
          this.sticky = true;
          this.namePhoto = 'logo-playground-black';
      } else if(windowScroll == 0) {
          this.sticky = false;
          this.namePhoto = 'logo-playground-white';
          console.log(this.sticky);
      }
    }
  }

}

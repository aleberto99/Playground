import { tabModel } from './../../interface/tabModel';

import { TabService } from './../../service/tab.service';
import { Component, OnInit } from '@angular/core';
import { TabEnum } from 'src/app/enum/tab.enum';

@Component({
  selector: 'app-tab-section',
  templateUrl: './tab-section.component.html',
  styleUrls: ['./tab-section.component.scss']
})
export class TabSectionComponent implements OnInit {
  titleTab1:string;
  titleTab2: string;
  titleTab3: string;
  contentTab1= [];
  contentTab2= [];
  contentTab3 = [];
  activeClass: string = TabEnum.TAB1;
  tabEnum = TabEnum;
  viewContentText: boolean = true;
  showSpinner: boolean = true;
  buttonView = true;
  hide = {
    tab1: true,
    tab2: false,
    tab3: false
  }


  constructor(private tabService: TabService) {
    this.tabService.dataTab1().subscribe((res: tabModel) => {
      this.titleTab1 = res.title;
      this.showSpinner = true;
      setTimeout(() => {
        this.showSpinner = false;
        this.contentTab1 = res.content;
      }, 500)
    })
    
    this.tabService.dataTab2().subscribe((res: tabModel) => {
      this.titleTab2 = res.title;
      this.showSpinner = true;
      setTimeout(() => {
        this.showSpinner = false;
        this.contentTab2 = res.content;
      }, 500)
    })
    this.tabService.dataTab3().subscribe((res: tabModel) => {
      this.titleTab3 = res.title;
      this.showSpinner = true;
      setTimeout(() => {
        this.showSpinner = false;
        this.contentTab3 = res.content;
      }, 500)
    })
  }

  buttonTab(data){
    if(data === TabEnum.TAB1){
      this.hide.tab1 = !this.hide.tab1;
      if(!this.hide.tab1){
        this.viewContentText = false;
      }else{
        this.viewContentText = true;
        this.contentTab1 = [];
        this.tabService.dataTab1().subscribe((res: tabModel) => {
          this.titleTab1 = res.title;
          this.showSpinner = true;
          setTimeout(() => {
            this.showSpinner = false;
            this.contentTab1 = res.content;
          }, 500)
        })
      }
      this.hide.tab2 = false;
      this.hide.tab3 = false;
      this.activeClass = TabEnum.TAB1;
    } else if(data === TabEnum.TAB2){
      this.hide.tab2 = !this.hide.tab2;
      if(!this.hide.tab2){
        this.viewContentText = false;
      } else{
        this.viewContentText = true;
        this.contentTab2 = [];
        this.tabService.dataTab2().subscribe((res: tabModel) => {
          this.titleTab2 = res.title;
          this.showSpinner = true;
          setTimeout(() => {
            this.showSpinner = false;
            this.contentTab2 = res.content;
          }, 500)
        })
      }
      this.hide.tab1 = false;
      this.hide.tab3 = false;
      this.activeClass = TabEnum.TAB2;
    } else if(data === TabEnum.TAB3){
      this.hide.tab3 = !this.hide.tab3;
      if(!this.hide.tab3){
        this.viewContentText = false;
      }else{
        this.viewContentText = true;
        this.contentTab3 = [];
        this.tabService.dataTab3().subscribe((res: tabModel) => {
          this.titleTab3 = res.title;
          this.showSpinner = true;
          setTimeout(() => {
            this.showSpinner = false;
            this.contentTab3 = res.content;
          }, 500)
        })
      }
      this.hide.tab1 = false;
      this.hide.tab2 = false;
      this.activeClass = TabEnum.TAB3;
    }
  }

  ngOnInit() {
  }

  loadData(){
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
    }, 5000)
  }


}

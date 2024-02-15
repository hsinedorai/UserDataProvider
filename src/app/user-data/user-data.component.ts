import { CommonModule } from '@angular/common';
import { AfterViewInit, Component ,ViewChild,ChangeDetectorRef, OnInit} from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import { BreakpointObserver } from '@angular/cdk/layout';
import {MatListModule} from '@angular/material/list';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-data',
  standalone: true,
  imports: [RouterModule,CommonModule,MatToolbarModule,MatSidenavModule,MatListModule,
    MatDividerModule,MatIconModule],
  templateUrl: './user-data.component.html',
  styleUrl: './user-data.component.scss'
})
export class UserDataComponent implements OnInit {
  @ViewChild(MatSidenav) sideNav!:MatSidenav;
  sidenavOpened = false;
  isMobile= true;
  isCollapsed = true;
source:any=[];
count:any;

tot: number = 0;
  currentPage: number = 1;
  itemsPerPage: number = 10;
  pages: number[] = [];

constructor(private obser:BreakpointObserver,private cdRef: ChangeDetectorRef,private userService:UserService){

}
  //ngAfterViewInit(): void {
// this.sideNav.opened=true;
// this.obser.observe(['(max-width:800px)'])
// .subscribe((res)=>{
//   if(res?.matches){
//     this.sideNav.mode="over";
//     this.sideNav.close();
//   }else {
//     this.sideNav.mode="side";
//     this.sideNav.open();
//   }

// });
// this.cdRef.detectChanges();

//}
ngOnInit() {
//  this.sideNav.opened=true;
this.obser.observe(['(max-width:800px)'])
.subscribe((res)=>{
  if(res?.matches){
//    this.sideNav.mode="over";
    this.sideNav.close();
  }else {
   // this.sideNav.mode="side";
   // this.sideNav.open();
  }

});
this.cdRef.detectChanges();

//
this.userService.getUsers().subscribe((res:any)=>{
  console.log('resss',res);
this.count=res.total;
  this.source=res.data;
  this.pages = Array(Math.ceil(this.tot / this.itemsPerPage)).fill(0).map((_, i) => i + 1);

}, error => {
  console.error(error)
})


}


onPageChange(page: number): void {
  this.currentPage = page;
  console.log('Current Page:', this.currentPage);
  this.getDisplayedItems();
}



getDisplayedItemss(): any[] {
  const startIndex = (this.currentPage - 1) * this.itemsPerPage;
  const endIndex = Math.min(startIndex + this.itemsPerPage, this.source.length);

  // Vérifiez si startIndex dépasse la longueur du tableau source
  if (startIndex >= this.source.length || startIndex < 0) {
    console.log('Invalid startIndex. No items to display.');
    return [];
  }

  console.log('startIndex:', startIndex);
  console.log('endIndex:', endIndex);
  console.log('this.source length:', this.source.length);

  const displayedItems = this.source.slice(startIndex, endIndex);
  console.log('Displayed Items:', displayedItems);
  return displayedItems;
}
getDisplayedItems(): any[] {
  const startIndex = (this.currentPage - 1) * this.itemsPerPage;
  const endIndex = startIndex + this.itemsPerPage;

  // Vérifiez si startIndex dépasse la longueur du tableau source
  if (startIndex >= this.source.length || startIndex < 0) {
    console.log('Invalid startIndex. No items to display.');
    return [];
  }

  const displayedItems = this.source.slice(startIndex, endIndex);

  console.log('startIndex:', startIndex);
  console.log('endIndex:', endIndex);
  console.log('this.source length:', this.source.length);
  console.log('Displayed Items:', displayedItems);

  return displayedItems;
}




}

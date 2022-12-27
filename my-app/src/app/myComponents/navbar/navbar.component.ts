import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
public bool=false;

menu(){
  let div=document.getElementById("navbar");
  if(this.bool===false){
    this.bool=true;
    div?.classList.add("afterclick")
  }
  else{
    this.bool=false
    div?.classList.remove("afterclick")
  }
}



scroll(){
  window.scroll(0,0)
}
}

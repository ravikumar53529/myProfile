import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  public items!: MenuItem[];
  constructor(private routerRef:Router){}
  ngOnInit() {
    this.items = [
        {
            label: 'Profile',
            command:()=>{
              this.onProfile();
            }
            
        },
        {
            label: 'Skills',
            command: () => {
              this.onSkills();
            }

        },
        {
          label: 'Projects',  
          command:()=>{
            this.onProjects();
          } 
      },
      {
          label: 'About',
          command:()=>{
            this.onAbout();
          }
      },
      {
          label: 'Contact',
          command:()=>{
            this.onContact()
          }
      }
    ];
}

public onSkills():void{
this.routerRef.navigateByUrl('skills')
}
public onProfile():void{
  this.routerRef.navigateByUrl('profile')
}
public onProjects():void{
  this.routerRef.navigateByUrl('projects')
}
public onAbout():void{
  this.routerRef.navigateByUrl('about')
}
public onContact():void{
  this.routerRef.navigateByUrl('contact')
}
}

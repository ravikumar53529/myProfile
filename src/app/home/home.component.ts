import { Component ,OnInit} from '@angular/core';
import { Data } from '@angular/router';
import {MenuItem} from 'primeng/api';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public  title = 'profile';
  public items!: MenuItem[];
  public images:Data[]=[]
   constructor(private service:DataService){}
  ngOnInit() {
      this.items = [
          {
              label: 'Profile',
              
          },
          {
              label: 'Skills',
          },
          {
            label: 'Projects',   
        },
        {
            label: 'About',
        },
        {
            label: 'Contact',
        }
      ];
      this.getServiceData()
  }

  //get service data
  public getServiceData():void{
    this.service.getData().subscribe((data)=>{
        this.images=data
    })
  }
}

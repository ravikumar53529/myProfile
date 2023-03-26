import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
   

  km!:number;


  onKmChange(km:any){
    this.km=parseFloat(km.target.value)
   console.log(km.target.value)
  }
}

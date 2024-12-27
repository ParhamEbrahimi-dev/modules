import { Component } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  standalone: false,
  
  templateUrl: './collections-home.component.html',
  styleUrl: './collections-home.component.css'
})
export class CollectionsHomeComponent {

  data=[
    {name:"ali",age : 26 ,job:"front"},
    {name:"reza",age : 28 ,job:"backend"},
    {name:"sara",age : 22 ,job:"UI"}

  ]
  header=[
    {key:"name",value:"Name"},
    {key:"age",value:"Age"},
    {key:"job",value:"Job"},

  ]
}

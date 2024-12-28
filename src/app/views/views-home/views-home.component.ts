import { Component } from '@angular/core';

@Component({
  selector: 'app-views-home',
  standalone: false,
  
  templateUrl: './views-home.component.html',
  styleUrl: './views-home.component.css'
})
export class ViewsHomeComponent {
  stats=[
    {value:33,label:"# of Users"},
    {value:22,label:"# Likes"},
    {value:9,label:"# Comments"},
  ]
  items=[
    {
      image:"/public/assets/images/couch.jpg",
      header:"couch",
      title:"white couch",
      description:"this is a goods choise for everyone"

    },
    {
      image:"/public/assets/images/dresser.jpg",
      header:"dresser",
      title:"white dresser",
      description:"this is a goods choise for young People"
    }
  ]
}

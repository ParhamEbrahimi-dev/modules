import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-place-holder',
  standalone: false,
  
  templateUrl: './place-holder.component.html',
  styleUrl: './place-holder.component.css'
})
export class PlaceHolderComponent {
  @Input() lines : number =3;
  @Input() header : boolean=true;

}

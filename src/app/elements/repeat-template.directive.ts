import { Directive ,TemplateRef,ViewContainerRef,Input } from '@angular/core';

@Directive({
  selector: '[appRepeatTemplate]',
  standalone: false
})
export class RepeatTemplateDirective {
  @Input("appRepeatTemplate") set RepetTemplate(count:number){
    for(let i=0;i<count;i++)
      this._viewContainerRef.createEmbeddedView(this._templateRef,{})
  }
  constructor(private _templateRef:TemplateRef<any>,private _viewContainerRef :ViewContainerRef) { }

}

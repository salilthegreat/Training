import { Directive, TemplateRef, Input,ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appToggle]',
  standalone: true
})
export class ToggleDirective {

  hasView=false

  constructor(
    private templateRef:TemplateRef<any>,
    private viewContainerRef:ViewContainerRef
  ) { }

  @Input() set appToggle(condition:string | null){
    // if(condition && !this.hasView){
    //   this.viewContainerRef.createEmbeddedView(this.templateRef)
    //   this.hasView = true
    // }else if(!condition && this.hasView){
    //   this.viewContainerRef.clear()
    //   this.hasView = false
    // }
    if(condition == 'admin'){
      this.viewContainerRef.createEmbeddedView(this.templateRef)
    }else {
      this.viewContainerRef.clear()
    }
  }

}

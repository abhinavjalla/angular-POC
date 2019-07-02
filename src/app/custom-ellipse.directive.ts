import { Directive ,ElementRef,OnInit,Renderer2 ,DoCheck,Input } from '@angular/core';


@Directive({
  selector: '[appCustomEllipse]'
})
export class CustomEllipseDirective implements DoCheck  {
   public valLength;
   //@Input() inputfocus;
   constructor(public el: ElementRef, public renderer: Renderer2) {}


   ngDoCheck(){
         let valLength = this.el.nativeElement.value.length;
         console.log(valLength );

        if (valLength > 10) {
          console.log("inside if");
           this.renderer.setStyle(this.el.nativeElement,'text-overflow','ellipsis');
        }
      
    }
}
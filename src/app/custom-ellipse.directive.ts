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

          
          console.log(this.el.nativeElement.value.substring(0,valLength));
          this.renderer.setValue(this.el.nativeElement.value.substring(0,valLength),'...');
           //this.renderer.setStyle(this.el.nativeElement,'color','red');
        }
      
    }
}
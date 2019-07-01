import { Directive ,ElementRef,OnInit,Renderer2} from '@angular/core';


@Directive({
  selector: '[appCustomEllipse]'
})
export class CustomEllipseDirective implements OnInit {

  constructor(private el: ElementRef,private renderer:Renderer2) {


   }

   ngOnInit(){
     var InputData = this.el.nativeElement;
     if(InputData.length > 20)
     {
      this.renderer.setStyle(this.el.nativeElement,'text-overflow','ellipsis');

     }
   }
}

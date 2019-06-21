import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  implements OnInit {


   myform: FormGroup;
   emailpt = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   phnpt =/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;
   
  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.myform = new FormGroup({
  
      name: new FormControl('', [Validators.required,Validators.minLength(3)]),
      email: new FormControl('', [Validators.required,Validators.pattern(this.emailpt)]),
      phone: new FormControl('', [Validators.required,Validators.pattern(this.phnpt)]),
      comment:new FormControl('',[Validators.required,Validators.minLength(15)])
    });
  }


}
// ,Validators.pattern('^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$')

//,Validators.pattern(this.pt)
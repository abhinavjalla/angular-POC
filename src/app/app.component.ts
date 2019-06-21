import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators ,NG_VALIDATORS, AbstractControl, ValidationErrors, Validator,} from '@angular/forms';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  implements OnInit {

  

   myform: FormGroup;
   submitted = false;

  //^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$
   emailpt = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
   phnpt =/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;
   namept = /^[a-zA-Z0-9 ]*$/
   
  ngOnInit() {
  

    this.createForm();

  }

  private createForm() {
    this.myform = new FormGroup({
  
      name: new FormControl('', [Validators.required,Validators.maxLength(20),Validators.pattern(this.namept)]),
      email: new FormControl('', [Validators.required,Validators.minLength(5),Validators.pattern(this.emailpt)]),
      phone: new FormControl('', [Validators.required,Validators.pattern(this.phnpt)]),
      comment:new FormControl('',[Validators.required,Validators.maxLength(500)])

    });
  }
onSubmit(){
   this.submitted = true;
   console.log(this.submitted);

}

  


}

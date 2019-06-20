import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  implements OnInit {
   myform: FormGroup;
  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.myform = new FormGroup({
  
      name: new FormControl('', [Validators.required,Validators.minLength(3)]),
      password: new FormControl('', Validators.required),
    });
  }


}

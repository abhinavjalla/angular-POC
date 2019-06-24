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
    fileflag =false;
   filelimit = 5242880;

  //^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$
   emailpt = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
   phnpt =/^(\+1\s?)?((\([0-9]{3}\))|[0-9]{3})[\s\-]?[\0-9]{3}[\s\-]?[0-9]{4}$/;
   namept = /^[a-zA-Z0-9 ]*$/
   
  ngOnInit() {
  

    this.createForm();

  }

  private createForm() {
    this.myform = new FormGroup({
  
      name: new FormControl('', [Validators.required,Validators.maxLength(20),Validators.pattern(this.namept)]),
      email: new FormControl('', [Validators.required,Validators.pattern(this.emailpt)]),
      phone: new FormControl('', [Validators.pattern(this.phnpt)]),
      attachment:new FormControl('',this.filetype),
      comment:new FormControl('',[Validators.maxLength(500)])

    });
  }
onSubmit(){
   this.submitted = true;
   console.log("hello");
   

}

   filetype(control:AbstractControl):{[key:string]:any}|null{
     const filename = control.value;
     const filetype = filename.substring(filename.lastIndexOf('.')+1)
     if(filetype.toLowerCase() == 'jpeg'||(filetype.toLowerCase() == 'png')||(filetype.toLowerCase() == 'pdf')||(filetype.toLowerCase() == 'jpg')
     )
     {
      console.log("passed");
       return null;
     }else
     {
       console.log("failed");
       return{'notvalidformat':true};
     }

  }

  // filesizecheck(control:AbstractControl):{[key:string]:any}|null{
  //   if(this.filesize <=this.filelimit)
  //   {
  //     console.log("valid size");
  //     return null;

  //   }
  //   else{
  //     console.log("not valid size");
  //      return{'notvalidsize':true};

  //   }
  // }

  getFileDetails (event) {
    for (var i = 0; i < event.target.files.length; i++)
     { 
     
      var filesize = event.target.files[i].size;
      if(filesize<=this.filelimit){
        this.fileflag = true;
      }
      console.log(filesize);
       
       }
  }


}

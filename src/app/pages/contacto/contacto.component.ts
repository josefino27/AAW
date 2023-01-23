import { Component, OnInit  } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  contactForm :  FormGroup;
  mensajeForm : string = "Completa el Formulario";
  color: string = "primary";
  constructor( private http: HttpClient ) {
    this.contactForm = new FormGroup({
      subject: new FormControl('',Validators.required),
      name : new FormControl('',Validators.required),
      email : new FormControl('',[Validators.required,Validators.email]),
      message : new FormControl('', Validators.required),

    });

   }

  ngOnInit() {
    document.body.scrollTo({
      top:0, left:0, behavior: 'smooth'
    });
  }


onSubmit(){
  if(this.contactForm.valid){
    this.http.post("https://formsubmit.co/ajax/ec6479221c79be235c2f0d368760ab94",this.contactForm.value)
        .subscribe({
          next: (response) => console.log(response),
          error: (error) => console.log(error),
        });
    this.color="success";
    this.mensajeForm = "Correo enviado exitosamente.";
    this.contactForm.reset();

  }else{
    this.color="danger";
    this.mensajeForm = "*Completa todos los campos por favor";
    return;
  }

}



}

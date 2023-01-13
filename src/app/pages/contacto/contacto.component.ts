import { Component, OnInit } from '@angular/core';
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
  constructor( private http: HttpClient ) {
    this.contactForm = new FormGroup({
      asunto: new FormControl('',Validators.required),
      name : new FormControl('',Validators.required),
      email : new FormControl('',[Validators.required,Validators.email]),
      message : new FormControl('', Validators.required),

    });

   }

  ngOnInit() {

  }


onSubmit(){
  if(this.contactForm.valid){
    this.http.post("https://formsubmit.co/ajax/ec6479221c79be235c2f0d368760ab94",this.contactForm.value)
        .subscribe({
          next: (response) => console.log(response),
          error: (error) => console.log(error),
        });
    this.mensajeForm = "correo enviado exitosamente.";
    this.contactForm.reset();

  }else{
    this.mensajeForm = "*completa todos los campos porfavor";
    return;
  }

}



}

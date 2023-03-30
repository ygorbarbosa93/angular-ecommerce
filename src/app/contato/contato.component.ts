import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css'],
  providers: [provideNgxMask()],
})
export class ContatoComponent {
  formContato = this.fb.group({
    nome : ["",[
      Validators.minLength(4),
      Validators.required
    ]],
    assunto: ["",[
      Validators.minLength(10),
      Validators.required
    ]],
    tel: ["",[
      Validators.minLength(11),
      Validators.required
    ]],
    email: ["",[
      Validators.email,
      Validators.required
    ]],
    mensagem: ["",[
      Validators.minLength(20),
      Validators.required
    ]]
  })
  
  
  constructor(
    private fb: FormBuilder
  ){}

  enviarFormulario(){
    alert("Dados enviados com sucesso!")
    this.formContato.reset();
  }
}

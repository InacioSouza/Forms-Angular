import { Component } from '@angular/core';
import { DadosCadastro } from 'src/app/dominio/dados-cadastro.type';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  dadosForm: DadosCadastro = {
    nome: '',
    sobrenome: '',
    email: '',
    whatsapp: '',
    estadoCivil: '',
    endereco: {
      cep: '',
      estado: '',
      cidade: '',
      bairro: '',
      rua: '',
      numero: '',
      complemento: ''
    }
  }


  cadastrar(): void {
    console.log(this.dadosForm);
  }

}

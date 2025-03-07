import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-reativo',
  templateUrl: './form-reativo.component.html',
  styleUrls: ['./form-reativo.component.scss']
})
export class FormReativoComponent {

  formReativo!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formReativo = this.formBuilder.group({
      nome: ['Inácio', [Validators.required, Validators.minLength(3)]],
      sobrenome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      whatsapp: ['', [Validators.required]],
      estadoCivil: ['', Validators.required],
      endereco: formBuilder.group({
        cep: ['', [Validators.required]],
        estado: ['', [Validators.required]],
        cidade: ['', [Validators.required]],
        bairro: ['', [Validators.required]],
        rua: ['', [Validators.required]],
        numero: ['', [Validators.required]],
        complemento: ['']
      })
    })
  }

  isInvalid(campo: string): boolean {
    return (!this.formReativo.get(campo)?.valid && this.formReativo.get(campo)?.touched) as boolean;
  }

  cadastrar(): void {

  }

  teste(){
    console.log('Válido?' + this.formReativo.get('endereco.cep')?.valid)
  }
}

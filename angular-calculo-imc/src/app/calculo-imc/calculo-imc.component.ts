import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-calculo-imc',
  templateUrl: './calculo-imc.component.html',
  styleUrls: ['./calculo-imc.component.css']
})
export class CalculoImcComponent implements OnInit {

  formulario: FormGroup;

  peso: number;
  altura: number;
  imc: number;
  
  constructor(private formBuilder: FormBuilder) { 
    this.peso = 0;
    this.altura = 0;
    this.imc = 0;
    this.formulario = this.formBuilder.group({
      peso: 0,
      altura: 0
    });
  }

  ngOnInit(): void {
  }

  public calcular() {
    if(this.formulario.value.peso.includes(",") || this.formulario.value.peso.includes(".") || this.formulario.value.altura.includes(",") || this.formulario.value.altura.includes("."))
      alert("Não use vírgula, nem ponto.")
    this.imc = this.formulario.value.peso / ((this.formulario.value.altura/100) * (this.formulario.value.altura/100));
  }

}

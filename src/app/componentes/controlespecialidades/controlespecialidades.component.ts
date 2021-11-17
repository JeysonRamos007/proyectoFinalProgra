import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-controlespecialidades',
  templateUrl: './controlespecialidades.component.html',
  styleUrls: ['./controlespecialidades.component.css']
})
export class ControlespecialidadesComponent implements OnInit {

  especialidad={

  }
  ingresar(){
    console.log(this.especialidad)
  }

  constructor( ) { }

  ngOnInit(): void {
  }

}

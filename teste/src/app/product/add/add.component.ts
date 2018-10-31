import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ColecionadorService } from 'src/app/services/colecionador.service';
import { Router } from '@angular/router';

@Component({    
    templateUrl: './add.component.html'
  })
export class AddProductComponent implements OnInit {
  
  colecionadorForm : FormGroup

  constructor(
      private formBuilder: FormBuilder,
      private service: ColecionadorService,
      private router: Router
  ){}
  
  ngOnInit(){
    this.colecionadorForm = this.formBuilder.group({
        id: '',
        nome:'',
        email:'',
        senha:''
    });
  }

  save(){
    this.service.adicionarColecionador(this.colecionadorForm.value).subscribe(
        res => {
            this.router.navigate(['']);
        },
        error => {
            console.log(error);
        }
    );
  }
}
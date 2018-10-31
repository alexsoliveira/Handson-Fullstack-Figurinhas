import { Component, OnInit } from '@angular/core';
import { ColecionadorService } from 'src/app/services/colecionador.service';
import { Colecionador } from 'src/app/entities/colecionador.entity';
import { Router } from '@angular/router';

@Component({    
    templateUrl: './index.component.html'
  })
export class ProductListComponent implements OnInit {
  
  colecionadores: Colecionador[];

  constructor(
      private productService : ColecionadorService,
      private router: Router
  ){}
  
  ngOnInit(){
    this.loadData();
  }

  delete(id:string){
      var result = confirm('Are you sure?');
      if(result){
        this.productService.deletarColecionador(id).subscribe(
            res => {                
                this.router.navigate(['']);
            },
            error => {
                console.log(error);
            }                                                
        );
      }
  }

  loadData(){
    this.productService.listarColecionadores()
        .subscribe(res => {            
            this.colecionadores = res;
        },
        error => {
            alert(error);
        });
  }
}
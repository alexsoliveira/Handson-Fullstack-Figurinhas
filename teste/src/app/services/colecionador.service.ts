import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Colecionador } from '../entities/colecionador.entity';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ColecionadorService {
    private BASE_URL : string = "http://localhost:56349/api/colecionador/";

    constructor(
        private http: Http
    ){}

    listarColecionadores(): Observable<Colecionador[]>{
        return this.http.get(this.BASE_URL + 'listar')
            .pipe(map((res: Response) =>
                res.json()));
    }

    obterColecionador(id: string): Observable<Colecionador>{
        return this.http.get(this.BASE_URL + 'obterPorId/' + id)
            .pipe(map((res: Response) =>
                res.json()));
    }

    deletarColecionador(id : string){
        return this.http.delete(this.BASE_URL + 'deletar/' + id)
            .pipe(map((res: Response) =>
                res.json()));
    }

    adicionarColecionador(colecionador : Colecionador){
        return this.http.post(this.BASE_URL + 'adicionar', colecionador)
            .pipe(map((res: Response) =>
                res.json()));
    }
}
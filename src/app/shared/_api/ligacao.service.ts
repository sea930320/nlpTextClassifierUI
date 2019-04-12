import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalConstants } from '../_constants/global.constants';

@Injectable()
export class LigacaoService {
    ligacaoRoute: string;

    constructor(private constants: GlobalConstants, private http: HttpClient) {
        this.ligacaoRoute = `${this.constants.APIURL}/ligacaos`
    }

    getLigacaos(data) {
        return this.http.get<any>(this.ligacaoRoute, {
            params: data
        });
    }

    showLigacao(id) {
        return this.http.get<any>(this.ligacaoRoute + '/' + id);
    }

    storeLigacao(data) {
        return this.http.post<any>(this.ligacaoRoute, data);
    }

    updateLigacao(id, data) {
        return this.http.patch<any>(this.ligacaoRoute + '/' + id, data);
    }

    deleteLigacao(id) {
        return this.http.delete<any>(this.ligacaoRoute + '/' + id);
    }
}

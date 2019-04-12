import { Injectable } from '@angular/core';
import { isDevMode } from '@angular/core';

@Injectable()
export class GlobalConstants {
    readonly BASEURL: string;
    readonly ROOTURL: string;
    readonly APIURL: string;
    isLocal: boolean;

    constructor() {
        if (this.getMode() !== true) {
            console.log("production");
            this.BASEURL = 'http://10.63.0.17'
            this.ROOTURL = 'http://10.63.0.17:81'
            this.APIURL = this.ROOTURL + '/api';
        }
        else {
            console.log("development");
            this.BASEURL = 'http://localhost'
            this.ROOTURL = 'http://localhost:8000'
            this.APIURL = this.ROOTURL + '/api';
        }
    }

    private getMode() {
        this.isLocal = isDevMode();
        console.log("constants mode isLocal", this.isLocal);
        return this.isLocal;
    }
}

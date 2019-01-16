import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ServerService {
    constructor(private http: Http) {}

    storeServers(servers: any[]) {
        // add "data.json" to send the json.
        return this.http.post('https://angular-training-d4693.firebaseio.com/data.json', servers);
    }

}

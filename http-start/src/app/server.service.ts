import { Observable } from 'rxjs-compat';
import { Injectable } from '@angular/core';
import { Headers , Http, Response } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';

@Injectable()
export class ServerService {
    constructor(private http: Http) {}

    storeServers(servers: any[]) {
        const headers = new Headers({'Content-Type': 'application/json'});

        // add "data.json" to send the json.
        return this.http.put('https://angular-training-d4693.firebaseio.com/data.json', servers,
            {headers: headers});
        // The Put request will override the old data but the Post wil create a new one.
    }

    getServers() {
        return this.http.get('https://angular-training-d4693.firebaseio.com/data.json')
            .map(
                (response: Response) => {
                    // This "response.json()" will auto transform raw-json to json-object.
                    const data = response.json();
                    return data;
                }
            )
            .catch(
                (error: Response) => {
                    return Observable.throw(error);
                }
            );
    }

}

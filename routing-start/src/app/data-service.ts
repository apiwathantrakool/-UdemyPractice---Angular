import { Observable } from 'rxjs-compat';
import { Injectable } from '@angular/core';
import { Headers , Http, Response } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';

@Injectable()
export class DataService {
    constructor(private http: Http) {}

    getCompanyList() {
        return this.http.get('https://angular-training-d4693.firebaseio.com/company-list.json')
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

    addCompany(companyList: any[]) {
        const headers = new Headers({'Content-Type': 'application/json'});
        const company = { id :'Test-ID', name:'Test-Name', owner: 'Test-Owner'};
        companyList.push(company);
        
        return this.http.put('https://angular-training-d4693.firebaseio.com/company-list.json', companyList,
            {headers: headers});
    }

    removeCompany(companyList: any[]) {
        const headers = new Headers({'Content-Type': 'application/json'});
        const idRamdom = Math.floor(Math.random() * companyList.length); 
        console.log(idRamdom); 
        companyList.splice(idRamdom,1);
        return this.http.put('https://angular-training-d4693.firebaseio.com/company-list.json', companyList,
        {headers: headers});
    }

    updateCompany(companyList: any[]) {
        const headers = new Headers({'Content-Type': 'application/json'});
        const idRamdom = Math.floor(Math.random() * companyList.length); 
        console.log(idRamdom); 
        companyList[idRamdom].name += 'Change';
        return this.http.put('https://angular-training-d4693.firebaseio.com/company-list.json', companyList,
        {headers: headers});
    }

}

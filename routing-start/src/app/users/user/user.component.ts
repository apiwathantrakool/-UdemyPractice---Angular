import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { DataService } from 'src/app/data-service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [DataService]
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  paramsSubscription: Subscription;

// ----------------For HTTP request--------------------------
  companyList = [];
  isShowCompanyList = false;
// ----------------------------------------------------------

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };
    this.paramsSubscription = this.route.params.subscribe(
      (param: Params) => {
        this.user.id = param['id'];
        this.user.name = param['name'];
      }
    );
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

  getCompanyList() {
    this.dataService.getCompanyList()
      .subscribe(
        (companyList: any[]) => {
          console.log(companyList);
          this.companyList = companyList;
        }
      );
  }

  onClickShowCompanyList() {
    this.isShowCompanyList = true;
    this.getCompanyList();
  }

  onClickAddCompany() {
    this.dataService.addCompany(this.companyList)
      .subscribe(
        (response: any) => {
          console.log(response);
        }
      );
  }
  
  onClickRemoveCompany() {
    this.dataService.removeCompany(this.companyList)
    .subscribe(
      (response: any) => {
        console.log(response);
      }
    );
  }

  onClickUpdateCompany() {
    this.dataService.updateCompany(this.companyList)
    .subscribe(
      (response: any) => {
        console.log(response);
      }
    );
  }

}

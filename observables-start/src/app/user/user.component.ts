import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // Observeable will receive 3 arguments (data, error, complete).
    this.route.params
      .subscribe(
        (params: Params) => {
          // Data argument
          this.id = +params['id'];
        },
        () => {
          // Error argument
        },
        () => {
          // Complete argument
        }
      );
  }

}

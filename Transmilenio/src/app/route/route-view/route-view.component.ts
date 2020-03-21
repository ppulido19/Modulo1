import { Component, OnInit } from '@angular/core';
import { Route } from '../shared/route';
import { RouteService } from '../shared/route.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-route-view',
  templateUrl: './route-view.component.html',
  styleUrls: ['./route-view.component.css']
})
export class RouteViewComponent implements OnInit {
  routeT: Route = null;
  errorMessage = '';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private routeService: RouteService
  ) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap(params => this.routeService.findById(+params.get('id')))
      )
      .subscribe(result => {
        console.log(result);
        this.routeT = result;
      });

    // The following code could be used instead of the above, if and only if the user would never
    // navigate directly from one employee-view to another employee-view screen

    // this.employeeService
    //   .findById(+this.route.snapshot.paramMap.get('id'))
    //   .subscribe(result => {
    //     this.employee = result;
    //   });
  }

  backToList() {
    this.router.navigate(['/route/list']);
  }
}

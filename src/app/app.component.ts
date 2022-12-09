import { Component, OnInit } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { of, interval } from 'rxjs';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

	value = '';
	constructor() {
	}

	ngOnInit(): void {
		interval(1000)
		.pipe(
			map(
				(value: any) => {
					if (value == 4) {
						throw 'err';
					}
					return value;
				}
			),
			catchError(err => {
				console.log(err);
				return of(err);
			})
		).subscribe(value => {
			this.value = value; 
		});
	}

}

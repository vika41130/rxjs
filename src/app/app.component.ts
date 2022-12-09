import { Component, OnInit } from '@angular/core';
import { of, interval, concat } from 'rxjs';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

	constructor() {
	}

	ngOnInit(): void {
		// concat(
		// 	of(1, 2, 3),
		// 	of(4, 5, 6),
		// 	of(7, 8, 9)
		// ).subscribe(val => console.log(val));

		// when source never completes, any subsequent observables never run
			concat(
				interval(1000),
				of('This', 'Never', 'Runs')
			)
			// log: 1,2,3,4.....
			.subscribe(console.log);
	}

}

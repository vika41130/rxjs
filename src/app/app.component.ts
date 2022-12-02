import { Component } from '@angular/core';
import { take, map, combineLatestAll } from 'rxjs/operators';
import { interval } from 'rxjs';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	source$: any;
	example$: any;
	result: any[] = [];
	constructor() {
		// emit every 1s, take 2
		this.source$ = interval(1000).pipe(take(2));
		// map each emitted value from source to interval observable that takes 5 values
		this.example$ = this.source$.pipe(
			map(val =>
				interval(1000).pipe(
					map(i => ` (${val} - ${i})`),
					take(5)
				)
			)
		);
		this.example$
			.pipe(combineLatestAll())
			.subscribe((value: any) => {
				this.result.push(value);
				console.log(value);
			});
	}


}

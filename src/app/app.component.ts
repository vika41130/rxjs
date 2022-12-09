import { Component, OnInit } from '@angular/core';
import { of, endWith, finalize, startWith } from 'rxjs';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

	constructor() {}

	ngOnInit(): void {
		const source$ = of(1, 2);
		source$
		.pipe(
			startWith(0),
			endWith(-3, -4), // emit on completion
			// do action on complete
			finalize(() => {
				console.log('finalize');
			})
		)
		.subscribe(val => {
			console.log(val);
		});
	}
}

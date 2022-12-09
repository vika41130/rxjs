import { Component, OnInit } from '@angular/core';
import { map, mergeMap, take } from 'rxjs/operators';
import { of, interval } from 'rxjs';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

	list: any[] = [];
	constructor() {
	}

	ngOnInit(): void {
		const letters = of('a', 'b', 'c');
		const result = letters.pipe(
			mergeMap(x => interval(1000).pipe(
				map(i => x+i),
				take(5)
			)),
		);
		result.subscribe(x => {
			this.list.push(x);
			console.log(x)
		});
		;
	}

}

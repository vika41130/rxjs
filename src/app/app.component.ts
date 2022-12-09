import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { map, debounceTime } from 'rxjs/operators';
import { fromEvent } from 'rxjs';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

	@ViewChild('input') input!: ElementRef;
	// input: any;
	value = '';
	constructor() {
	}
	
	ngAfterViewInit(): void {
		// this.input = document.getElementById('input');
		fromEvent(this.input.nativeElement, 'keypress')
		.pipe(
			debounceTime(500),
			map(
				(value: any) => {
					return value.target.value;
				}
			)
		).subscribe(value => {
			this.value = value; 
		});
	}

}

import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

	constructor() {
	}

	ngOnInit(): void {
		this.testPromise();
	}

	private testPromise() {
		// Promise.resolve('done')
		// .then(
		// 	(data) => {
		// 		console.log(data);
		// 		throw Error('fail');
		// 		// return data;
		// 	},
		// 	// (err) => {
		// 	// 	console.log(err);
		// 	// }
		// )
		// .then(
		// 	(data) => {
		// 		console.log(data + '2');
		// 	},
		// 	// (err) => {
		// 	// 	console.log(err);
		// 	// }
		// )
		// .catch((err) => {
		// 	console.error(err);
		// 	// return 'catch';
		// })
		// .then((data) => {
		// 	console.log("Do this, no matter what happened before");
		// 	console.log(data);
		// })
		// const p = Promise.all([1, 2, 3]);
		// const p2 = Promise.all([1, 2, 3, Promise.resolve(444)]);
		// const p3 = Promise.all([1, 2, 3, Promise.reject(555)]);

		// setTimeout(() => {
		// 	console.log(p);
		// 	console.log(p2);
		// 	console.log(p3);
		// });
		// p2.then(
		// 	(data) => {
		// 		console.log({data});
		// 	},
		// 	(err) => {
		// 		console.error(err);
		// 	}
		// );
		// p3.then(
		// 	(data) => {
		// 		console.log({data});
		// 	},
		// 	(err) => {
		// 		console.error({err});
		// 	}
		// );
		Promise.race([]).then(
			(data) => {
				console.log({data});
			},
			(err) => {
				console.log({err});
			}
		);
	}
}

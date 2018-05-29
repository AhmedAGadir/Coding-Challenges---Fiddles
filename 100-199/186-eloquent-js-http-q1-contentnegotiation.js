// eloquent js - ch 18 - http - ex1

let a = fetch('http://eloquentjavascript.net/author', {
  			headers: {Accept: 'text/plain'}
		})
		.then(res => res.text())
		.then(data => console.log('text: ', data));

let b = fetch('http://eloquentjavascript.net/author', {
  			headers: {Accept: 'application/json'}
		})
		.then(res => res.json())
		.then(data => console.log('json: ', data));

let c = fetch('http://eloquentjavascript.net/author', {
  			headers: {Accept: 'text/html'}
		})
		.then(res => res.text())
		.then(data => console.log('html: ', data));
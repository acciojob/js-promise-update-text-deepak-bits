//your JS code here. If required.
function promiseFactory() {
	return new Promise((resolve, reject) => {
		setTimeOut(() => {
			resolve('Hello, world!');
		}, 1000)
	})
}

promiseFactory()
.then(data => document.getElementById('output').textContent = data);
# Promise +
Promise with callback in each step.

### Content
- `promise()`
- `then()`
- `catch()`

### Usage
```js
promise(function(done, reject){
	console.log('init');
    done(3);

}).then(function(result, done, reject){
	console.log('next 1', result); // result=3
    done(2);

}).then(function(result, done, reject){
	console.log('next 2', result); // result=2

}).catch(function(err){
	console.error(err);;

})
```

### License
MIT

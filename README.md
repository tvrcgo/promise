# flow
JS 异步流程控制

### Content
- `flow()`
- `next()`

### Usage
```js
flow(function(pass){
	console.log('init');
    pass(3);
}).next(function(result, pass){
	console.log('next 1', result); // 3
    pass(2);
}).next(function(result, pass){
	console.log('next 2', result); // 2
})
```
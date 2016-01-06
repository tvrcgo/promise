'use strict';

/**
 * promise
 * @param  {function} fn
 */
function promise(fn){
    if (!(this instanceof promise)) {
        return new promise(fn);
    }
    this.promise = new Promise(function(resolve, reject){
        fn && fn(resolve, reject);
    });
};

/**
 * then
 * @param  {Function} fn
 * @return {object}      [promise]
 */
promise.prototype.then = function(fn){
    return promise(function(resolve, reject){
        this.promise.then(function(result){
            fn && fn(result, resolve, reject);
        }).catch(function(err) {
            reject(err);
        });
    }.bind(this));
}

/**
 * catch
 * @param  {Function} fn [description]
 * @return {object}      [promise]
 */
promise.prototype.catch = function(fn) {
    this.promise.catch(fn);
    return this;
}

module.exports = promise;

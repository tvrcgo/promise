/**
 * 异步流程控制 Flow
 * @author tvrcgo
 */
function flow(fn){

    if ( !(this instanceof flow) ) {
        return new flow(fn);
    }

    this._flow = [];
    this._run = false;

    this._flow.push(fn);

    this._pass = function(ret){
        this._last = ret;
        if ( this._flow.length ) {
            this._flow.shift().call(this, this._last, this._pass);
        }
        else {
            this._run = false;
        }
    }.bind(this);

};

/**
 * 加新任务到流程
 */
flow.prototype.next = function(fn){
    this._flow.push(fn);
    if (!this._run) {
        this._run = true;
        this._flow.shift().call(this, this._last, this._pass);
    }
    return this;
};


module.exports = flow;

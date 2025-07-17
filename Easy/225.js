// 225. Implement Stack using Queues
var MyStack = function() {
    this.queue = [];
};

MyStack.prototype.push = function(x) {
    this.queue.push(x);
    for (let i = 0; i < this.queue.length - 1; i++) {
        this.queue.push(this.queue.shift());
    }
};

MyStack.prototype.pop = function() {
    return this.queue.shift();
};

MyStack.prototype.top = function() {
    return this.queue[0];
};

MyStack.prototype.empty = function() {
    return this.queue.length === 0;
};

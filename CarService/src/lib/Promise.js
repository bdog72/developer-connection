//
//
class Promise {
  //
  constructor(executionFunction) {
    //
    this.promiseChain = [];
    this.onResolve = this.onResolve.bind(this);
    this.onReject = this.onReject.bind(this);

    executionFunction(this.onResolve, this.onReject);
  }

  then(callback) {
    this.promiseChain.push(callback);

    return this;
  }

  onResolve() {}

  onReject() {}
}

module.exports = Promise;


Function.prototype.bind1 = function () {
  const args = Array.prototype.slice.call(arguments);
  const _this = args.shift();

  const self = this;

  return function () {
    return self.apply(self, args)
  }
}
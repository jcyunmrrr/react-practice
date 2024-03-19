"use strict";

var multiplier = {
  numbers: [1, 3, 5, 7, 9],
  multiplyBy: 4,
  multiply: function multiply() {
    var _this = this;
    return this.numbers.map(function (num) {
      return num * _this.multiplyBy;
    });
  }
};
console.log(multiplier.multiply());

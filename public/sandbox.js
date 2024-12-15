// let greet: Function = () => {
//   console.log('hello, world');
// }
// greet = 'hello';
// greet = () => {
//   console.log('hello, again');
// }
var add = function (a, b, c /*?*/) {
    if (c === void 0) { c /*?*/ = 10; }
    console.log(a + b);
    console.log(c);
};
add(5, 11, 'ninja');
var minus = function (a, b) {
    return a + b;
};
var result = minus(10, 7);
console.log(result);
var exampleCondition = function (x) { return x % 2 == 0 ? x + 2 : x - 2; };
console.log(exampleCondition(5));
var allNumber = function (n) {
    var stringSequence = "";
    var x = 0;
    while (x <= n) {
        stringSequence += x;
        if (x < n) {
            stringSequence += " ";
        }
        x++;
    }
    return stringSequence;
};
var result1 = allNumber(5);
console.log(result1);
var allNumberRev = function (n) {
    var stringSequence = "";
    while (n >= 0) {
        stringSequence += n;
        if (n >= 0) {
            stringSequence += " ";
        }
        n--;
    }
    return stringSequence;
};
var result2 = allNumberRev(5);
console.log(result2);
var allNumberRange = function (lower) { return function (upper) {
    var stringSequence = "";
    while (lower <= upper) {
        stringSequence += lower;
        if (lower <= upper) {
            stringSequence += " ";
        }
        lower++;
    }
    return stringSequence;
}; };
var result3 = allNumberRange(0)(5);
console.log(result3);

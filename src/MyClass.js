"use strict";
var MyClass = (function () {
    function MyClass() {
    }
    MyClass.Hello = function (name) {
        return "hello" + name;
    };
    return MyClass;
}());
exports.MyClass = MyClass;

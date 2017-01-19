import * as MyClass from './MyClass';
import jquery = require('jquery');

jquery(() => {
    // jquery(document.body).html(MyClass.MyClass.Hello("Mike"));
    jquery(document).ready(() =>
    {
        jquery("#goButton").click(() => {
            jquery("#resultText").html(MyClass.MyClass.Hello(jquery("#name").val()));
        });
    });
})
// console.log(MyClass.MyClass.Hello("Mike"));
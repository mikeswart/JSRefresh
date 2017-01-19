import * as MyClass from './MyClass';
import jquery = require('jquery');

jquery(() => {
    jquery(document.body).html(MyClass.MyClass.Hello("Mike"));
})
// console.log(MyClass.MyClass.Hello("Mike"));
var o = {
    v: 'hello',
    p: ['a1', 'a2'],
    f: function f(){
        this.p.forEach(function(element) {
            console.log(this.v + ' ' + element);
        }, this);
    }
}

o.f();

var oo = {
    p: 'hello',
    f1: function(){
        console.log(this.p);
        var f2 = function(){
            console.log(this.p);
        }();
    }
}

oo.f1(); //hello ,undefined
var hello = oo.f1;
hello(); //undefined, undefined
function f(){
    console.log(new.target === f);
}

f();
new f();
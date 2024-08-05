function fun(){
    console.log("start");
    
    SetTimeout(function(){
        console.log("1st")
    },7000);
    SetTimeout(function(){
        console.log("2nd")
    },5000);

    console.log("end");
    
}
fun();
for(let i=0;i<100000000000;i++){
    
}

setTimeout(() => {
    console.log("3rd")
}, 0);
//higher order function......

function abcd (val){

}
abcd(function(){})


function abcd(){
     return function(){

     }
}
abcd()

// constructar function.......

function biskit(){
    this.width = 99;
    this.height = 99;
    this.color = "red";
}

var biskit1 = new biskit();

function bbiskit(color){
    this.width = 99;
    this.height = 99;
    this.color = color;
}

var bbiskit2 = new bbiskit("red");
console.log(bbiskit2);


//first class function..................

setTimeout(function(){

})


//IMmediately invoked function expression..........

var ans = (function(){
   var a = 33;   
   
   return {
    getter:function(){
        console.log(a);
    },
    setter:function(val){
       a = val;    
    }
   }
   
})();



var age = (function(){
    var myage = 22;

    return {
        getter:function(){
            console.log(myage);
        },
        setter:function(val){
            myage = val;
        }
    }
})();

//Prototype inheritance................

var human = {

}

var man = {

}

man.__proto__ = human;


var budgetController = (function() {

    var x = 23;

    var add = function(a) {
        return x + a;
    }

    return {
        publicTest: function(b){
            return add(b);
        }
    }
})();

var UIController = (function(){

})();


//This helps link the UIController with the budgetController
var controller = (function(budgetCtrl, UICtrl){

    var z = budgetCtrl.publicTest(5);

    return {
        anotherPublic: function(){
            console.log(z);
        }
    }

})(budgetController, UIController);
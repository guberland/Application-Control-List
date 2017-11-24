
// var theURL = "http://jobs.fortinet.com/test.json"
// var my data;
var my_data;

var getData = function (){
    var theURL = "http://jobs.fortinet.com/test.json"

     $.get(theURL, function( my_var ) {
    new_var = my_var.substring(0,my_var.length-1);
    my_data = JSON.parse( new_var);
    show_results(my_var);
}, 'text');     //data from to another place in the load
};

window.onload = getData;


function show_results(results) {
 alert(my_data);
}


console.log(my_data);


var ViewModel = function() {
     var self = this;



}

var viewModel = new ViewModel();
ko.applyBindings(viewModel);
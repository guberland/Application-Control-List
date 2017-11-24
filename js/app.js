
// var theURL = "http://jobs.fortinet.com/test.json"
// var my data;
var my_data;

var getData = function (){
    var theURL = "https://github.com/guberland/Application-Control-List/blob/master/test.json"

     $.get(theURL, function( my_var ) {
    new_var = my_var.substring(0,my_var.length-1);
    my_data = JSON.parse( new_var);
    console.log(my_data);
    // normalizeJSON(my_data);
    $.each(my_data,function(i,app){
        $('#list').append('<h3>'+my_data[i][0]+'</h3>');
    })

}, 'text');     //data from to another place in the load
};

window.onload = getData;

// var normalizeJSON = function(data){
//     for each
// }


console.log(my_data);


// var ViewModel = function() {
//      var self = this;
//      console.log("hi");
//      this.datalist = ko.observableArray(my_data);

// }

// var viewModel = new ViewModel();
// ko.applyBindings(viewModel);


// var theURL = "http://jobs.fortinet.com/test.json"
// var my data;

var getData = function (){
<<<<<<< HEAD
    var theURL = "http://jobs.fortinet.com/test.json"
    var namelist=[];
=======
    var theURL = "https://github.com/guberland/Application-Control-List/blob/master/test.json"

>>>>>>> origin/master
     $.get(theURL, function( my_var ) {
    new_var = my_var.substring(0,my_var.length-1);
    var parsed_data = JSON.parse( new_var);

    viewModel.datalist(parsed_data);

    $.each(parsed_data,function(i,app){
        namelist.push(parsed_data[i][0]);

    })
    console.log(namelist);

    viewModel.names(namelist);
}, 'text');     //data from to another place in the load
};

window.onload = getData;







<<<<<<< HEAD
var ViewModel = function() {
    var self = this;

    this.datalist = ko.observableArray();
    self.names = ko.observableArray([]);
    this.query = ko.observable('');

    self.query = ko.observable('');

    self.filteredNames = ko.pureComputed(function(){
        return self.names().filter(function(item) {
            return item.toLowerCase().indexOf(self.query().toLowerCase()) >= 0;
        });
    });




}

var viewModel = new ViewModel();
ko.applyBindings(viewModel);
=======
// var viewModel = new ViewModel();
// ko.applyBindings(viewModel);
>>>>>>> origin/master

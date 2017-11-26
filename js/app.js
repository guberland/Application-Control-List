use strict;
//function that runs on window load that retrieve and parse data
var getData = function (){
    // var theURL = "http://jobs.fortinet.com/test.json";
    // the value of theURL is changed for github display purpose
    var theURL = "./test.json";
    var namelist=[];

     $.get(theURL, function( my_var ) {
        var new_var = my_var.substring(0,my_var.length-1);
        var parsed_data = JSON.parse( new_var);

        viewModel.datalist(parsed_data);
        $.each(parsed_data,function(i,app){
            namelist.push(parsed_data[i][0]);
        });

        var parsed_JSON = parsed_data.map(function(i){
            return {
                app_name:i[0],
                app_type:i[1],
                user_permission:i[2],
                group_permission:i[3],
                other_permission:i[4],
                date:i[5],
                company:i[6],
                website:i[7],
                ctrl_reason:i[8],
                explanation:i[9],
                category_code:i[10],
                app_fullname:i[11],
                action:i[12],
                URL:i[13],
                number_col4:i[14],
                number_col5:i[15],
                unknown_col:i[16]
            };
        });

        viewModel.names(namelist);
        viewModel.datalist(parsed_JSON);
    }, 'text');
};


window.onload = getData;

//event function that populate content on item clicking
$("ul").on("click","button",function(){
    var name = this.innerHTML;

    $("#content").css('border','1px solid black');
    for (var x of viewModel.datalist()){
        if ( name == x.app_name)
        $("#content").html(populateContent(x));
    }
});


    var populateContent = function(i){
        return '<h1 id="app-title">' + i.app_fullname + '</h1>' + '<hr>'
              + '<h3><div id="app-fullname">' + i.app_name
              + '<div id="app-date">' + "Registered Date: " + i.date + '</h3>'
              + '<h3 id="app-type">' + "Category: " + i.app_type + '</h3>'
              + '<h3 id="app-register_name">' + "Company: " + i.company+'</h3>'
              + '<h3 id="app-URL">' + i.URL+'</h3>'+'<hr>'
              + '<h3 id="ctrl">' + "Control Reason: " + i.ctrl_reason + '</h3>'
              + '<h3 id="app-URL">' + "Explanation:<p>" + i.explanation + '</p></h3>'
              + '<h3 id="app-action">' + "Available Action: " + i.action + '</h3><br><hr>'
              + '<h4 id="app-policy">' + "User Permission: " + i.user_permission
              + ", Group Permission: " + i.group_permission
              + ", Other Permission: " + i.other_permission + '</h4>'
              + '<h4 id="app-website">' + i.website + '</h4>'
              + '<h4 id="cate-code">' + "Category Code: " + i.category_code + '</h4>';
              //hidden data due to unknown usage
              // +'<h3 id="app-policy">'+i.unknown_col+'</h3>'
              // +'<h3 id="app-policy">'+i.number_col4+'</h3>'
              // +'<h3 id="app-policy">'+i.number_col5+'</h3>'
     };


var ViewModel = function() {
    var self = this;
    self.datalist = ko.observableArray();
    self.names = ko.observableArray([]);
    self.query = ko.observable('');

    self.filteredNames = ko.pureComputed(function(){
        return self.names().filter(function(item) {
            return item.toLowerCase().indexOf(self.query().toLowerCase()) >= 0;
        });
    });
};

var viewModel = new ViewModel();
ko.applyBindings(viewModel);

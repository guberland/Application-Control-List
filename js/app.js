
// var theURL = "http://jobs.fortinet.com/test.json"
// var my data;

var getData = function (){
    var theURL = "http://jobs.fortinet.com/test.json"
    var namelist=[];

     $.get(theURL, function( my_var ) {
    new_var = my_var.substring(0,my_var.length-1);
    var parsed_data = JSON.parse( new_var);

    viewModel.datalist(parsed_data);
    $.each(parsed_data,function(i,app){
        namelist.push(parsed_data[i][0]);
    });

    var parsed_JSON = parsed_data.map(function(i)
    {
        return {
            app_name:i[0],
            app_type:i[1],
            number_col1:i[2],
            number_col2:i[3],
            number_col3:i[4],
            date:i[5],
            register_name:i[6],
            website:i[7],
            ctrl_reason:i[8],
            explanation:i[9],
            policy_number:i[10],
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


     $("ul").on("click","button",function(){
      var name = this.innerHTML;
      console.log(viewModel.datalist());
      for (var x of viewModel.datalist()){
        if ( name == x.app_name)
        $("#content").html(populateContent(x));}

    });


    var populateContent = function(i){
        return '<h3>'+i.app_name+'</h3>';
     }





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
}


var viewModel = new ViewModel();
ko.applyBindings(viewModel);
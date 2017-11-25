
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
            user_permission:i[2],
            group_permission:i[3],
            other_permission:i[4],
            date:i[5],
            company:i[6],
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
        return '<h1 id="app-title">'+i.app_name+'</h1>'+'<hr>'
              +'<h2 id="app-fullname">'+i.app_fullname+'</h2>'
              +'<h3 id="app-register_name">'+"Company: "+i.company+'</h3>'
              +'<h3 id="app-date">'+"Registered Date: "+i.date+'</h3>'
              +'<h3 id="app-type">'+"Category: "+i.app_type+'</h3>'+'<br>'
              +'<h3 id="app-URL"><p>&ensp;'+i.explanation+'</p></h3>'
              +'<h3 id="ctrl">'+i.ctrl_reason+'</h3>'

              +'<h2 id="app-action">'+i.action+'</h2>'

              +'<h3 id="app-website">'+i.website+'</h3>'
              +'<h2 id="app-policy">'+i.policy_number+'</h2>'
              +'<h3 id="app-policy">'+i.unknown_col+'</h3>'
              +'<h3 id="app-policy">'+i.number_col4+'</h3>'
              +'<h3 id="app-policy">'+i.number_col5+'</h3>'
              +'<h4 id="app-policy">'+"User permission: "+i.user_permission+'</h4>'
              +'<h4 id="app-policy">'+"Group permission: "+i.group_permission+'</h4>'
              +'<h4 id="app-policy">'+"Other permission: "+i.other_permission+'</h4>'
              +'<h3 id="app-policy">'+i.URL+'</h3>'
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
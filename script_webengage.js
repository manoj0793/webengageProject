
function query_param()
{
	 var vars = {};
     var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
		console.log(key);
		console.log(value);
		document.getElementById("radio"+value).checked = true;
    });
	
    return vars;
}
    
function auto_select_param()
{
var fs = window.RequestFileSystem || window.webkitRequestFileSystem;

  if (!fs) {
    console.log("check failed?");
  } else {
    fs(window.TEMPORARY,100, ()=>{ query_param(); } , ()=>{ });
	
  }
  
}

//$(document).ready(function(){$('input[type=file]').bootstrapFileInput();});


var submitted = false;  
function checkform() {
	//alert($('#username').val());
  if (submitted) {  
	//  alert('already submit');
    return false;  
  } else {  
    submitted = true;  
    return true;  
  }  
}  
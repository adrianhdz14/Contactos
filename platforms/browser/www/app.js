    var isVisible = true;
 
	 function onSuccess(contacts) {
        
        document.getElementById('contactInformation').innerHTML = JSON.stringify(contacts, null, 4);
    };
    
    function onError(contactError) {
        alert('onError!');
    };
   
    document.addEventListener("deviceready", onDeviceReady, false);
    //
    function onDeviceReady() {
        
	   if (device.platform == 'Android') {
           
            document.addEventListener('DOMContentLoaded', function() { FastClick.attach(document.body); }, false);
            
        }
      
        var porId=document.getElementById("nombre").value;
	   
        var options      = new ContactFindOptions();
        options.filter   = porId;
        options.multiple = true;
        
        var fields =[navigator.contacts.fieldType.displayName, navigator.contacts.fieldType.name];
        navigator.contacts.find(fields, onSuccess, onError, options);
    }

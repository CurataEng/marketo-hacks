      MktoForms2.whenReady(function() {
        if(typeof mktoMunchkin === 'undefined')  {
          var forms = document.getElementsByTagName("form");
          for(var i=0; i < forms.length; i++) {
           if(forms[i].id.startsWith("mktoForm")) { 
              forms[i].innerHTML = 'Unable to display the form.  Please disable your adblocker and <a href="javascript:window.location.reload();">reload</a> the page to continue.';
           }
         }
        }
      });


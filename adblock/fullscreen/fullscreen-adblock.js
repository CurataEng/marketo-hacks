      window.onload = function() {
        setTimeout(function() {
              if(typeof mktoMunchkin === 'undefined')  {
                document.body.innerHTML = '<div style="background-color:black; height:100%;"><div style="position: absolute; top: 50%; left: 50%; transform: translateX(-50%) translateY(-50%);"><h1 style="color:white; text-align:center; font-family:arial;">Please disable your adblocking software for this site and <a href="javascript:location.reload()" style="color:white;">click here</a> to continue.</h1></div></div>';
               document.body.setAttribute("style", "margin:0px;");
              }
        }, 1000);
      }


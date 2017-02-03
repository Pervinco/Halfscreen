window.addEventListener("load", loadFunctions);

function loadFunctions() {
    document.getElementById("button").addEventListener("click", function(){
         chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
         function(tabs){
            chrome.tabs.create({url: tabs[0].url.replace('watch?v=', 'v/')
         });
      });
   });
}

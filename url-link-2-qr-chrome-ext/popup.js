$(document).ready(function(){
    var link;
    chrome.tabs.query({active:true,currentWindow:true,lastFocusedWindow: true},function(tabs){
        link = document.createElement('a');
        link.href = tabs[0].url;
        $("#clink").val(link.href);
        new QRCode(document.getElementById("qrcode"),link.href);
    });
});
var $buoop = {
    required:{e:-1,f:-1,o:-3,s:0,c:-3},
    insecure:true,
    unsupported:true,
    reminder: 0,
    noclose:true,
    style:"bottom",
    api:2018.08
}; 
function $buo_f(){ 
    var e = document.createElement("script"); 
    e.src = "//browser-update.org/update.min.js"; 
    document.body.appendChild(e);
};
try {document.addEventListener("DOMContentLoaded", $buo_f, false)}
catch(e){window.attachEvent("onload", $buo_f)}
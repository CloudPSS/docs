var $buoop = {
    required:{e:-3,f:-3,o:-3,s:-1,c:-3},
    insecure:true,
    unsupported:true,
    reminder: 1e-200,
    reminderClosed: 1e-100,
    no_permanent_hide: true,
    style:"bottom",
    api:2018.12
}; 
function $buo_f(){ 
    var e = document.createElement("script"); 
    e.src = "//browser-update.org/update.min.js"; 
    document.body.appendChild(e);
};
try {document.addEventListener("DOMContentLoaded", $buo_f, false)}
catch(e){window.attachEvent("onload", $buo_f)}
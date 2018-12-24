var $buoop = {
    required:{e:-3,f:-10,o:-5,s:-2,c:-10},
    insecure:true,
    unsupported:true,
    reminder: 1,
    reminderClosed: 24,
    noclose:false,
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
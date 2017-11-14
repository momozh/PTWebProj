var message;

$(document).ready(function(){
	message=gup("status");
	if(message=="success"){
		$("#onloadMessage").modal();
	} else if(message=="openEvent"){
		$("#myModal").modal();
	}
});

function gup( name, url ) {
    if (!url) url = location.href;
    name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
    var regexS = "[\\?&]"+name+"=([^&#]*)";
    var regex = new RegExp( regexS );
    var results = regex.exec( url );
    return results == "#" ? null : results[1];
}

var url;
var delay = 10000;
var oldPect = 0;
var newPect;
var intv;

function redirectLoad()
{
	url=gup("target");
	setTimeout(GoToURL, delay);
}

function GoToURL()
{
	if(typeof IE_fix != "undefined") // IE8 and lower fix to pass the http referer
	{
		var referLink = document.createElement("a");
		referLink.href = url;
		if(!url){
			document.body.appendChild(referLink);
			referLink.click();
		}
	}
	else {window.location.replace(url);}  // All other browsers
}

function gup( name, url ) {
    if (!url) url = location.href;
    name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
    var regexS = "[\\?&]"+name+"=([^&#]*)";
    var regex = new RegExp( regexS );
    var results = regex.exec( url );
    return results == "#" ? null : results[1];
}


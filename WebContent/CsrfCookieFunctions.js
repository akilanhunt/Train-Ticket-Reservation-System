/**
 * 
 */
function getCSRFCookieName(){
	return "csrfparam"; //No I18N
}

function getCSRFCookie(){    
	return get_cookie("x-csrf-token");
}

function get_cookie( cookie_name ){   
	var results = document.cookie.match( cookie_name + '=(.*?)(;|$)' );   
	if ( results ){
		return unescape( results[1] ) ;
		}
	return null;
}
function setCsrfParam(csrfId){
	var csrf = document.getElementById(csrfId);
	csrf.name = getCSRFCookieName();
	csrf.value = getCSRFCookie();
}
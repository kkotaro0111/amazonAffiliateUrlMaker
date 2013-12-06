var params=location.pathname.split("/");
var dppos = params.indexOf("dp") + 1 || params.indexOf("product") + 1 || params.indexOf("ASIN") + 1;


if(dppos === 0){
	console.log("No ASIN code");
	return;
}

var asin = params[dppos];
var url = "http://amazon.jp/dp/"+asin+"/"+window.amzn.affiliate.account;

console.log(url);

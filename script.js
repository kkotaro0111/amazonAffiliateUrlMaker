var params=location.pathname.split("/");
var dppos = params.indexOf("dp");
if(dppos == -1){
  dppos = params.indexOf("product");
}

if(dppos == -1){
	console.log("No ASIN code");
	return;
}

var asin = params[dppos + 1];
var url = "http://amazon.jp/dp/"+asin+"/"+window.amzn.affiliate.account;

console.log(url);

var params=location.pathname.split("/");
var dppos = params.indexOf("dp") + 1 || params.indexOf("product") + 1 || params.indexOf("ASIN") + 1;


if(dppos === 0){
  console.log("No ASIN code");
}else{
  var asin = params[dppos];
  var title = $("#productTitle").text();
  var trimed_title = title.replace(/^[\s]*(.*)[\s]*$/, "$1");
  var url = "http://amazon.jp/dp/"+asin+"/"+window.amzn.affiliate.account;

  console.log(trimed_title, url);

  var form = $("#asamashi");
  if( form.length === 0){
    var form = $("<input />");
    form.attr({
      type: "text",
      id: "asamashi",
      width: "100%",
      readonly: true
    }).css({
      position: "fixed",
      right: 0,
      bottom: 0
    }).on("focus",function(e){
      this.select();
    });

    form.appendTo("body");
  }

  form.val( trimed_title + " " + url );
}

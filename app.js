var express=require("express"),http=require("http");
var app=express();
var server=http.createServer(app);
app.set("view engine","ejs");
app.set("views","./views");
app.use("static/",express.static("./static"));
app.get(/\/(index(\.html)?)?/,function(req,res,next){
	res.status(200).render("index",{});
})
server.listen(3000);
server.on("listen",function(){
	console.log("开始监听");
})
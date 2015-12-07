var express=require("express"),http=require("http"),path=require("path");
var app=express();
var server=http.createServer(app);
//app.engine(".html",require("ejs").__renderFile);
app.set("view engine","ejs");
app.set("views","./views");
app.use(express.static('static'));
console.log(path.join(__dirname, 'static'));
app.get(/\/index(\.html)?/,function(req,res,next){
	res.status(200).render("index",{});
})
server.on("listen",function(){
	console.log("开始监听");
})
server.listen(3000);
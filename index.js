var express = require("express");
var app = express();
app.use(express.static("./public"));

app.set("view engine", "ejs");
app.set("views", "./views");


var server = require("http").Server(app);
var io = require("socket.io")(server);


server.listen(3000, function(){
    console.log("connect");
});

var mangAds = [
    new QuangCao("drthanh.jpg", "http://drthanh.com"),
    new QuangCao("vinamilk.png", "http://vinamilk.com"),
    new QuangCao("gongcha.png", "http://gongcha.com"),
    new QuangCao("thecoffeehouse.jpg", "http://thecoffeehouse.com"),
];

app.get("/admin", function(req, res){
    res.render("admin", {mangQC: mangAds});    
});

app.get("/web", function(req, res){
    res.render("web");    
});

function QuangCao(hinh, link){
    this.Hinh = hinh;
    this.Link = link;
}
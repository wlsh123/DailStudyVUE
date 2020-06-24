var express = require("express");
var app = express();
app.get("/", function (req, res) {
  //也可以使用node的命令，但不建议。
  res.send("hello express!");
});

app.get("/login", function (req, res) {
  res.send("欢迎登陆...");
});

app.get("/register", function (req, res) {
  res.send("没账号吗！那就赶紧注册吧...");
});

//公开指定目录。当以'/public'开头时，去public目录中去找。
//也可以省略第一个参数，url就不用加上该路径
app.use("/public", express.static("./public"));
app.listen(3000, function () {
  console.log("app is running at port 3000.");
});

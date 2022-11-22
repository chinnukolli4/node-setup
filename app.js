const http=require("http")

http.createServer((req,res)=>{
	res.write("i am ready")
	res.end()
}).listen(4000)

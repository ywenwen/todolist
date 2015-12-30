var http = require('http');
var fs = require('fs');



// 创建服务器
http.createServer( function (request, response) {  
   
   // 从文件系统中读取请求的文件内容
   fs.readFile('../index.html', function (err, data) {
      if (err) {
         console.log(err);
         // HTTP 状态码: 404 : NOT FOUND
         // Content Type: text/plain
         response.writeHead(404, {'Content-Type': 'text/html'});
      }else{	         
         // HTTP 状态码: 200 : OK
         // Content Type: text/plain
         response.writeHead(200, {'Content-Type': 'text/html'});	
         
         // 响应文件内容
         response.write(data.toString());		
      }
      //  发送响应数据
      response.end();
   });   
}).listen(3000);

// 控制台会输出以下信息
console.log('Server running at http://127.0.0.1:3000/');

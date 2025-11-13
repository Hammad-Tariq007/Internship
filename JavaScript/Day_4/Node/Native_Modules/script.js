const fs = require("fs");

// fs.writeFile("message.txt", "Day 4 at Meissasoft", (err) => {
//   if (err) throw err;
//   console.log("File Saved Successfully");
// });

// fs.readFile('message.txt',(err,data)=>{
//     if (err) throw err;
//     console.log(data);
// })

fs.readFile('message.txt','utf8',(err,data)=>{
    if (err) throw err;
    console.log(data);
})
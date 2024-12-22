const fs = require('fs');
const path = require('path');

const urlToYouTube = "https://www.youtube.com";

// fs.mkdir(path.join(__dirname, "files"), err => {
//     if(err) throw new Error();

//     console.log("folder created success!");
// });

 fs.writeFile(path.join(__dirname, "files", "file_1.txt"), "first commit", (err)=>{
    if(err) throw new Error();
    
    console.log("file success created!");

    fs.appendFile(path.join(__dirname, "files", "file_1.txt"), ` ${urlToYouTube}`, (err)=>{
        if(err) throw new Error();

        console.log(`appended file ${__dirname} file_1.txt`);
        fs.readFile(path.join(__dirname, "files", "file_1.txt"), "utf-8", (err, data)=>{
            if(err) throw new Error();
            console.log(Buffer.from(data).toString());
            
        });
    });
})
const fs = require("fs");

// File operation - read file
fs.readFile("../module/calc.js", "utf8", (err, data) => {
    if(!err){
        console.log(data);
    }
});

// File operation - write file
fs.writeFile("output.js", "\nconsole.log('Hello World');\n", () => {
    console.log("Data Saved");
});

// File operation - append file
fs.appendFile("output.js", "\nconsole.log('You are welcome');\n", () => {
    console.log("Data Appended");
});

// File operation - delete file
fs.unlink('./output.js', () => {
    console.log("File Deleted");
});

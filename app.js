const express = require("express");
const fs = require("fs");
const app = express();

app.get("/", function (request, response) {

 fs.readFile('/home/kavabata/proCode/Javascript/lesson-11(middleware)/lesson-11-two-routs/Data.txt', 'utf8', function(err, contents) {
    console.log(contents);
});
response.sendFile('/public/index.html', {root: __dirname});
});

app.get("/about", function (request, response) {
    let dateString = new Date().toString();
    fs.writeFile('/home/kavabata/proCode/Javascript/lesson-11(middleware)/lesson-11-two-routs/Data.txt', dateString, function (err) {
      if (err) throw err;
      console.log('Saved!');
    });
    response.send(dateString);
});

app.listen(3000);
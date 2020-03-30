const express = require('express'); // express 모듈 추가하기
const app = express();
const port = process.env.PORT || 8092;
const path = require('path');

app.use(express.static(path.join(__dirname, '/')));
// app.use(express.static('css'));
// app.use(express.static('fonts'));
// app.use(express.static('img'));

app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, function(err) {
  console.log('Connected port - ' + port);
  if (err) {
    return console.log('Found error - ', err);
  }
});
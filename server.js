const express = require('express');
const path = require('path');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'public'));
app.engine('html', require('ejs').renderFile);

app.set('view engine', 'html');

app.use('/', (req, res) => {
  res.render('index.html');
});

let messages = [];

io.on('connection', socket => {
  console.log(`Socket Connected: ${socket.id}`);

  // Send a message for socket (param)
  socket.emit('previousMessages', messages);

  // Listen messages from socker (param)
  socket.on('sendMessage', data => {
    messages.push(data);

    // Send message for all sockets connecteds
    socket.broadcast.emit('receivedMessage', data);
  });
});

server.listen(3000);

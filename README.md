#### Real time chat with Node, React, Socket io

To learn how to use websockets (Socket.io), I made the first version of this repository, with a simple application nodejs with an index.html (No React.js), the next will already have implemented react too

1. Server Config

```js
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
```

2. Listen Connections (Server)

```js
io.on('connection', socket => {
  console.log(`Socket Connected: ${socket.id}`);
});
```

3. Connect Client on Server (Client)

```js
// socket io (CDN)
var socket = io('http://localhost:3000');

// socket.io-client (npm)
import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');
```

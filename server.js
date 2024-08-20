require('dotenv').config();
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const PORT = process.env.PORT || 3000;
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('username', (username) =>{
      socket.broadcast.emit('user-joined', username);
      socket.username = username;
  })
  socket.on('chat message', (msg) => {
    socket.broadcast.emit('left-side-message', msg);
    // Send the message back to the sender
    socket.emit('right-side-message', {message:msg.message});
  });

  socket.on('disconnect', () => {
    if(socket.username){
      socket.broadcast.emit('user-disconnect', socket.username)
      console.log('user disconnected',socket.username);
    }
 
  });

});

server.listen(PORT, () => {
  console.log(`server listening on port:{PORT}`);
});


// const express = require('express');
// const http = require('http');
// const { Server } = require('socket.io');

// const app = express();
// const server = http.createServer(app);
// const io = new Server(server);

// app.use(express.static(__dirname));

// const users = {};

// io.on('connection', (socket) => {
//   console.log('a user connected');

//   socket.on('new-user-joined', name=>{
//     users[socket.id] = name;
//     socket.broadcast.emit('user-joined',name);
//   });

//   socket.on('send', message => {
//     socket.broadcast.emit('receive', {message: message, name: users[socket.id]})
//   });

//   socket.on('disconnect', () => {
//     console.log('user disconnected');
//   });

 
// });

// server.listen(3000, () => {
//   console.log('listening on *:3000');
// });

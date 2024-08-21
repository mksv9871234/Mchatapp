require('dotenv').config();
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const path = require('path')
const { Server } = require("socket.io");
const io = new Server(server);

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
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
    socket.emit('right-side-message', msg);
  });

  socket.on('disconnect', () => {
    if(socket.username){
      socket.broadcast.emit('user-disconnect', socket.username)
      console.log('user disconnected',socket.username);
    }
 
  });

});

server.listen(PORT, () => {
  console.log(`server listening on port:${PORT}`);
});

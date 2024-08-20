window.onload= function(){
    var socket = io();
// Function to get query parameters from the URL
// function getQueryParam(param) {
//     var urlParams = new URLSearchParams(window.location.search);
//     return urlParams.get(param);
// }

const username = prompt('Enter your name to Chat');
// var username = getQueryParam('username');
const leftMessage = document.querySelector('#left-message span');
const rightMessage = document.getElementById('#right-message span');

if(username){
        socket.emit('new-user-joined', username);
        
     socket.on('user-joined', name =>{
        console.log(name)
        leftMessage.textContent = `${name} has joined the chat`
     })
    //  socket.broadcast.emit('send', rightMessage.value);
    //  socket.on('recieve', data =>{
    //     rightMessage.textContent = `${data.name}:${data.message}`
    //  })
    
}

}


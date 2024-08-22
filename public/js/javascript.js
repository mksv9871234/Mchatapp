
const socket = io();
const username = prompt('enter your name')
let now = new Date();

// time
let options = {
    timeZone: 'Asia/Kolkata',
    hour12: false,
    hour: '2-digit',
    minute: '2-digit'
};
let timeInIndia = now.toLocaleTimeString('en-IN', options);
timeInIndia.className = 'subscript'

document.addEventListener('DOMContentLoaded', function () {

    let interactionOccurred = false;
    // notification
    const notificationRecive = new Audio('/notificationRecive.mp3');
    const notificationSend = new Audio('/notificationSend.wav');
    const notificationDisconnect = new Audio('/Disconnect.wav');

    const form = document.getElementById('form');
    const input = document.getElementById('input');
    const messangerBox = document.querySelector('.messangerBox')

    function playSound(audio) {
        if (interactionOccurred) {
            audio.play().catch(error => {
                console.log("Failed to play sound:", error);
            });
        }
    }

    const emoji = {
        girlhehe: '😁',
        happybirthday: '🥳',
        grouplaughing: '🤣',
        hihihi: '😄',
        IloveYou1: '❤',
        IloveYou2: '🧡',
        IloveYou3: '💛',
        IloveYou4: '💚',
        IloveYou5: '🩵',
        IloveYou6: '💙',
        IloveYou7: '🩷',
        IloveYou8: '🖤',
        IloveYou9: '🫂',
        IloveYou10: '💜',
        IloveYou11: '❤‍🩹',
        IloveYou12: '🩶',
        IloveYou13: '❤‍🔥',
        IloveYou14: '💞',
        IloveYou15: '💋',
        IloveYou16: '♥❣',
        IloveYou17: '💝',
        IloveYou18: '💖',
        gajabbejtihai: '🥹',
        hihiljioohi: '🔥',
        hihdfeaihi: '😤',
        dfedea: '😮‍💨',
        hihidgehi: '😠',
        gedfe: '🤬',
        hihdfeihi: '😡',
        hiadfhihi: '😍',
        hifehgihi: '🤔',
        snoring: '😅',
        hifdhiheedi: '😀',
        hihihidd: '😂',
        smileand: '😆',
        gogal: '😎',
        ythz: '🎉',
        crying: '😭',
        cdbnn: '🤕',
        dert: '😷',
        hicccthihi: '🤒',
        rtuii: '🤧',
        chup: '🤫',
        dfree: '🧐',
        ssddee: '😟',
        defrr: '🙄',
        xzza: '😒',
        zxx: '😏',
        rgyj: '😱',
        hiedrtgyhihi: '😰',
        derft: '😨',
        ed: '🤯',
        hihiedtrhi: '😩',
        bvfd: '😣',
        erty: '😖',
        uji: '🤥',
        tfy: '😪',
        efh: '😵‍💫',
        yju: '😵',
        esa: '🤢',
        ehr: '🥵',
        ddw: '🥶',
        hie45: '🫨',
        hh5: '🤮',
        ee5: '😕',
        dd4: '🫤',
        cc3: '🙁',
        bb2: '☹',
        aa1: '😢',
        zzz: '😳',
        yyy: '🥴',
        xxx: '🤪',
        www: '😥',
        vvv: '😓',
        uuu: '😞',
        tt: '🤨',
        sss: '😲',
        rrr: '😮',
        qq: '😦',
        ppp: '😧',
        ooo: '🙏🏻',
        tejsvi: '🫡',
        nnn: '👍🏻',
        mddem: '🤜🏻',
        eddes: '💪🏻',
        kk: '🥳',
        jj: '🤗',
        iii: '😶',
        hhh: '🤐',
        gg: '🥺',
        ff: '😔',
        ee: '😜',
        dd: '😝',
        cc: '😛',
        kitne: '😬',
        bbb:'😑',
        aaa:'😐',
        tarsti:'🥺',
        clap: '👏🏻',
        wawaaha:'👌🏻',
        yawn:'😴',
        cake: '🎂',
        spice: '🍰',
        kuch: '🤗',
        jalwa:'😎',
        boy:'🖕',
        ham: '🤘',
        thenga: '👎',
        ghusa: '👊',

       
    };
    
    const audioFiles = {
        '😁': new Audio('./EmojiSound/girl hehe.mpeg'),
        '🥳': new Audio('./EmojiSound/happy birthday.mpeg'),
        '🎂': new Audio('./EmojiSound/happy birthday.mpeg'),
        '🍰': new Audio('./EmojiSound/happy birthday.mpeg'),
        '🤣': new Audio('./EmojiSound/group laughing.mpeg'),
        '😄': new Audio('./EmojiSound/hi hi hi.mpeg'),
        '❤': new Audio('./EmojiSound/I love You.mpeg'),
        '💖': new Audio('./EmojiSound/I love You.mpeg'),
        '💝': new Audio('./EmojiSound/I love You.mpeg'),
        '♥❣': new Audio('./EmojiSound/I love You.mpeg'),
        '💋': new Audio('./EmojiSound/I love You.mpeg'),
        '💞': new Audio('./EmojiSound/I love You.mpeg'),
        '❤‍🔥': new Audio('./EmojiSound/I love You.mpeg'),
        '🩶': new Audio('./EmojiSound/I love You.mpeg'),
        '💜': new Audio('./EmojiSound/I love You.mpeg'),
        '🧡': new Audio('./EmojiSound/I love You.mpeg'),
        '❤‍🩹': new Audio('./EmojiSound/I love You.mpeg'),
        '❤‍🩹': new Audio('./EmojiSound/I love You.mpeg'),
        '❤‍🩹': new Audio('./EmojiSound/I love You.mpeg'),
        '💚': new Audio('./EmojiSound/I love You.mpeg'),
        '💙': new Audio('./EmojiSound/I love You.mpeg'),
        '🩵': new Audio('./EmojiSound/I love You.mpeg'),
        '🩷': new Audio('./EmojiSound/I love You.mpeg'),
        '🖤': new Audio('./EmojiSound/I love You.mpeg'),
        '🫂': new Audio('./EmojiSound/I love You.mpeg'),
        '😲': new Audio('./EmojiSound/gajab bejti hai.mpeg'),
        '😮': new Audio('./EmojiSound/gajab bejti hai.mpeg'),
        '😦': new Audio('./EmojiSound/gajab bejti hai.mpeg'),
        '😧': new Audio('./EmojiSound/gajab bejti hai.mpeg'),
        '😶': new Audio('./EmojiSound/gajab bejti hai.mpeg'),
        '🤐': new Audio('./EmojiSound/gajab bejti hai.mpeg'),
        '🎉': new Audio('./EmojiSound/fatake.mpeg'),
        '😭': new Audio('./EmojiSound/crying.mpeg'),
        '🤫': new Audio('./EmojiSound/chup.mpeg'),
        '😒': new Audio('./EmojiSound/chote mote program.mpeg'),
        '😟': new Audio('./EmojiSound/chote mote program.mpeg'),
        '🧐': new Audio('./EmojiSound/chote mote program.mpeg'),
        '🙄': new Audio('./EmojiSound/chote mote program.mpeg'),
        '😒': new Audio('./EmojiSound/chote mote program.mpeg'),
        '😏': new Audio('./EmojiSound/chal hat.mpeg'),
        '😵‍💫': new Audio('./EmojiSound/are baba.mpeg'),
        '😵': new Audio('./EmojiSound/are baba.mpeg'),
        '🤢': new Audio('./EmojiSound/are baba.mpeg'),
        '🥵': new Audio('./EmojiSound/are baba.mpeg'),
        '🥶': new Audio('./EmojiSound/are baba.mpeg'),
        '🫨': new Audio('./EmojiSound/are baba.mpeg'),
        '😱': new Audio('./EmojiSound/are baba.mpeg'),
        '😰': new Audio('./EmojiSound/are baba.mpeg'),
        '😨': new Audio('./EmojiSound/are baba.mpeg'),
        '🤯': new Audio('./EmojiSound/are baba.mpeg'),
        '😡': new Audio('./EmojiSound/angry.mpeg'),
        '😤': new Audio('./EmojiSound/angry h....mpeg'),
        '😮‍💨': new Audio('./EmojiSound/angry h....mpeg'),
        '😠': new Audio('./EmojiSound/angry h....mpeg'),
        '🤬': new Audio('./EmojiSound/angry h....mpeg'),
        '🔥': new Audio('./EmojiSound/aag lga di.mpeg'),
        '😎': new Audio('./EmojiSound/jalva hai hamara.mpeg'),
        '🤪': new Audio('./EmojiSound/kehna kya charho.mpeg'),
        '🤮': new Audio('./EmojiSound/kehna kya charho.mpeg'),
        '🫤': new Audio('./EmojiSound/kehna kya charho.mpeg'),
        '😢': new Audio('./EmojiSound/kehna kya charho.mpeg'),
        '😳': new Audio('./EmojiSound/kehna kya charho.mpeg'),
        '🥴': new Audio('./EmojiSound/kehna kya charho.mpeg'),
        '😥': new Audio('./EmojiSound/kehna kya charho.mpeg'),
        '😞': new Audio('./EmojiSound/kehna kya charho.mpeg'),
        '🤨': new Audio('./EmojiSound/kehna kya charho.mpeg'),
        '🫡': new Audio('./EmojiSound/kitne tejsvi log.mpeg'),
        '😬': new Audio('./EmojiSound/kitne tejsvi log.mpeg'),
        '❤': new Audio('./EmojiSound/kuch to gadbad hai.mpeg'),
        '😂': new Audio('./EmojiSound/laughing.mpeg'),
        '🙏🏻': new Audio('./EmojiSound/mafi chahta hu.mpeg'),
        '👍🏻': new Audio('./EmojiSound/not a problem.mpeg'),
        '🤜🏻': new Audio('./EmojiSound/punch.mpeg'),
        '💪🏻': new Audio('./EmojiSound/punch.mpeg'),
        '👊': new Audio('./EmojiSound/punch.mpeg'),
        '🥳': new Audio('./EmojiSound/pungi.mpeg'),
        '🤕': new Audio('./EmojiSound/shabs beta.mpeg'),
        '😷': new Audio('./EmojiSound/shabs beta.mpeg'),
        '🤒': new Audio('./EmojiSound/shabs beta.mpeg'),
        '👎': new Audio('./EmojiSound/small cry.mpeg'),
        '😅': new Audio('./EmojiSound/snoring laughing.mpeg'),
        '🥺': new Audio('./EmojiSound/tarsti hai nigahe.mpeg'),
        '🖕': new Audio('./EmojiSound/the boys.mpeg'),
        '🤘': new Audio('./EmojiSound/the boys.mpeg'),
        '👌🏻': new Audio('./EmojiSound/wawa.mpeg'),
        '👏🏻': new Audio('./EmojiSound/wawa.mpeg'),
        '😴': new Audio('./EmojiSound/yawn.mpeg'),

    };

  async  function EmojiSound(inputValue) {
        if (interactionOccurred) {
            for (let key in emoji) {
                if (emoji[key] === inputValue) {
                    const audioFile = await audioFiles[emoji[key]];
                    if (audioFile) {
                        audioFile.play().catch(error => {
                            console.log("Failed to play sound:", error);
                        });
                    }
                }
            }
        }
    }

    // Mark interactionOccurred true after any user interaction
    document.body.addEventListener('click', () => interactionOccurred = true);
    document.body.addEventListener('keypress', () => interactionOccurred = true);


    if (username) {
        socket.emit('username', username)
        const leftMessage = document.createElement('div');
        leftMessage.id = 'left-message';
        const item = document.createElement('span')
        item.textContent = `welcome to mchat :${username}`;
        let sub = document.createElement('sub');
        sub.textContent = `${timeInIndia}`
        item.appendChild(sub)
        leftMessage.appendChild(item)
        messangerBox.appendChild(leftMessage)
        messangerBox.scrollTop = messangerBox.scrollHeight;
        playSound(notificationRecive);
    }

    socket.on('user-joined', (username) => {
        const leftMessage = document.createElement('div');
        leftMessage.id = 'left-message'
        const item = document.createElement('span')
        item.textContent = `user joined: ${username}`;
        let sub = document.createElement('sub');
        sub.textContent = `${timeInIndia}`
        item.appendChild(sub)
        leftMessage.appendChild(item);
        messangerBox.appendChild(leftMessage)
        messangerBox.scrollTop = messangerBox.scrollHeight;

        playSound(notificationRecive);
    })

    socket.on('user-disconnect', (username) => {
        const leftMessage = document.createElement('div');
        leftMessage.id = 'left-message'
        const item = document.createElement('span')
        item.textContent = `user offline: ${username}`;
        let sub = document.createElement('sub');
        sub.textContent = `${timeInIndia}`
        item.appendChild(sub)
        leftMessage.appendChild(item);
        messangerBox.appendChild(leftMessage)
        messangerBox.scrollTop = messangerBox.scrollHeight;
        playSound(notificationDisconnect)
    })

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (input.value) {
            socket.emit('chat message', { message: input.value, username: username });
            input.value = '';
        }
    });

    socket.on('right-side-message', (msg) => {
        const rightMessage = document.createElement('div');
        rightMessage.id = 'right-message'
        let item = document.createElement('span')
        item.innerHTML = `You: ${msg.message}`
        let sub = document.createElement('sub');
        sub.textContent = `${timeInIndia}`
        item.appendChild(sub)
        rightMessage.appendChild(item)
        messangerBox.appendChild(rightMessage)
        messangerBox.scrollTop = messangerBox.scrollHeight;
        checkMessageForEmojis(msg.message)

        function checkMessageForEmojis(message) {
            for (let char of message) {
                if (Object.values(emoji).includes(char)) {
                    EmojiSound(char);
                }else{
                    playSound(notificationSend)
                }
            }
        }
    });

    socket.on('left-side-message', (msg) => {
        const leftMessage = document.createElement('div');
        leftMessage.id = 'left-message'
        let item = document.createElement('span');
        item.innerHTML = `${msg.username}: ${msg.message}`
        let sub = document.createElement('sub');
        sub.textContent = `${timeInIndia}`
        item.appendChild(sub)
        leftMessage.appendChild(item);
        messangerBox.appendChild(leftMessage)
        messangerBox.scrollTop = messangerBox.scrollHeight;
        checkMessageForEmojis(msg.message)

        function checkMessageForEmojis(message) {
            for (let char of message) {
                if (Object.values(emoji).includes(char)) {
                    EmojiSound(char);
                }else{
                    playSound(notificationRecive);
                }
            }
        }

    })

    // clear all chat
    const menuDots = document.getElementById('menuDots');
    const dropdownMenu = document.getElementById('dropdownMenu');

    menuDots.addEventListener('click', () => {
        dropdownMenu.classList.toggle('show');
    });
    document.addEventListener('click', (event) => {
        if (!menuDots.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.remove('show');
        }
    });
    document.getElementById('clearAll').addEventListener('click', () => {
        messangerBox.textContent = ''
        dropdownMenu.classList.remove('show');
    });

})

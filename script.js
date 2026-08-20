// ==============================
// ELEMENTS
// ==============================

const welcomePage = document.getElementById("welcomePage");
const loginPage = document.getElementById("loginPage");
const terminalPage = document.getElementById("terminalPage");
const welcomeFriend = document.getElementById("welcomeFriend");

const continueBtn = document.getElementById("continueBtn");
const loginBtn = document.getElementById("loginBtn");
const hintBtn = document.getElementById("hintBtn");

const friendSelect = document.getElementById("friend");
const passwordInput = document.getElementById("password");

const message = document.getElementById("message");
const hint = document.getElementById("hint");

const terminalText = document.getElementById("terminalText");

const friendName = document.getElementById("friendName");
const startJourney = document.getElementById("startJourney");
const shayariPage = document.getElementById("shayariPage");
const shayariText = document.getElementById("shayariText");
const decryptPage = document.getElementById("decryptPage");
const decryptText = document.getElementById("decryptText");
const certificatePage = document.getElementById("certificatePage");

const finalPage = document.getElementById("finalPage");

const finalText = document.getElementById("finalText");

const finalBtn = document.getElementById("finalBtn");
const friendshipScan = document.getElementById("friendshipScan");

const scanText = document.getElementById("scanText");
const analyzerPage = document.getElementById("analyzerPage");
const analyzerText = document.getElementById("analyzerText");

// ==============================
// FRIEND DATABASE
// ==============================

const friends = {

    huzaifa:{
        password:"2008",
        name:"Huzaifa",
        hint:"💡 Hint: Think about the year you were born."
    },

    aaqib:{
        password:"0307",
        name:"Aaqib",
        hint:"💡 Hint: DDMM format."
    },

    farhan:{
        password:"2712",
        name:"Farhan",
        hint:"💡 Hint: DDMM Format"
    },
    demo:{
        password:"1234",
        name:"Demo User",
        hint:"💡 Hint: Check the description or README"
    }


};

const shayari = [

`Tofa Kiya De<br>
Tofa To Hume Mila Hai <br>
Khuda Ne Aap Jaisa Dost Diya Hai<br>
Woh Tofa Hi Kiya Jiska Mol Ho<br>
Tofa To Wo Hai Jo Sab Se Anmol Ho`,

`Khubsurat Sa Ek Pal Kissa Ban Jaata Hai<br> 
Jaane Kab Kaun Zindagi Ka Hissa Ban Jata Hai<br>
Kuch Log Zindagi Mai Milte Hai Aise<br>
Jinse Kabhi Na Tutne Wala Rishta Ban Jata Hai`,

`Khubsurat Hai Zindagi Kaanch Ki Tarah<br>
Jaane Kab Tut Jaaye Kaanch Ki Tarah<br>
Mujhe Na Bhulana Kisi Baat Ki Tarah<br>
Apne Hi Dil Mai Rakhna Yaad Ki Tarah`

];

// ==============================
// VARIABLES
// ==============================

let attempts = 0;

// ==============================
// CONTINUE BUTTON
// ==============================

continueBtn.onclick = function(){

    welcomePage.style.display="none";
    loginPage.style.display="flex";

}

// ==============================
// LOGIN
// ==============================

loginBtn.onclick = function(){

    const selectedFriend = friendSelect.value;
    const enteredPassword = passwordInput.value;

    if(selectedFriend===""){

        message.innerHTML="⚠ Please select your name.";

        return;

    }

    if(
        friends[selectedFriend] &&
        enteredPassword===friends[selectedFriend].password
    ){

        loginSuccess(selectedFriend);

    }

    else{

        attempts++;

        if(attempts===1){

            message.innerHTML="❌ Access Denied<br>2 Attempts Remaining";

        }

        else if(attempts===2){

            message.innerHTML="❌ Access Denied<br>Need Some Help?";

            hintBtn.style.display="inline-block";

            hint.innerHTML=friends[selectedFriend]?.hint ||
            "Choose your name first.";

        }

        else{

            message.innerHTML="🚫 Too Many Failed Attempts";

            loginBtn.disabled=true;

        }

    }

}

// ==============================
// SHOW HINT
// ==============================

hintBtn.onclick=function(){

    hint.style.display="block";

}

// ==============================
// LOGIN SUCCESS
// ==============================

function loginSuccess(friend){

    loginPage.style.display="none";

    terminalPage.style.display="flex";

    runTerminal(friend);

}

// ==============================
// TERMINAL ANIMATION
// ==============================

function runTerminal(friend){

    const lines=[

        "Establishing Secure Connection...",
        "Checking Identity...",
        "Identity Verified ✔",
        "Decrypting Memories...",
        "Loading Secret Files...",
        "Access Granted ✔"

    ];

    terminalText.innerHTML="";

    let index=0;

    function nextLine(){

        if(index<lines.length){

            terminalText.innerHTML+=lines[index]+"\n\n";

            index++;

            setTimeout(nextLine,900);

        }

        else{

            setTimeout(function(){

                showWelcome(friend);

            },1200);

        }

    }

    nextLine();

}

// ==============================
// PERSONAL WELCOME
// ==============================

function showWelcome(friend){

    terminalPage.style.display="none";

    welcomeFriend.style.display="flex";

    friendName.innerHTML=
    "Welcome ,<br>"+friends[friend].name+" ❤️";

}

// ==============================
// JOURNEY BUTTON
// ==============================

startJourney.onclick = function(){

    welcomeFriend.style.display = "none";

    decryptPage.style.display = "flex";

    decryptEmotions();

}

function decryptEmotions(){

    decryptText.innerHTML = "";

    const lines = [

        "Decrypting Emotions...",
        "",
        "████████████ 100%",
        "",
        "Opening Personal Archive..."

    ];

    let i = 0;

    function typeLine(){

        if(i < lines.length){

            decryptText.innerHTML += lines[i] + "\n";

            i++;

            setTimeout(typeLine,700);

        }

        else{

            setTimeout(function(){

                decryptPage.style.display = "none";

                shayariPage.style.display = "flex";

                showShayari();

            },1000);

        }

    }

    typeLine();

}

function showShayari() {

    let index = 0;

    function displayNext() {

        shayariText.style.opacity = 0;

        setTimeout(function () {

            shayariText.innerHTML = shayari[index];

            shayariText.style.opacity = 1;

        }, 500);


        setTimeout(function () {

            index++;

            if (index < shayari.length) {

                displayNext();

            } 
            else {

            shayariPage.style.display = "none";

            analyzerPage.style.display = "flex";

            startAnalyzer();

         }

        }, 15000);

    }

    displayNext();

}

finalBtn.onclick = function(){

    certificatePage.style.display="none";

    finalPage.style.display="flex";

    startFinalFile();

}

function startFinalFile(){

    const lines = [

        "ACCESSING FINAL FILE...",
        "",
        "████████████████ 100%",
        "",
        "MISSION REPORT",
        "",
        "Members:",
        "",
        "✔ Huzaifa",
        "✔ Aaqib",
        "✔ Farhan",
        "✔ Zaheed",
        "",
        "Mission:",
        "Friendship",
        "",
        "Status:",
        "SUCCESS",
        "",
        "Duration:",
        "Lifetime",
        "",
        "Clearance Level:",
        "BROTHERS ❤️"

    ];


    let index = 0;


    function typeLine(){

        if(index < lines.length){

            finalText.innerHTML += lines[index] + "\n";

            index++;

            setTimeout(typeLine,500);

        }

        else{

            setTimeout(showFinalMessage,15000);

        }

    }


    typeLine();

}

function showFinalMessage(){

    finalText.style.opacity = 0;


    setTimeout(function(){

        finalText.innerHTML = "";

        finalText.style.opacity = 1;


        friendshipScan.style.display = "block";

        startFriendshipScan();


    },1500);

}

function startFriendshipScan(){

    const scanLines = [

        "FINAL SCAN COMPLETE...",
        "",
        "Checking Friendship Level...",
        "",
        "Trust: ██████████ 100%",
        "",
        "Memories: ██████████ 100%",
        "",
        "Friendship:",
        "∞ INFINITE",
        "",
        "STATUS:",
        "",
        "NOT JUST FRIENDS",
        "",
        "BROTHERS ❤️"

    ];


    let i = 0;


    function showLine(){

        if(i < scanLines.length){

            scanText.innerHTML += scanLines[i] + "<br>";

            i++;

            setTimeout(showLine,600);

        }

        else{

            setTimeout(showFutureMessage,15000);

        }

    }


    showLine();

}

function showFutureMessage() {

    friendshipScan.style.display = "none";

    finalText.innerHTML = "";

    finalText.style.opacity = 1;

    finalText.innerHTML = `

⏳ TIME CAPSULE CREATED

Opening Date:
2 August 2036


Dear Huzaifa,
Dear Aaqib,
Dear Farhan,

If you're reading this,

10 years have passed.

I hope we're still together,
still laughing,
and still making memories.

Life may take us on different paths,

but I hope our friendship
never changes.

No matter where we are...

This website will always remind us
of who we were.

Thank you for every laugh,
every memory,
and every moment.

— Zaheed ❤️

`;

    setTimeout(showMissionComplete,25000);

}

function showMissionComplete() {

    finalText.innerHTML = `

━━━━━━━━━━━━━━━━━━━━━━━━━━

MISSION COMPLETE

Friendship Level

∞ INFINITE

Archive Status

PERMANENTLY STORED

❤️

Thank You
For Being Part Of My Story

Created with Friendship

By

Zaheed Khan

━━━━━━━━━━━━━━━━━━━━━━━━━━

❤️

`;

}

function startAnalyzer(){
        analyzerText.innerHTML = "";
    const lines = [

        "ACCESSING FRIENDSHIP DATABASE...",
        "",
        "████████████████ 100%",
        "",
        "Collecting Memories...",
        "",
        "████████████████ 100%",
        "",
        "Analyzing Friendship...",
        "",
        "Trust Level ............. ██████████ 100%",
        "",
        "Loyalty Level ........... ██████████ 100%",
        "",
        "Laughs Shared ........... ██████████ 100%",
        "",
        "Late Night Talks ........ ██████████ 100%",
        "",
        "Crazy Moments ........... ██████████ 100%",
        "",
        "Brotherhood ............. ██████████ 100%",
        "",
        "━━━━━━━━━━━━━━━━━━━━━━━━━━",
        "",
        "RESULT",
        "",
        "🏆 CERTIFICATE APPROVED",
        "",
        "Opening Friendship Certificate..."

    ];

    let index = 0;

    function typeLine(){

        if(index < lines.length){

            analyzerText.innerHTML += lines[index] + "\n";

            index++;

            setTimeout(typeLine,500);

        }

        else{

            setTimeout(function(){

                analyzerPage.style.display = "none";

                certificatePage.style.display = "flex";

            },2000);

        }

    }

    typeLine();

}
function showMissionComplete() {

    finalText.innerHTML = `

<div id="loveMessage">

❤️ LOVE YOU ALL, JANIS ❤️

</div>

`;

}
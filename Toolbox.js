// ==UserScript==
// @name         Toolbox
// @namespace    https://discord.gg/EEcAh8R
// @version      v1.3
// @description  try to take over the world!
// @author       FLOAT#9076
// @match        https://discord.com/*/*/*
// @grant        none
// ==/UserScript==
var start = prompt("Do you want to open toolbox?", "yes");

if (start == "yes") {

    let popupinfo
popupinfo = window.open('', '', `top=0,right=${screen.width-400},width=400,height=400{screen.height}`);
popupinfo.document.write("Toolbox will be automaticly opened in 10s.");
popupinfo.document.write("<h1>Features [Toolbox v1.2]</h1>");
popupinfo.document.write("<h4>token login | Logs into someones token.</h4>");
popupinfo.document.write("<h4>webhook automator | Meassage as a webhook!</h4>");
popupinfo.document.write("<h5>support server | Join the support server if you need help</h5>");
    setTimeout(() => {
        popupinfo.window.close();
    }, 10000);


    setTimeout(() => {
let popup
  popup = window.open('', '', `top=0,left=${screen.width-800},width=800,height=800{screen.height}`);

var choose = popup.prompt("What tool do you want to use?", "support server");

if (choose == "") {
    popup.window.close();
}

if (choose == "token login") {

var search = popup.prompt("Enter a valid token to login to.");
if (search == "") {
popup.window.close();
}
    popup.window.close();
    let popup3
    popup3 = window.open('https://discord.com/channels/@me', 'https://discord.com/channels/@me', `top=0,left=${screen.width-800},width=800,height=800{screen.height}`);
function login(token) {
setInterval(() => {
document.body.appendChild(document.createElement `iframe`).contentWindow.localStorage.token = `"${token}"`
}, 50);
setTimeout(() => {
popup3.location.reload();
}, 1000);
}
popup3.login(search);
}
        if (choose == "webhook automator") {
            popup.window.close();
            let popup4
            popup4 = window.open('https://www.aysdiscord.com/webhook-automator', 'https://www.aysdiscord.com/webhook-automator', `top=0,left=${screen.width-800},width=800,height=800{screen.height}`);
        }

        if (choose == "support server") {
            popup.window.close();
            let popup5
            popup5 = window.open('https://discord.gg/EEcAh8R', 'https://discord.gg/EEcAh8R', `top=0,left=${screen.width-800},width=800,height=800{screen.height}`);
        }
        }, 10005);
}

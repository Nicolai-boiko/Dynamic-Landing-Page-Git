// DOM
const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const name = document.getElementById('name');
const focus = document.getElementById('focus');

//Show time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

    //Time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

  setTimeout(showTime, 1000);
}

//Add Zero
function addZero(x) {
return (parseInt(x, 10) < 10 ? '0' : '') + x;
}

//Set Background
function setBackground () {
    let today = new Date(),
    hour = today.getHours();

    if (hour < 12) {
            // Morning
            document.body.style.backgroundImage = "url('https://i.ibb.co/7vDLJFb/morning.jpg')";
            greeting.textContent = 'Good Morning';
    } else if (hour > 12 && hour < 18) {
        // Afternoon
        document.body.style.backgroundImage = "url('https://i.ibb.co/3mThcXc/afternoon.jpg')";
        greeting.textContent = 'Good Afternoon';
    } else {
        //Evening
        document.body.style.backgroundImage = "url('https://i.ibb.co/924T2Wv/night.jpg')";
        greeting.textContent = 'Good Evening';
        document.body.style.color = 'white';
    }
}
// Get Name
function getName() {
    if (localStorage.getItem('name') === null) {
        name.textContent = '[Enter name here]'
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

// Set Name
function setName (e) {
    if (e.type === 'keypress') {
    //Make sure Enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
        name.blur();
    }
    } else {
        localStorage.setItem('name', e.target.innerText);
    }
    }

// Get Focus
function getFocus() {
    if (localStorage.getItem('focus') === null) {
focus.textContent = '[Enter focus here]'
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

// Set Focus
function setFocus (e) {
    if (e.type === 'keypress') {
    //Make sure Enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
        focus.blur();
    }
    } else {
        localStorage.setItem('focus', e.target.innerText);
    }
    }

    //Clear Form
/*function clearFormName () {
    if (localStorage.getItem('name') == '[Enter name here]') {
        name.textContent = ''
    }
}

function clearFormFocus () {
    if (localStorage.getItem('focus') == '[Enter focus here]') {
        focus.textContent = ''
    }
}*/

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

//Run
showTime();
setBackground();
getName();
getFocus();


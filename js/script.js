// Navbar Scrolling Animation
window.addEventListener("scroll", function () {
  let nav = document.querySelector("nav");
  let windowPosition = window.scrollY > 0;
  nav.classList.toggle("scrolling-active", windowPosition);
});

const btnHamburger = document.querySelector("#btnHamburger");
const body = document.querySelector("body");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElems = document.querySelectorAll(".has-fade");

btnHamburger.addEventListener("click", function () {
  console.log("click hamburger");

  if (header.classList.contains("open")) {
    // Close Hamburger Menu
    body.classList.remove("noscroll");
    header.classList.remove("open");
    fadeElems.forEach(function (element) {
      element.classList.remove("fade-in");
      element.classList.add("fade-out");
    });
  } else {
    // Open Hamburger Menu
    body.classList.add("noscroll");
    header.classList.add("open");
    fadeElems.forEach(function (element) {
      element.classList.remove("fade-out");
      element.classList.add("fade-in");
    });
  }
});

// FAQS Accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// Countdown Timer
var countDate = new Date("March 9, 2022 10:00:00").getTime();

function newYear() {
  var now = new Date().getTime();
  gap = countDate - now;

  var second = 1000;
  var minute = second * 60;
  var hour = minute * 60;
  var day = hour * 24;

  var d = Math.floor(gap / day);
  var h = Math.floor((gap % day) / hour);
  var m = Math.floor((gap % hour) / minute);
  var s = Math.floor((gap % minute) / second);

  document.getElementById("day").innerText = d;
  document.getElementById("hour").innerText = h;
  document.getElementById("minute").innerText = m;
  document.getElementById("second").innerText = s;
}

setInterval(function () {
  newYear();
}, 1000);

// Form Register
function validate() {
  var text;
  if (document.myForm.name.value == "") {
    text = "Name cannot be empty";
    document.getElementById("error").innerHTML = text;
    document.myForm.name.focus();
    return false;
  }
  if (document.myForm.email.value == "") {
    text = "E-mail cannot be empty";
    document.getElementById("error").innerHTML = text;
    document.myForm.email.focus();
    return false;
  }
  var emailID = document.myForm.email.value;
  atposn = emailID.indexOf("@");
  dotposn = emailID.lastIndexOf(".");
  if (atposn < 1 || dotposn - atposn < 2) {
    text = "Please enter valid email ID";
    document.getElementById("error").innerHTML = text;
    document.myForm.email.focus();
    return false;
  }
  if (
    document.myForm.phone.value == "" ||
    isNaN(document.myForm.phone.value) ||
    document.myForm.phone.value.length != 10
  ) {
    text = "Please enter a valid 10-digit phone number";
    document.getElementById("error").innerHTML = text;
    document.myForm.phone.focus();
    return false;
  }
  if (document.myForm.birthday.value == "") {
    text = "Date of Birth cannot be empty";
    document.getElementById("error").innerHTML = text;
    document.myForm.name.focus();
    return false;
  }
  if (document.myForm.skill.value == "0") {
    text = "Please provide your skill for the competition";
    document.getElementById("error").innerHTML = text;
    return false;
  }
  if (
    (document.myForm.name.value,
    document.myForm.email.value,
    document.myForm.phone.value,
    document.myForm.birthday.value,
    document.myForm.skill.value)
  ) {
    text = `You have been registered for ${
      document.getElementById("skill").value
    }!`;
    document.getElementById("result").innerHTML = text;
    return false;
  }
  return true;
}

// Gallery Animation
const observer = new IntersectionObserver(f, {
  threshold: [0, 1],
});

function f(entries) {
  for (const entry of entries) {
    if (entry.isIntersecting && entry.intersectionRatio >= 1) {
      entry.target.classList.toggle("inbound", true);
    } else {
      entry.target.classList.toggle("inbound", false);
    }
  }
}

const itemEls = Array.from(document.querySelectorAll(".item"));
for (const itemEl of itemEls) observer.observe(itemEl);

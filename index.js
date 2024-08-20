const input = document.querySelector(".name-input");
const header = document.querySelector("h1");
const pocoyoImg = document.querySelector(".pocoyo");
const nameInput = document.querySelector(".name-input");
const nameQuestion = document.querySelector(".question-text");
const partyTime = document.querySelector(".party-time");

let userName = null;

// Handle the click event for the input field
input.addEventListener("click", () => {
  console.log("Input clicked");
});

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    userName = this.value.toLowerCase();
    this.value = null;
    this.blur();

    if (userName.includes("bwabes") || userName.includes("jiahui")) {
      if (!document.querySelector(".greetings")) {
        const html = `<div class="outside-viewport">
                    <h1 class="greetings"> 
                    Ah!! Biwo ${userName}!!
                    </h1>
                    <img src="./public/hola-pocoyo.gif">
                </div>`;
        document.body.insertAdjacentHTML("beforeend", html);
        const accessGrantedMessage =
          document.querySelector(".outside-viewport");
        const spacer = document.createElement("div");
        spacer.className = "spacer";
        accessGrantedMessage.appendChild(spacer);

        // Wait for the element to be in the DOM
        requestAnimationFrame(() => {
          // Smoothly scroll the element into view
          accessGrantedMessage.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
          accessGrantedMessage.style.opacity = "1";
        });
        const newElement = `<p class="well-wishes float-up" data-delay="2s">
                    The mayor of bewwonian land and all bewwonians would just like to wish you...
                </p>`;
        spacer.innerHTML = newElement;
        const happyBirthday = `<div class="birthday outside-viewport">
                    <h1 class= "final">Happy Birthday!!! Have the most blessed birthday ever! NYAH!!! 🎉🎂🎂🎉</h1>
                    <div class="family-container">
                        <img class="kwids" src="./public/kwids/IMG_4141.jpg"/>
                        <img class="kwids" src="./public/kwids/IMG_4147.jpg"/>
                    </div>
                </div>`;
        spacer.insertAdjacentHTML("beforeend", happyBirthday);
        setTimeout(() => {
          document
            .querySelector(".birthday")
            .scrollIntoView({ behavior: "smooth" });
          document.querySelector(".birthday").style.opacity = 1;
        }, 5000);
        const partyTime = `<div class="party outside-viewport">
                    <h1 class="party-time">PARTY TWIMEEEE!!!!</h1>
                    <video class="party-video">
                        <source src="./public/party.MOV" type="video/mp4">
                    </video>
                </div>`;
        document
          .querySelector(".family-container")
          .insertAdjacentHTML("afterend", partyTime);
        setTimeout(() => {
          document
            .querySelector(".party")
            .scrollIntoView({ behavior: "smooth" });
          document.querySelector(".party").style.opacity = 1;
        }, 10000);

        const video = document.querySelector(".party-video");
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                video.play(); // Play the video when it's fully in view
              } else {
                video.pause(); // Optionally, you can pause the video if it leaves the viewport
              }
            });
          },
          { threshold: 0.5 }
        ); // Threshold of 1.0 means the video element is fully in view
        observer.observe(video);
        setInterval(() => {
          document.querySelector(".party").style.backgroundColor =
            getRandomColor();
        }, 300); // 1000 milliseconds = 1 second
      }
    } else {
      nameInput.remove();
      nameQuestion.remove();
      header.innerHTML = "HMPH!!! you're not bwabes...ACCESS DENIED!!!!";
      header.style.color = "white";
      document.querySelector("body").style.backgroundColor = "red";
      pocoyoImg.src = "./public/maxresdefault.jpg";
    }
  }
});

window.onload = function () {
  setTimeout(() => {
    changeImage();
    changeH1();
  }, 5000);
};

function changeH1() {
  header.innerHTML = "bouh? who is twis?";
}
function changeImage() {
  pocoyoImg.src = "./public/confundido-pocoyo.gif";
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

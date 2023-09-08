const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

let storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
let insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
let insertY = ["the soup kitchen", "Disneyland", "the White House"];
let insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];


function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

randomize.addEventListener('click', result);

function result() {

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);


  newStory = `It was 94 fahrenheit outside, so ${xItem} went for a walk. When they got to ${yItem}, they stared in horror for a few moments, then ${zItem}. Bob saw the whole thing, but was not surprised — ${xItem} weighs 300 pounds, and it was a hot day.`;

if(customName.value != "Thunder" && customName.value != "Test"){
  if(customName.value !== '') {
    const name = customName.value;
    newStory = `It was 94 fahrenheit outside, so ${xItem} went for a walk. When they got to ${yItem}, they stared in horror for a few moments, then ${zItem}. ${name} saw the whole thing, but was not surprised — ${xItem} weighs 300 pounds, and it was a hot day.`;
    if(document.getElementById("uk").checked) {
        const weight = Math.round(300 / 14) + " stone";
        const temperature =  Math.round((94 - 32) * 5/9) + " centigrade";
        newStory = `It was ${temperature} outside, so ${xItem} went for a walk. When they got to ${yItem}, they stared in horror for a few moments, then ${zItem}. ${name} saw the whole thing, but was not surprised — ${xItem} weighs ${weight}, and it was a hot day.`;
      }

  

}

    if(document.getElementById("uk").checked && customName.value == "") {
        const weight = Math.round(300 / 14) + " stone";
        const temperature =  Math.round((94 - 32) * 5/9) + " centigrade";
        newStory = `It was ${temperature} outside, so ${xItem} went for a walk. When they got to ${yItem}, they stared in horror for a few moments, then ${zItem}. Bob saw the whole thing, but was not surprised — ${xItem} weighs ${weight}, and it was a hot day.`;
    }


    story.textContent = newStory;
    story.style.visibility = 'visible';
        }
    else if(customName.value == "Test"){
        createLightning();
        }
    else {
            // Changes scenery and transition 
            setTheScene();

            // Plays song 
            thunderStruck();

            // Calls lightning 
            playSync()
        }
    }

function thunderStruck(){
    let audio = new Audio('Thunder.mp3');
    audio.play();
    
}

function setTheScene(){
    // Checks if firstChild is truthy 
    while(document.body.firstChild){
        // Remove everything to first set the mood 
        document.body.removeChild(document.body.firstChild); 
    }

    // Now need to replace background with appropriate background 
    let newBackground = document.createElement("div"); 

    newBackground.id = "background";
    newBackground.style.position = "fixed";
    newBackground.style.top = '0';
    newBackground.style.left = '0';
    newBackground.style.width = '100%';
    newBackground.style.height = '100%';
    newBackground.style.zIndex = '-1';

    // Placing background 

    newBackground.style.backgroundImage = "url('stormy-background.webp')";
    newBackground.style.backgroundSize = 'cover';
    newBackground.style.backgroundRepeat = 'no-repeat';
    newBackground.style.backgroundPosition = 'center center'

    // Adding background
    document.body.appendChild(newBackground);

    setTimeout(function () {
        newBackground.classList.add("fade-in");
    }, 10);

    newBackground.offsetWidth;

}

function createLightning(){
    let lightning = document.createElement("img");
    lightning.src = "Lightning-Image.png";
    lightning.className = "lightning";


    let randomX = Math.floor(Math.random() * (window.innerWidth - lightning.width) - 300);
    lightning.style.left = randomX + "px";

    document.body.appendChild(lightning);

    lightning.offsetWidth;

    lightning.style.opacity = "1";

      setTimeout(() => {
          document.body.removeChild(lightning);
        }, 300);

    playThunder();
}

function playThunder(){
    let thunderSound = new Audio("Thunder-Sound.mp3")
    thunderSound.play();
}

// Attempts to call create Lightning at optimal times for song 
function playSync(){

    // First call 
    setTimeout(function() {
        createLightning()
    }, 30000);

    setTimeout(function() {
        createLightning()
    }, 34000);

    setTimeout(function() {
        createLightning()
    }, 37500);

    setTimeout(function() {
        createLightning()
    }, 41000);

    setTimeout(function() {
        createLightning()
    }, 44500);

    setTimeout(function() {
        createLightning()
    }, 48000);

    setTimeout(function() {
        createLightning()
    }, 52000);

    setTimeout(function() {
        createLightning()
    }, 55600);

    setTimeout(function() {
        createLightning()
    }, 58000);

}


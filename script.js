/* script.js */

document.addEventListener('DOMContentLoaded', () => {
    const rose = document.querySelector('.rose');
    const loveLetterContent = document.getElementById('loveLetterContent');
    const container = document.querySelector('.container');
    const roseContainer = document.querySelector('.rose-container'); // Get the rose container
    const loveNotes = [
        "Never knew I could be in love until you",
        "I can't wait to do the rest of my life with you.",
        "Your smile lightens up my heart and day.",
        "I miss you often, but I believe this too is just a phase",
        "You're the best thing that's ever happened to me.",
        "I can't wait to hug you again, breathe you in",
        "I can't wait to kiss those pretty pink lips again",
        "Talking to you is the highlight of most of my days",
        "I wish I could dream of you more, so that LDR is less annoying",
        "You are everything I ever prayed for",
        "Thank you for being the best boyfriend ever",
        "You've made my life so much more fun to live",
        "You are my safe and happy space",
        "I love you so much sometimes my heart feels like exploding",
        "Ich liebe dich",
        "Can't wait until you're my future hubby bubby"
    ];

    let petalsFallen = 0;
    const totalPetals = 16;

    function checkAllPetalsFallen() {
        petalsFallen++;
        if (petalsFallen === totalPetals - 1) {
            // Create and display the image
            const img = document.createElement('img');
            img.src = 'postpetaldisplay.png';
            img.id = 'postPetalImage';

            // Apply CSS styles directly to the image element
            img.style.maxWidth = '600px';
            img.style.height = 'auto';
            img.style.position = 'absolute'; // Add this
            img.style.top = '10%'; // Adjust as needed
            img.style.left = '60%'; // Adjust as needed
            img.style.transform = 'translateX(-70%) translateY(-50%);';  //Center horizontally
            img.style.zIndex = '10'; //Ensure it's on top
    
            // Append the image to the rose container
            roseContainer.appendChild(img);

            alert("Happy Rose Day, mein Liebling🌹🌹🌹");
            startRoseRain();
        }
    }
    

    function startRoseRain() {
        setInterval(() => {
            const fallingRose = document.createElement('div');
            fallingRose.classList.add('falling-rose');
            fallingRose.textContent = '🌹';

            fallingRose.style.left = Math.random() * 100 + 'vw';
            fallingRose.style.animationDuration = Math.random() * 2 + 3 + 's';

            container.appendChild(fallingRose);

            fallingRose.addEventListener('animationend', () => {
                fallingRose.remove();
            });
        }, 200);
    }

    for (let i = 1; i <= 16; i++) {
        const petal = document.createElement('div');
        petal.classList.add('petal');
        petal.dataset.index = i - 1;
        petal.textContent = "";

        petal.addEventListener('click', function() {
            const index = this.dataset.index;
            const note = loveNotes[index];

            this.textContent = note;
            this.classList.add('flipped');

            loveLetterContent.innerHTML += `<br> ${note}`;

            const randomLeft = Math.random() * 100;
            this.style.setProperty('--random-left', `${randomLeft}%`);

            setTimeout(() => {
                this.classList.add('falling');
                setTimeout(() => {
                    this.remove();
                    checkAllPetalsFallen();
                }, 2000);
            }, 500);
        });

        rose.appendChild(petal);
    }
});

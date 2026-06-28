const memories = [
      {
        text: "You make my every day special",
        img: "./BD IMG/Love.png" 
      },
      {
        text: "You make my life better",
        img: "./BD IMG/flying Kiss.png" 
      },
      {
        text: "You are so Hot And Beautiful",
        img: "./BD IMG/Watching.png" 
      },
      {
        text: "You look cute even when you're angry",
        img: "./BD IMG/Angry.png" 
      },
      {
        text: "I smile the most whenever I'm with you",
        img: "./BD IMG/Laugh together.png" 
      },
      {
        text: "You are my Bou",
        img: "./BD IMG/KissChick.png" 
      },
      {
        text: "I will always be there for you",
        img: "./BD IMG/Hug.png" 
      },
      {
        text: "I want to spend my life growing old with you",
        img: "./BD IMG/Forehead.png" 
      },
      {
        text: "So, what makes today so special?",
        img: "./BD IMG/Watch.png" 
      }
    ];

    const specialFinale = {
      text: "Today is your day. And you are so special. I am so lucky to have you in my life. I love you ❤️, Happy Birthday 🎂 My Puchku Sona 💖",
      img: "./BD IMG/Cake.png"
    };
      const bgMusic = document.getElementById('bg-music');
      bgMusic.volume = 0.20;

    const btn = document.getElementById('generate-btn');
    const titleDisplay = document.getElementById('main-title')
    const textDisplay = document.getElementById('message-display');
    const imgDisplay = document.getElementById('image-display');
    const mainTitle = document.getElementById('main-title');

    let currentIndex = 0;

    btn.addEventListener('click', () => {
      if (bgMusic.paused) {
            bgMusic.play();
        }
      
      if (currentIndex < memories.length) {
        const currentMemory = memories[currentIndex];
        
        titleDisplay.textContent =`The Reason ${currentIndex+1}`
        textDisplay.textContent = `${currentMemory.text}`;
        imgDisplay.src = currentMemory.img;

        if (currentIndex === memories.length - 1) {
            titleDisplay.textContent =`2nd July`
            btn.textContent = "What?"; 
        } else {
          btn.textContent = "Next";
        }

        currentIndex++;
        
      } 
      else {
        mainTitle.style.display = 'none';
        btn.style.display = 'none';

        imgDisplay.src = specialFinale.img;
        imgDisplay.style.display = 'block';

        textDisplay.textContent = specialFinale.text;
        textDisplay.classList.add('special-ending');
      }
    });

const muteBtn = document.getElementById('mute-btn');

muteBtn.addEventListener('click', () => {
  if (bgMusic.muted) {
    bgMusic.muted = false;
    muteBtn.textContent = '🔊'; 
  } else {
    bgMusic.muted = true;
    muteBtn.textContent = '🔇'; 
  }
});

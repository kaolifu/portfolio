'use strict'
{
  //sun-moon change

  const sunMoonBtn = document.getElementById('sun-moon-btn');
  const sun = document.getElementById('sun');
  const moon = document.getElementById('moon');
  const bat = document.getElementById('bat');
  const groundIconsSun = document.getElementById('ground-icons-sun');
  const groundIconsMoon = document.getElementById('ground-icons-moon');

  const sunMode = document.querySelectorAll('.sun-mode')
  const moonMode = document.querySelectorAll('.moon-mode')
  const hero = document.getElementById('hero');
  const header = document.querySelector('header');
  const spMenuBar=document.querySelectorAll('.sp-menu-bar');

  let isSunOn = true;

  function modeUpdate() {
    if (isSunOn) {
      sunMode.forEach(element => {
        element.style.display = 'block';
      });
      moonMode.forEach(element => {
        element.style.display = 'none';
      });
    } else {
      sunMode.forEach(element => {
        element.style.display = 'none';
      });
      moonMode.forEach(element => {
        element.style.display = 'block';
      });
    }
  }

  modeUpdate();

  sunMoonBtn.addEventListener('click', () => {
    if (isSunOn) {
      isSunOn = !isSunOn;
      sun.classList.add('animetion-change');
      moon.classList.add('animetion-change');
      cloud.classList.add('animetion-move-out');
      cloud.style.opacity=0;
      bat.classList.add('animetion-move-in');
      bat.style.opacity = 1;
      groundIconsSun.classList.add('animetion-rotate3d');
      groundIconsMoon.classList.add('animetion-rotate3d');
      modeUpdate();
      hero.style.background = '#333';
      header.style.background = '#333';
      header.style.color = '#fff';
      spMenuBar.forEach(bar=>{
        bar.style.background='#fff'
      });
      roulette.style.background='#FBB428';
    } else {
      isSunOn = !isSunOn;
      sun.classList.remove('animetion-change');
      moon.classList.remove('animetion-change');
      cloud.classList.remove('animetion-move-out');
      cloud.style.opacity=1;
      bat.classList.remove('animetion-move-in');
      groundIconsSun.classList.remove('animetion-rotate3d');
      groundIconsMoon.classList.remove('animetion-rotate3d');
      bat.style.opacity = 0;

      modeUpdate();
      hero.style.background = '#FBB428';
      header.style.background = '#FBB428';
      header.style.color = '#000';
      spMenuBar.forEach(bar=>{
        bar.style.background='#000'
      });
      roulette.style.background='#fff';
    }
  });

  //rain animetion
  const cloud = document.getElementById('cloud');
  const rain = document.getElementById('rain');
  cloud.addEventListener('mouseover', () => {
    rain.style.opacity = 1;
    rain.style.transform = ' translateY(0)';
    rain.style.transition = '.5s';
  });
  cloud.addEventListener('mouseleave', () => {
    rain.style.opacity = 0;
    rain.style.transform = ' translateY(-50%)';
    rain.style.transition = '0s';
  });


  //light animetion
  const character = document.getElementById('character');
  const light = document.getElementById('light');
  character.addEventListener('mouseover', () => {
    light.classList.add('animetion-light');
  });
  character.addEventListener('mouseleave', () => {
    light.classList.remove('animetion-light');
  });


  //en-jp change
  const en = document.querySelectorAll('.en');
  const jp = document.querySelectorAll('.jp');
  const enjp = document.querySelectorAll('.enjp');
  const enBtn=document.querySelectorAll('.en-btn');
  const jpBtn=document.querySelectorAll('.jp-btn');
  let isEnOn = true;

  function checkLanguage() {
    if (isEnOn) {
      en.forEach(en => {
        en.style.display = 'block';
      });
      jp.forEach(jp => {
        jp.style.display = 'none';
      });
      enBtn.forEach(enBtn => {
        enBtn.style.color='#4E57B6';
      });
      jpBtn.forEach(jpBtn => {
        jpBtn.style.color='inherit';
      });
    } else {
      en.forEach(en => {
        en.style.display = 'none';
      });
      jp.forEach(jp => {
        jp.style.display = 'block';
      });
      enBtn.forEach(enBtn => {
        enBtn.style.color='inherit';
      });
      jpBtn.forEach(jpBtn => {
        jpBtn.style.color='#4E57B6';
      });
    }
  }

  checkLanguage();

  enjp.forEach(enjp=>{
    enjp.addEventListener('click', () => {
      isEnOn = !isEnOn;
      checkLanguage();
    });
  })


  //book
  const prev = document.getElementById('prev');
  const next = document.getElementById('next');
  const book = document.getElementById('book');
  const pageLeft = document.querySelectorAll('.page-left');
  const pageRight = document.querySelectorAll('.page-right');
  let currentPage = 0;

  next.addEventListener('click', () => {
    console.log(currentPage);
    if (currentPage < pageRight.length - 1) {
      book.style.zIndex = 1;
      pageRight[currentPage].classList.add('animation-turn-page');
      pageRight[currentPage + 1].classList.remove('page-hidden');

      setTimeout(() => {
        pageRight[currentPage].querySelectorAll('*').forEach(child => {
          child.style.opacity = 0;
        });
      }, 450);

      setTimeout(() => {
        book.style.zIndex = 0;
        pageRight[currentPage].classList.add('page-hidden');
        pageLeft[currentPage].classList.add('page-hidden');
        pageLeft[currentPage + 1].classList.remove('page-hidden');
        currentPage++;
      }, 1000);
    }
  });
  prev.addEventListener('click', () => {
    if (currentPage > 0) {
      book.style.zIndex = 1;
      pageRight[currentPage - 1].classList.remove('page-hidden');
      pageRight[currentPage - 1].classList.add('animation-turn-page-reverse');
      pageLeft[currentPage - 1].classList.remove('page-hidden');
      pageLeft[currentPage].classList.add('page-hidden');

      setTimeout(() => {
        pageRight[currentPage - 1].querySelectorAll('*').forEach(child => {
          child.style.opacity = 1;
        });
      }, 800);

      setTimeout(() => {
        book.style.zIndex = 0;
        pageRight[currentPage - 1].classList.remove('animation-turn-page');
        pageRight[currentPage - 1].classList.remove('animation-turn-page-reverse');
        pageRight[currentPage].classList.add('page-hidden');
        currentPage--;
      }, 1000);
    }
  });

  //book image
  const pageImg = document.querySelectorAll('.page-img');
  pageImg.forEach((img, index) => {
    img.addEventListener('click', () => {
      console.log(index)
      const mask = document.createElement('div');
      mask.classList.add('mask');
      const imgPanel = document.createElement('div');
      imgPanel.classList.add('img-panel');
      const imgLg = document.createElement('img');
      imgLg.src = `./img/site${index}.png`;

      imgPanel.appendChild(imgLg);

      const body = document.querySelector('body');
      body.appendChild(mask);
      body.appendChild(imgPanel);
      body.style.overflow = 'hidden';

      mask.addEventListener('click', () => {
        mask.remove();
        imgPanel.remove();
        body.style.overflow = 'visible';

      });
    });
  });


  //ball
  const balls = document.querySelectorAll('.balls');
  let isBallOpen = [false, false, false];
  const colors = ['green', 'red', 'pink', 'skyblue', 'orange'];

  balls.forEach((ball, index) => {
    ball.addEventListener('click', () => {
      if (isBallOpen[index] === false) {
        ball.classList.add('animetion-ball-open');
        createPapers(ball);
        skillListAppear(ball);
        ball.querySelector('.shake-ball').classList.remove('animetion-shake-automatic');
      } else {
        setTimeout(() => {
          ball.classList.remove('animetion-ball-open');
          ball.querySelector('.shake-ball').classList.add('animetion-shake-automatic');
        }, 1000);
        skillListDisappear(ball);
      }
      isBallOpen[index] = !isBallOpen[index];
    });

  })


  function random(num) {
    return Math.floor(Math.random() * num);
  }

  function createPapers(ball) {
    for (let i = 0; i < 50; i++) {
      const paper = document.createElement('div');
      ball.appendChild(paper);

      paper.classList.add('paper');
      const paperSetoffTop = `${random(100)}`;
      paper.style.top = `${paperSetoffTop}%`;
      paper.style.left = `${random(100)}%`;
      paper.style.background = `${colors[random(4)]}`;

      setTimeout(() => {
        paper.style.transform = `translateY(calc(630px - ${paperSetoffTop} /100 * 268px)) rotate3d(${random(2)},${random(2)},${random(2)},${random(1080)}deg)`

      }, 10);

      setTimeout(() => {
        paper.style.opacity = 0;
      }, 300);

      setTimeout(() => {
        ball.removeChild(paper);
      }, 1500);
    }
  }

  function skillListAppear(ball) {
    const skillList = ball.querySelector('.skill-list');
    let percent = 1;
    appear();

    function appear() {
      percent++;
      const timeoutId=setTimeout(() => {
        appear();
        skillList.style.opacity = 1;
        skillList.style.pointerEvents = 'auto';
        
        skillList.style.webkitMaskImage = `linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) ${percent}%,rgba(0, 0, 0, 0) ${percent + 5}%,rgba(0, 0, 0, 0) 100%)`;
        skillList.style.maskImage = `linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) ${percent}%,rgba(0, 0, 0, 0) ${percent + 5}%,rgba(0, 0, 0, 0) 100%)`;
      }, 10);
      if(percent>100){
        clearTimeout(timeoutId);
      }
    }
  }
  function skillListDisappear(ball) {
    const skillList = ball.querySelector('.skill-list');
    let percent = 100;
    disappear();

    function disappear() {
      percent--;
      const timeoutId=setTimeout(() => {
        disappear();
        skillList.style.opacity = 1;
        skillList.style.pointerEvents = 'none';

        skillList.style.webkitMaskImage = `linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) ${percent}%,rgba(0, 0, 0, 0) ${percent + 5}%,rgba(0, 0, 0, 0) 100%)`;
        skillList.style.maskImage = `linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) ${percent}%,rgba(0, 0, 0, 0) ${percent + 5}%,rgba(0, 0, 0, 0) 100%)`;
      }, 10);
      if(percent<-10){
        clearTimeout(timeoutId);
      }
    }
  }

  //to-top
  const toTop=document.getElementById('to-top');
  let scrollY=0;
  window.addEventListener('scroll',()=>{
    scrollY=window.scrollY
    if(scrollY>200){
      toTop.classList.add('appear');
    }else{
      toTop.classList.remove('appear');
    }
  });

  //sp-menu
  const spMenu=document.getElementById('sp-menu');
  const roulette=document.getElementById('roulette');
  let isSpMenuOpen=false;
  spMenu.addEventListener('click',()=>{
    if(!isSpMenuOpen){
      isSpMenuOpen=!isSpMenuOpen;
      spMenu.classList.add('menu-open');
      roulette.classList.add('rouleette-rotate');
    }else{
      isSpMenuOpen=!isSpMenuOpen;
      spMenu.classList.remove('menu-open');
      roulette.classList.remove('rouleette-rotate');
    }
  });

}


console.log();
console.log('--------------------');

const input = document.getElementById('userText');
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById('check').click();
  }
  if (event.keyCode === 16) {
   event.preventDefault();
   document.getElementById('new').click();
  }
});

document.addEventListener("keyup", function(event) {
  if (event.keyCode === 38) {
   event.preventDefault();
   document.getElementById('new').click();
  }
});

let allWords = []
let getWord = [];
let word = "";
let word2 = "";
let translation = "";
let translation2 = "";
let translation3 = "";
let image = "";
let points = 0;

function getNew() {
  allWords = allWords.concat(words1, words2, words3, words4, words5);
  console.log(allWords);
  getWord = allWords[Math.floor(Math.random()*allWords.length)];
  word = getWord.word;
  word2 = getWord.word2;
  translation = getWord.translation;
  translation2 = getWord.translation2;
  translation3 = getWord.translation3;
  image = getWord.image;

  const baseWord = document.getElementById('baseWord');
  const picture = document.getElementById('picture');
  
  document.getElementById('userText').value = '';
  document.getElementById('answer').innerHTML = '';

    input.innerHTML = 'test';

    if (image != '') {
    picture.innerHTML = `<img class="numbers" src="${image}" alt="dwa">`;
    }
    else {
      picture.innerHTML = '';
    }

    if(word2 != undefined) {
      baseWord.innerHTML = `${word} / ${word2}`;
    }
    else if(word2 == undefined) {
      baseWord.innerHTML = word;
    }
}

requirejs(['../../words/2_Macmillan/chapter2/1_', '../../words/2_Macmillan/chapter2/2_', '../../words/2_Macmillan/chapter2/3_', '../../words/2_Macmillan/chapter2/4_', '../../words/2_Macmillan/chapter2/5_'], function(util) {
  (function() {
    getNew();
  })()
  
});

function getAnswer(){
  console.log(allWords);
  const userText = document.getElementById('userText').value;
  const answer = document.getElementById('answer');
  const img = document.getElementById('fireworks');
  const pointCounter = document.getElementById('pointCounter');
  
  let similarText = userText.toLowerCase().trim().replace('ą','a').replace('ć','c').replace('ę','e').replace('ł','l').replace('ń','n').replace('ó','o').replace('ś','s').replace('ź','z').replace('ż','z');
  
  let similarTranslation = translation.replace('ą','a').replace('ć','c').replace('ę','e').replace('ł','l').replace('ń','n').replace('ó','o').replace('ś','s').replace('ź','z').replace('ż','z');
  let similarTranslation2 = '';
  let similarTranslation3 = '';


  if(translation3 != undefined){
    similarTranslation3 = translation3.replace('ą','a').replace('ć','c').replace('ę','e').replace('ł','l').replace('ń','n').replace('ó','o').replace('ś','s').replace('ź','z').replace('ż','z');
    if(translation.includes('(') == true) {
      similarTranslation = similarTranslation.slice(0, translation.indexOf('(') - 1);
    }
    if(translation2.includes('(') == true) {
      similarTranslation2 = similarTranslation2.slice(0, translation2.indexOf('(') - 1);
    }
    if(translation3.includes('(') == true) {
      similarTranslation3 = similarTranslation3.slice(0, translation3.indexOf('(') - 1);
    }
  }


  if(translation2 != undefined) {
    similarTranslation2 = translation2.replace('ą','a').replace('ć','c').replace('ę','e').replace('ł','l').replace('ń','n').replace('ó','o').replace('ś','s').replace('ź','z').replace('ż','z');
    if(translation.includes('(') == true) {
      similarTranslation = similarTranslation.slice(0, translation.indexOf('(') - 1);
    }
    if(translation2.includes('(') == true) {
      similarTranslation2 = similarTranslation2.slice(0, translation2.indexOf('(') - 1);
    }
  }


  if(translation != undefined) {
    if(translation.includes('(') == true) {
      similarTranslation = similarTranslation.slice(0, translation.indexOf('(') - 1)
    }
  }

if(translation3 != undefined) {
  if(similarText == similarTranslation || similarText == similarTranslation2 || similarText == similarTranslation3) {
    answer.style.color = 'green';
    img.style.display = 'block';
    img.style.animation = 'boom 0.7s ease-out';
    setTimeout(function(){img.style.display = 'none';}, 700);
    answer.innerHTML = `Brawo! Udzieliłeś poprawnej odpowiedzi i dostajesz punkt! 😁`;
    points = points + 1;

  }
  else {
      answer.innerHTML = `Pomyliłeś się 😶. Prawidłowe odpowiedzi to: <strong>${translation}</strong>, <strong>${translation2}</strong> lub <strong>${translation3}</strong>`;
      answer.style.color = 'firebrick';
  }
}

else if(translation2 != undefined) {
  if(similarText == similarTranslation || similarText == similarTranslation2) {
    answer.style.color = 'green';
    img.style.display = 'block';
    img.style.animation = 'boom 0.7s ease-out';
    setTimeout(function(){img.style.display = 'none';}, 700);
    answer.innerHTML = `Brawo! Udzieliłeś poprawnej odpowiedzi i dostajesz punkt! 😁`;
    points = points + 1;
  }
  else {
      answer.innerHTML = `Pomyliłeś się 😶. Prawidłowa odpowiedź to: <strong>${translation}</strong> lub <strong>${translation2}</strong>`;
      answer.style.color = 'firebrick';
  }
}

else {
  if(similarText == similarTranslation) {
    answer.style.color = 'green';
    img.style.display = 'block';
    img.style.animation = 'boom 0.7s ease-out';
    setTimeout(function(){img.style.display = 'none';}, 700);
    answer.innerHTML = `Brawo! Udzieliłeś poprawnej odpowiedzi i dostajesz punkt! 😁`;
    points = points + 1;
  }
  else {
      answer.innerHTML = `Pomyliłeś się 😶. Prawidłowa odpowiedź to: <strong>${translation}</strong>`;
      answer.style.color = 'firebrick';
  }
}

  pointCounter.innerHTML = `Punkty: <strong>${points}</strong>`;

}

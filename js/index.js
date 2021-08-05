// Cards flip
const cards  = document.querySelectorAll('.cards');
if (cards) {
  for (let i = 0; i < cards.length; i += 1) {
    const card = cards[i];
    card.addEventListener('click', () => {
      card.classList.toggle("isflipped");
    });
  }
}
//sta cards
const shufBtn = document.getElementById("shufBtn");
shufBtn.addEventListener('click', () => {
    stack_cards(2);
});
function stack_cards(margin){
  cards.forEach((eachCard, idx) => {
    setTimeout(function(){
      var left = 0;
    	var step = margin;
    	var i = 0;
      eachCard.style.zIndex=i;
      eachCard.style.marginLeft=`${left}px`;
      eachCard.style.marginTop=`0px`;
      left = left + step;
      i++;
    }
    ,idx*150);
  });
}
//seperate animation
const separate = document.getElementById("separate");
let card_container_width = $('#cardContainer').width();
let card_spacing = 40;
const cardsLength = 7;
let randCards=[];


separate.addEventListener('click', ()=>{
  separate_one_by_one();
})
function separate_one_by_one(){
  var left = 0;
  var card_width = $('.cards').width();
  var card_height = $('.cards').height();
  //initial top margin for card placement
  var top = 0;
  //initial left margin for card placement
  var left_step =  card_width + card_spacing;

	//time lag between each card placement
	var sec_step = 150;
	var time = 0;
	//loop through all cards
  shuffle(randCards);
  for (let i = 0; i < cardsLength; i++) {
    setTimeout(()=>{
      let randCard =randCards[i];
      randCard.style.marginTop=`${top}px`;
      randCard.style.marginLeft=`${left}px`;

      left = left + left_step;
      if(left+card_width + card_spacing > card_container_width){
				left = 0;
				top += card_height + card_spacing;
			};
    },time)
    time += sec_step;
  }
}
/*
function separate_one_by_one(){
  var left = 0;
  var card_width = $('.cards').width();
  var card_height = $('.cards').height();
  //initial top margin for card placement
  var top = card_height;
  //initial left margin for card placement
  var left_step =  card_width + card_spacing;

	//time lag between each card placement
	var sec_step = 150;
	var time = 0;
	//loop through all cards

	$('.cards').each(function(){
		var card = $(this);
		setTimeout(function(){
			card.css({
				'margin-top':top+'px',
				'margin-left':left+'px',
			});
			left = left + left_step;
			//if card cannot fit in current row then place it card in next row
			if(left+card_width + card_spacing > card_container_width)
			{
				left = 0;
				top += card_height + card_spacing;
			}
		},time);
		//add time lag for next card placement
		time += sec_step;
	});
}
*/

function fisherYatesShuffle(arr){
    for(var i =arr.length-1 ; i>0 ;i--){
        var j = Math.floor( Math.random() * (i + 1) ); //random index
        [arr[i],arr[j]]=[arr[j],arr[i]]; // swap
    }
}

function shuffle(){
  for (var i = 0; i < cards.length; i++) {
    randCards.push(cards[i]);
  }
  fisherYatesShuffle(randCards);
}


//shuffleBack funct
/*
let cardTop=cards.forEach(everycard=>{
  everycard.getBoundingClientRect().top;
});
console.log(cardTop);
let cardLeft=eachCard.getBoundingClientRect().left;
let positions={cardTop,cardLeft};
console.log(positions);
function shufBack(){
  const rand1 = Math.floor(Math.random*idx);
  const rand2 = Math.floor(Math.random*idx);
  const temp=positions[rand1];
  positions[rand1]=positions[rand2];
  positions[rand2]=temp;
}
*/

//卡片解析
const swordsCard = document.getElementById("swordsCard");
swordsCard.addEventListener('click',()=>{
  document.getElementById('whatYouPick').innerHTML='寶劍五正位';
  document.getElementById('explain').innerHTML='兩人間存在著溝通不良，你們可能發生了爭執或誤會，導致分離。建議放下自尊心好好溝通，才不會兩敗俱傷';
})

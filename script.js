//alert('Привет Коля');


const anchors = document.querySelectorAll('a.scroll-to')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href')
    
    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
};

const MENU = document.getElementById('menu');


MENU.addEventListener('click',(event)=>{
	MENU.querySelectorAll('a').forEach(el => el.classList.remove('colored'));
	event.target.classList.add('colored');
});
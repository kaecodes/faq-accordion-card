const accordionItem = document.getElementsByClassName('qa-pair'); 
const arrow = document.getElementsByClassName('arrow'); 

console.log(arrow); 

for (let i = 0; i < accordionItem.length; i++) {
  accordionItem[i].addEventListener('click', function() {
    const openItem = document.querySelector('.qa-pair.active'); 
    const rotateArrow = document.querySelector('img.rotate')
    this.classList.toggle('active'); 
    this.querySelector('img').classList.toggle('rotate'); 
    if (openItem) {
      openItem.classList.remove('active');
      rotateArrow.classList.remove('rotate'); 
    }
  })
}

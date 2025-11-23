document.querySelectorAll('.card').forEach(card=>{
  card.addEventListener('click',()=>{
    window.open(card.dataset.link,'_blank');
  });

  card.addEventListener('mousemove', e=>{
    let rect=card.getBoundingClientRect();
    let x=e.clientX-rect.left;
    let y=e.clientY-rect.top;

    let rotY=(x/rect.width - 0.5)*30;
    let rotX=-(y/rect.height - 0.5)*30;

    card.style.transform=`rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.08)`;
  });

  card.addEventListener('mouseleave',()=>{
    card.style.transform="rotateX(0deg) rotateY(0deg)";
  });
});

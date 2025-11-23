document.querySelectorAll(".card").forEach(card=>{
  card.addEventListener("mousemove", e=>{
    let rect = card.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    let rotateY = ((x / rect.width) - 0.5) * 30;
    let rotateX = ((y / rect.height) - 0.5) * -30;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });
  card.addEventListener("mouseleave", ()=>{
    card.style.transform = "rotateX(0deg) rotateY(0deg)";
  });
});
const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('Nunca dude de ti, sabia que ibas a decir que si, te quiero guapa <3 me regalas una captura de esto, es que solo asi sabre que marcaste el SI jaja desde ahora te hare escuchar todas mis canciones mas seguidooo :p ya que te vuelva a ver te como a besooossss')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})

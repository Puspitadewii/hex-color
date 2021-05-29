const button = document.querySelector('.container button');
button.addEventListener('click', function(){
    //const body = document.getElementsByTagName('body')[0];
    document.body.classList.toggle("biru-muda");
})


// acak warna
const tAcakWarna = document.createElement('button');
const textTacak = document.createTextNode('Acak warna');
tAcakWarna.appendChild(textTacak);
tAcakWarna.setAttribute('type','button');
button.after(tAcakWarna);

tAcakWarna.addEventListener('click',function(){
    const r = Math.round(Math.random() * 225 + 1);
    const g = Math.round(Math.random() * 225 + 1);
    const b = Math.round(Math.random() * 225 + 1);
  document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

// range color
const sMerah = document.querySelector('input[name =sMerah]');
const sHijau = document.querySelector('input[name = sHijau]');
const sBiru = document.querySelector('input[name = sBiru]');
sMerah.addEventListener('input', function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
    console.log(r);
});

sHijau.addEventListener('input', function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
});

sBiru.addEventListener('input', function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
});

document.body.addEventListener('mousemove', function(event){
    // posisi mouse
    // console.log(event.clientX);
    // ukuran browser
    // console.log(window.innerWidth);

    const xPos = Math.round((event.clientX/window.innerWidth)*225);
    const yPos = Math.round((event.clientY / window.innerHeight)*225);
   
    document.body.style.backgroundColor = 'rgb('+xPos+','+yPos+',100)';
   
  
});
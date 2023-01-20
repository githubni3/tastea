function more(){
    const para2 = document.getElementById('des_para2');
    const btn = document.getElementById('learnMoreBtn');
    let x = btn.innerHTML;
    if(x==='Learn More'){
        para2.style.display = 'block';
        btn.innerHTML = 'close';
    }
    if(x==='close'){
        para2.style.display = 'none';
        btn.innerHTML = 'Learn More'
    }
}

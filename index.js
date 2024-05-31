document.getElementById('startBTN').onclick = async function(){
    document.getElementById('start').style.cssText = 'animation: hide 0.3s ease forwards;';
    await sleep(300);
    document.getElementById('start').remove();
}
document.onscroll = function(){
    if(document.scrollingElement.scrollTop > document.getElementById('scroll').offsetTop){
        document.getElementById('explainGraph').style.display = 'none';
    }else{
        document.getElementById('explainGraph').style.display = '';
    }
}
async function showHow(){
    while(document.getElementsByClassName('label')[5].getAttribute('y') >= 15){
        for(var i = 0; i < document.getElementsByClassName('label').length; i++){
            document.getElementsByClassName('label')[i].setAttribute('y', document.getElementsByClassName('label')[i].getAttribute('y') * 0.95 + (document.getElementsByClassName('label').length - i)/10);
        }
        await sleep(20)
    }
}
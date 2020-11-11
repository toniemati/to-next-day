function main() {
    
    let body = document.querySelector('body');
    
    let container = document.querySelector('.container');
    
    let btn = document.querySelector('.btn');
    
    btn.addEventListener('click', () => {
    
    if ( btn.textContent === 'Dark Mode') {
        
        body.style.background = '#2d2d2d';
        container.style.color = 'white';
        btn.style.color = 'white';
        btn.style.boxShadow = '1px 1px 5px 1px white';
        
        btn.textContent = 'Light Mode';
        
    } else {
       
        body.style.background = 'white';
        container.style.color = 'black';
        btn.style.color = 'black';
        btn.style.boxShadow = '1px 1px 5px 1px black';
        
        btn.textContent = 'Dark Mode';
       
       }
    });
    
    let data = new Date();
    
    let hours = data.getHours();
    let minutes = data.getMinutes(); 
    let seconds = data.getSeconds();
    
    const one = document.querySelector('.one p');
    
    const two = document.querySelector('.two p');
    
    hours = addZero(hours);
    minutes = addZero(minutes);
    seconds = addZero(seconds);
    
    one.innerHTML = `${hours} : ${minutes} : ${seconds}`;
    
    function addZero (time) {
        
        if ( time < 10 ) {
            
            time = "0" + time;
            
        }
        return time;
        
    };
    
    timeTo();
    
    function timeTo() {
        
        let hoursA = 23 - hours;
        let minutesA = 59 - minutes;
        let secondsA = 60 - seconds;
        
        hoursA = addZero(hoursA);
        minutesA = addZero(minutesA);
        secondsA = addZero(secondsA);
        
        two.innerHTML = `${hoursA} : ${minutesA} : ${secondsA}`;
           
    }
    
};

main();

setInterval(main, 1000);
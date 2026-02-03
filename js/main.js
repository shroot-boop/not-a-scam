// collage function
if (document.querySelector('.scammed-page')) {
    const collageContainer = document.getElementById('collageContainer');
    
    const images = [
        'assets/images/collage/img1.jpg',
        'assets/images/collage/img2.jpg',
        'assets/images/collage/img3.jpg',
        'assets/images/collage/img4.jpg',
        'assets/images/collage/img5.jpg',
    ];
    
    // random pos
    images.forEach((imgSrc, index) => {
        const img = document.createElement('img');
        img.src = imgSrc;
        
        // random size
        const size = Math.random() * 150 + 150;
        img.style.width = size + 'px';
        img.style.height = size + 'px';
        
        // random position
        img.style.left = Math.random() * 80 + '%';
        img.style.top = Math.random() * 80 + '%';
        
        // random rotation
        img.style.transform = `rotate(${Math.random() * 40 - 20}deg)`;
        
        // image load error
        img.onerror = function() {
            this.style.display = 'none';
        };
        
        collageContainer.appendChild(img);
    });
}

// question page - no button moves
if (document.querySelector('.question-page')) {
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');
    let dodgeCount = 0;
    
    // initial button sizes
    let yesBtnSize = 1;
    
    noBtn.addEventListener('mouseenter', function() {
        dodgeCount++;
        
        // move to random spot
        const maxX = window.innerWidth - noBtn.offsetWidth - 100;
        const maxY = window.innerHeight - noBtn.offsetHeight - 100;
        
        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;
        
        noBtn.style.position = 'fixed';
        noBtn.style.left = randomX + 'px';
        noBtn.style.top = randomY + 'px';
        noBtn.style.transition = 'all 0.3s ease';
        
        // yes gets bigger and pinker
        yesBtnSize += 0.2;
        yesBtn.style.transform = `scale(${yesBtnSize})`;
        
        const pinkness = Math.min(255, 255 - (dodgeCount * 10));
        const redness = Math.min(255, 107 + (dodgeCount * 15));
        yesBtn.style.backgroundColor = `rgb(${redness}, ${pinkness}, 157)`;
    });
    
    // preventing cliking no button
    noBtn.addEventListener('click', function(e) {
        e.preventDefault();
        // mouseenter to move it again
        noBtn.dispatchEvent(new MouseEvent('mouseenter'));
    });
}

// floaty hearts
if (document.querySelector('.question-page')) {
    const heartsBackground = document.querySelector('.hearts-background');
    
    // Create multiple floating hearts
    for (let i = 0; i < 10; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'absolute';
        heart.style.fontSize = (Math.random() * 2 + 1) + 'rem';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = Math.random() * 100 + '%';
        heart.style.opacity = '0.3';
        heart.style.animation = `float ${Math.random() * 10 + 10}s infinite ease-in-out`;
        heart.style.animationDelay = Math.random() * 5 + 's';
        heartsBackground.appendChild(heart);
    }
}

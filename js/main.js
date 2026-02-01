// Page 2: Scammed Page - Random Image Collage
if (document.querySelector('.scammed-page')) {
    const collageContainer = document.getElementById('collageContainer');
    
    // You'll add your images to assets/images/collage/
    // This will automatically pick them up
    const images = [
        'assets/images/collage/img1.jpg',
        'assets/images/collage/img2.jpg',
        'assets/images/collage/img3.jpg',
        'assets/images/collage/img4.jpg',
        'assets/images/collage/img5.jpg',
    ];
    
    // Generate random positioned images
    images.forEach((imgSrc, index) => {
        const img = document.createElement('img');
        img.src = imgSrc;
        
        // Random size between 150-300px
        const size = Math.random() * 150 + 150;
        img.style.width = size + 'px';
        img.style.height = size + 'px';
        
        // Random position
        img.style.left = Math.random() * 80 + '%';
        img.style.top = Math.random() * 80 + '%';
        
        // Random rotation
        img.style.transform = `rotate(${Math.random() * 40 - 20}deg)`;
        
        // Handle image load errors gracefully
        img.onerror = function() {
            this.style.display = 'none';
        };
        
        collageContainer.appendChild(img);
    });
}

// Page 3: Question Page - Interactive NO Button
if (document.querySelector('.question-page')) {
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');
    let dodgeCount = 0;
    
    // Initial button sizes
    let yesBtnSize = 1;
    
    noBtn.addEventListener('mouseenter', function() {
        dodgeCount++;
        
        // Move NO button to random position
        const maxX = window.innerWidth - noBtn.offsetWidth - 100;
        const maxY = window.innerHeight - noBtn.offsetHeight - 100;
        
        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;
        
        noBtn.style.position = 'fixed';
        noBtn.style.left = randomX + 'px';
        noBtn.style.top = randomY + 'px';
        noBtn.style.transition = 'all 0.3s ease';
        
        // Make YES button bigger and more pink
        yesBtnSize += 0.2;
        yesBtn.style.transform = `scale(${yesBtnSize})`;
        
        // Gradually change to more reddish pink
        const pinkness = Math.min(255, 255 - (dodgeCount * 10));
        const redness = Math.min(255, 107 + (dodgeCount * 15));
        yesBtn.style.backgroundColor = `rgb(${redness}, ${pinkness}, 157)`;
    });
    
    // Prevent clicking NO button (extra safety)
    noBtn.addEventListener('click', function(e) {
        e.preventDefault();
        // Trigger mouseenter to make it dodge again
        noBtn.dispatchEvent(new MouseEvent('mouseenter'));
    });
}

// Add floating hearts animation on question page
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

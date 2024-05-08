let slideIndex = 1;
let slideInterval;

// Hàm hiển thị slide
function showSlides(n) {
  const slides = document.querySelectorAll('.slides img');
  
  // Kiểm tra giới hạn của slide
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  
  slides[slideIndex - 1].style.display = 'block';
}


function moveSlide(n) {
  clearInterval(slideInterval); 
  showSlides(slideIndex += n);
}


function autoSlide() {
  slideInterval = setInterval(function() {
    moveSlide(1); 
  }, 2000); 
}


showSlides(slideIndex);
autoSlide(); 

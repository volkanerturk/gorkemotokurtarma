let currentImageIndex = 0;
  const sliderImages = ['./1.jpeg', './2.jpeg', './3.jpeg', './4.jpeg'];
  const sliderImageElement = document.getElementById('sliderImage');

  // İmage değiştirme fonksiyonu
  function changeImage(index) {
    currentImageIndex = index;
    sliderImageElement.src = sliderImages[index];
    updateThumbnailClasses();
  }

  // Thumbnail aktifliklerini güncelleme fonksiyonu
  function updateThumbnailClasses() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach((thumbnail, index) => {
      if (index === currentImageIndex) {
        thumbnail.classList.add('active');
      } else {
        thumbnail.classList.remove('active');
      }
    });
  }
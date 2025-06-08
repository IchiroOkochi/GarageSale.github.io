window.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.slider').forEach(function (slider) {
    var images = slider.querySelectorAll('img');
    if (images.length === 0) return;
    var current = 0;
    images.forEach(function (img, idx) {
      img.style.display = idx === 0 ? 'block' : 'none';
    });
    var prev = slider.querySelector('.prev');
    var next = slider.querySelector('.next');
    function show(index) {
      images[current].style.display = 'none';
      current = index;
      images[current].style.display = 'block';
    }
    if (prev && next) {
      prev.addEventListener('click', function () {
        var idx = (current - 1 + images.length) % images.length;
        show(idx);
      });
      next.addEventListener('click', function () {
        var idx = (current + 1) % images.length;
        show(idx);
      });
    }
  });
});

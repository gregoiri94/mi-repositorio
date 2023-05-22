window.addEventListener('scroll', handleScroll);

function handleScroll() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var scrollButton = document.getElementById('myBtn');

  if (scrollTop > 100) {
    scrollButton.style.display = 'block';
  } else {
    scrollButton.style.display = 'none';
  }
}

function scrollToTop() {
  var scrollDuration = 300;
  var scrollStep = -window.scrollY / (scrollDuration / 15);
  var scrollInterval = setInterval(function() {
    if (window.scrollY !== 0) {
      window.scrollBy(0, scrollStep);
    } else {
      clearInterval(scrollInterval);
    }
  }, 15);
}


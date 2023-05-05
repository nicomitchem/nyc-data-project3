const APP_TOKEN = '9Tnj0UW7DpKNBRyiVb4ZCRkAf' // <- Replace this with your app token
const RESOURCE_ID = 'gpwd-npar' // <- Replace this with the ID for the data resource that you want to look up
const LIMIT = 4523 // <- Replace this with the number of records you want to pull

// Construct the URL that we need to make requests
const url = `https://data.cityofnewyork.us/resource/${RESOURCE_ID}.json?$limit=${LIMIT}&$$app_token=${APP_TOKEN}`

console.log(`Fetching url - ${url}`)

fetch(url)
  .then((response) => response.json())
  .then((json) => {
      console.log(json)
  });


  
  
  var slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
      slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
  }

  



  
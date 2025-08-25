const slides = [
      { img: "./Images/caption(1).jpg", caption: "@Jhon C" },
      { img: "./Images/caption(2).jpg", caption: "@Eddie J" },
      { img: "./Images/caption(3).jpg", caption: "@adriansj88" }

      
    ];

    let index = 0;

    function changeSlide() {
      index = (index + 1) % slides.length; // loop back to 0
      document.getElementById("mainImage").src = slides[index].img;
      document.getElementById("captionBtn").textContent = slides[index].caption;
    }
 setInterval(changeSlide, 3000);
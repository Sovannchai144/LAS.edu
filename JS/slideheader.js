
    const slides = [

      {
        image:
        "src/Banner/pic las.jpg",

       logo:
        "../src/logo/LOGO Pink​  2024 t-01.png",

        name:
        "រូបតំណាង",

        text:
        "សាលារៀន ពន្លឺ អាស៊ី"
      },

      {
        image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",

        logo:
        "../src/logo/LOGO Pink​  2024 t-01.png", 

        name:
        "សាខាទី២",
        text:
        "សាខា ជាច"
      },

      {
        image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",

        logo:
        "../src/logo/LOGO Pink​  2024 t-01.png",

        name:
        "សាខាទី៣",

        text:
        "សាខា សាខាកញ្ច្រៀច"
      }

    ];

    let current = 0;

    const hero =
    document.getElementById("heroVisual");

    const schoolLogo =
    document.getElementById("schoolLogo");

    const schoolName =
    document.getElementById("schoolName");

    const schoolText =
    document.getElementById("schoolText");

    function updateSlide(){

      hero.style.backgroundImage = `
      linear-gradient(
        180deg,
        rgba(19,35,58,.55),
        rgba(19,35,58,.55)
      ),
      url('${slides[current].image}')
      `;

      schoolLogo.src =
      slides[current].logo;

      schoolName.innerText =
      slides[current].name;

      schoolText.innerText =
      slides[current].text;
    }

    function nextImage(){

      current =
      (current + 1)
      % slides.length;

      updateSlide();

    }

    function prevImage(){

      current =
      (current - 1 + slides.length)
      % slides.length;

      updateSlide();

    }

    /* FIRST LOAD */
    updateSlide();

    /* AUTO SLIDE */
    setInterval(
      nextImage,
      5000
    );

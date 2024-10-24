let swiper = new Swiper(".swiper-screenshots", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: "auto",
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const projectObj = {
  forgeMedievale: {
    titre: `Forge Médiévale - 3D`,
    description: `Une scène 3D qui vise à reproduire un style réalistique sur un lieu du passé. Réalisé dans le cadre du cours "Modélisation 3D" par Alexandre Gervais, Ian Corbin, Samuel Desmeules-Voyer et Keven Malric, chaque membre de l'équipe on produit au moins 3 éléments 3D uniques à la scène. De plus, j'ai assemblé la scène et Ian Corbin s'est occupé de l'éclairage. Ce projet à été réalisé avec AutoDesk Maya et Arnold.`,
    image: "../assets/media/images/forgeMedievale.jpg",
    image2: "../assets/media/images/forgeMedievale1.jpg",
    image3: "../assets/media/images/forgeMedievale2.jpg",
    video: false
  },
  eruptionFatale: {
    titre: `Éruption Fatale - 3D, Sonore`,
    description: `Un environnement fantastique d'une plage déserte qui est sur une île volcanique qui s'apprête à entrer en éruption réalisé dans le cadre des cours "Animation 3D" et "Conception Sonore". Ceci est le gagnant du Prix "Coup de Coeur" du concours "Essais Audiovisuels" 2024. Ce projet dans le style low poly est entièrement fait par moi, Alexandre Gervais, incluant les pistes sonores. Le but de ce projet était d'essayer quelque chose de différent.`,
    image: false,
    image2: false,
    image3: false,
    video: "https://www.youtube.com/embed/JqnhCMl64_w?si=Q0iur_i_eQhaac77"
  },
  scopophobia: {
    titre: `Scopophobia - Unity`,
    description: `Un court jeu qui possède une ambiance horrifique et inquiétante réalisé dans le cadre du cours "Réalité Virtuelle". Le but est de trouver et collecter tout les os dans cet environnement urbain nocturnale grâce à votre lampe de poche.`,
    image: false,
    image2: false,
    image3: false,
    video: "https://www.youtube.com/embed/HkR0GhxXz2g?si=FNIV8E41-tdmVw5g"
  },
  banqueSons: {
    titre: `Banque de Sons - Sonore`,
    description: ``,
    image: false,
    image2: false,
    image3: false,
    sound: "./assets/media/audio/banqueSons.wav",
    video: false
  },
  ghostlyBusiness: {
    titre: `Ghostly Business - Web`,
    description: ``,
    image: "../media/images/ghostlyBusiness1.png",
    image2: "../media/images/ghostlyBusiness2.png",
    image3: "../media/images/ghostlyBusiness3.png",
    sound: false,
    video: "https://marexillius.github.io/GhostlyBusiness/"
  },
  voyageUnique: {
    titre: `Voyage Unique - Web`,
    description: ``,
    image: false,
    image2: false,
    image3: false,
    sound: false,
    video: "./assets/video/voyageUnique.mp3"
  },
  pixarBanana: {
    titre: `Banane Pixar - 3D`,
    description: ``,
    image: false,
    image2: false,
    image3: false,
    sound: false,
    video: "https://www.youtube.com/embed/Xaja_G7eDxo?si=Bxk1MDPyrba4NagU"
  },
  portalSides: {
    titre: `Portal Animation - 3D`,
    description: ``,
    image: false,
    image2: false,
    image3: false,
    sound: false,
    video: "https://www.youtube.com/embed/VQlTT4ovDFE?si=733e2_mckwA8-HnJ"
  },
  futurDuPasseAudio: {
    titre: `Futur du Passé - Sonore`,
    description: ``,
    image: false,
    image2: false,
    image3: false,
    sound: "./assets/media/audio/futurDuPasse.wav",
    video: false
  }
};

let htmlPage = window.location.href;

function loadProject(projectName) {
  localStorage.setItem("projectSelected", projectName);
  if (htmlPage.includes("projects.html") === false) {
    window.location.href = "./pages/projects.html";
  }

  /*HTML Elements*/
  let selectedProject = projectName;
  let projectTitle = document.querySelector(".project__title");
  let projectDesc = document.querySelector(".project__desc");
  let projectImg = document.querySelector(".project__img");
  let projectFrame = document.querySelector(".project__frame");
  let projectAudio = document.querySelector(".project__audio");
  let projectImg2 = document.querySelector(".project__img2");
  let projectImg3 = document.querySelector(".project__img3");

  /* Give project info */
  projectTitle.textContent = selectedProject.titre;
  projectDesc.textContent = selectedProject.description;

  if (selectedProject.image !== false) {
    projectImg.src = selectedProject.image;
    projectImg.classList.remove('hidden');
  } else {
    projectImg.classList.add('hidden');
  }
  if (selectedProject.image2 !== false) {
    projectImg2.src = selectedProject.image2;
    projectImg2.classList.remove('hidden');
  } else {
    projectImg2.classList.add('hidden');
  }
  if (selectedProject.image3 !== false) {
    projectImg3.src = selectedProject.image3;
    projectImg3.classList.remove('hidden');
  } else {
    projectImg3.classList.add('hidden');
  }
  if (selectedProject.sound !== false) {
    projectAudio.src = selectedProject.sound;
    projectAudio.classList.remove('hidden');
  } else {
    projectAudio.classList.add('hidden');
  }
  if (selectedProject.video !== false) {
    projectFrame.src = selectedProject.video;
    projectFrame.classList.remove('hidden');
  } else {
    projectFrame.classList.add('hidden');
  }
  
}

const allProjects = document.querySelectorAll(".project");
const projectArr = ["forgeMedievale", "eruptionFatale", "scopophobia", "banqueSons", "ghostlyBusiness", "voyageUnique", "pixarBanana", "portalSides", "futurDuPasseAudio"];

allProjects.forEach(element => {
  element.addEventListener("click", function () {
    projectArr.forEach(project => {
      if (element.classList.contains(project)) {
        localStorage.setItem("projectClicked", project);
        loadProject(project);
      };
    });
  })
});

let projectClicked = localStorage.getItem("projectClicked");
let projectSelected = localStorage.getItem("projectSelected");
console.log(htmlPage);

/* CHECKING EACH PROJECT TO TURN BACK THE LOCALSTORAGE INTO ITEM*/
switch(projectClicked) {
  case "forgeMedievale":
    projectSelected = projectObj.forgeMedievale;
    break;
  case "eruptionFatale":
    projectSelected = projectObj.eruptionFatale;
    break;
  case "scopophobia":
    projectSelected = projectObj.scopophobia;
    break;
  case "banqueSons":
    projectSelected = projectObj.banqueSons;
    break;
  case "ghostlyBusiness":
    projectSelected = projectObj.ghostlyBusiness;
    break;
  case "voyageUnique":
    projectSelected = projectObj.voyageUnique;
    break;
  case "banqueSons":
    projectSelected = projectObj.pixarBanana;
    break;
  case "portalAnim":
    projectSelected = projectObj.portalAnim;
    break;
  case "futurDuPasseAudio":
    projectSelected = projectObj.futurDuPasseAudio;
    break;
}

if (htmlPage.includes("projects.html")) {
  loadProject(projectSelected);
}
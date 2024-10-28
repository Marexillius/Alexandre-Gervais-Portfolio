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
    description: `Terminé le 15 Novembre 2023, Ceci est une scène 3D qui vise à reproduire un style réalistique sur un lieu du passé. Réalisé dans le cadre du cours "Modélisation 3D" par Alexandre Gervais, Ian Corbin, Samuel Desmeules-Voyer et Keven Malric, chaque membre de l'équipe ont produit au moins 3 éléments 3D uniques à la scène. Ce projet à été réalisé avec AutoDesk Maya et Arnold.`,
    image: "../assets/media/images/forgeMedievale.jpg",
    description2: `Tout d'abord, notre équipe à commencée avec discuter à propos d'un environnement 3D qui serait intéressant, unique et réalistique. Le thème qu'on a choisi était une forge des temps médievaux. Pour avoir une idée des objets qu'on allait devoir modéliser et d'avoir un aperçu de référence du produit final, j'ai fait cette esquisse ci-dessous.`,
    image2: "../assets/media/images/forgeMedievaleEsquisse.jpg",
    description3: `Ensuite, on a choisi en équipe qui fera quel asset. J'ai choisi de m'occuper du barril avec des plans, d'un sac, du charbon et des fenêtre. La modélisation et les matériaux sont entièrement fait par moi, mais les texture viennent d'un site web qui offrent des textures libre de droit.`,
    image3: "../assets/media/images/forgeMedievaleAssets.jpg",
    description4: `Finalement, je me suis occupé de populer la scène en ajoutant les murs, le plafond, le sol, des accessoires de plus comme un teneur d'armes et j'ai placer chaque objet fait par mon équipe dans la scène pour reproduire l'esquisse. Ian Corbin s'est occupé des lumières pour nous offrir les rendus finaux ci-dessous.`,
    image4: "../assets/media/images/forgeMedievale1.jpg",
    image5: "../assets/media/images/forgeMedievale2.jpg",
    video: false
  },
  eruptionFatale: {
    titre: `Éruption Fatale - 3D, Sonore`,
    description: `Terminé le 5 Mai 2024, Éruption Fatale est un environnement fantastique d'une plage déserte qui est sur une île volcanique qui s'apprête à entrer en éruption réalisé dans le cadre des cours "Animation 3D" et "Conception Sonore Interactive". Ceci est le gagnant du Prix "Coup de Coeur" du concours "Essais Audiovisuels" 2024. Ce projet dans le style low poly à été entièrement conceptualisé, modelé, animé et monté par moi, incluant la production des pistes sonores. Le but de ce projet était d'essayer quelque chose de différent que le style réalistique qui devient plus typique. Ce projet à été réalisé avec Autodesk Maya et Arnold, Reaper et DaVinci.`,
    image: false,
    description2: false,
    description3: false,
    description4: false,
    image5: false,
    image4: false,
    image2: false,
    image3: false,
    video: "https://www.youtube.com/embed/JqnhCMl64_w?si=Q0iur_i_eQhaac77"
  },
  scopophobia: {
    titre: `Scopophobia - Jeu Unity`,
    description: `Terminé le 15 Octobre 2024, Scopophobia est un court jeu qui possède une ambiance horrifique et inquiétante réalisé dans le cadre du cours "Réalité Virtuelle". Le but est de trouver et collecter tout les os dans cet environnement urbain nocturnal grâce à votre lampe de poche. La conceptualisation, la programmation, la stucture de l'environnement et la population de cet environnement ont été réalisés par moi. Les modèles 3D sont pris d'un pack d'assets offert aux comptes étudiants par Unity et les sources audio proviennent de Pixabay.`,
    image: false,
    description2: false,
    description3: false,
    description4: false,
    image5: false,
    image4: false,
    image2: false,
    image3: false,
    video: "https://www.youtube.com/embed/HkR0GhxXz2g?si=FNIV8E41-tdmVw5g"
  },
  queteRichesse: {
    titre: `Quête des Richesses - AR Unity`,
    description: `Terminé le 24 Septembre 2024, Quête des Richesses est une application mobile de Réalité Augmentée (AR) pour Android qui permet, avec la caméra du téléphone, du faire apparaître un coffre au trésor et une pièce d'or quand une carte de pirate est capté par la caméra. La conceptualisation, la réalisation, la production des médias visuels et sonores et la programmation ont été réalisés par moi dans le cadre du cours "Réalité Virtuelle". Ce projet à été réalisé avec Unity.`,
    image: "../assets/media/images/queteRichesses.jpg",
    image2: "../assets/media/images/queteRichesse2.jpg",
    description2: false,
    description3: false,
    description4: false,
    image5: false,
    image4: false,
    image3: false,
    video: false
  },
  ghostlyBusiness: {
    titre: `Ghostly Business - Web`,
    description: `Terminé le 4 Décembre 2023, Ghostly Business est un jeu web qui consiste à devoir prendre des décisions face à un problème présenté. Ce projet fut conceptualisé, réalisé et programmé dans en JavaScript dans le cadre du cours "Développement Web". Les médias visuels ont été assemblés par moi, mais pas réalisés.`,
    image: false,
    description2: false,
    description3: false,
    description4: false,
    image5: false,
    image4: false,
    image2: false,
    image3: false,
    video: "https://marexillius.github.io/GhostlyBusiness/"
  },
  voyageUnique: {
    titre: `Voyage Unique - Web`,
    description: `Terminé le 13 Mai 2024, Voyage Unique est une histoire "Scrollytelling" web affiché avec des animations programmés en JavaScript à l'aide des librairies GSAP. La conceptualisation, programmation, réalisation des médias et la production ont été réalisées dans le cadre du cours "Optimisation Web" par moi.`,
    image: false,
    description2: false,
    description3: false,
    description4: false,
    image5: false,
    image4: false,
    image2: false,
    image3: false,
    video: "https://www.youtube.com/embed/EPQ-KbnGg4M?si=8wWj7WBylR8-x83K"
  },
  pixarBanana: {
    titre: `Banane Pixar - 3D`,
    description: `Terminé le 19 Février 2024, Pixar Banana est une courte animation réalisée avec une piste audio pré-existante dans le cadre du cours "Animation 3D". La population de l'environnement, l'animation, et la création de la banane et les lettre ont été réalisés par moi. Ce projet à été réalisé avec AutoDesk Maya et Arnold.`,
    image: false,
    description2: false,
    description3: false,
    description4: false,
    image5: false,
    image4: false,
    image2: false,
    image3: false,
    video: "https://www.youtube.com/embed/Xaja_G7eDxo?si=Bxk1MDPyrba4NagU"
  },
  portalSides: {
    titre: `Portal Sides - 3D`,
    description: `Terminé le 5 Mars 2024, Portal Sides est une courte animation inspirée par le jeu vidéo "Portal". L'animation nous amène dans 2 côtés différents de des portails qui ont une petite animation générative. La réalisation, production et conceptualisation ont été réalisées dans le cadre du cours "Animation 3D" par moi. Ce projet à été réalisé avec AutoDesk Maya et Arnold.`,
    image: false,
    description2: false,
    description3: false,
    description4: false,
    image5: false,
    image4: false,
    image2: false,
    image3: false,
    video: "https://www.youtube.com/embed/VQlTT4ovDFE?si=733e2_mckwA8-HnJ"
  },
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
  let projectImg2 = document.querySelector(".project__img2");
  let projectImg3 = document.querySelector(".project__img3");
  let projectDesc2 = document.querySelector(".project__desc2");
  let projectDesc3 = document.querySelector(".project__desc3");
  let projectDesc4 = document.querySelector(".project__desc4");
  let projectImg4 = document.querySelector(".project__img4");
  let projectImg5 = document.querySelector(".project__img5");

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
  if (selectedProject.description2 !== false) {
    projectDesc2.textContent = selectedProject.description2;
    projectDesc2.classList.remove('hidden');
  } else {
    projectDesc2.classList.add('hidden');
  }
  if (selectedProject.description3 !== false) {
    projectDesc3.textContent = selectedProject.description3;
    projectDesc3.classList.remove('hidden');
  } else {
    projectDesc3.classList.add('hidden');
  }
  if (selectedProject.description4 !== false) {
    projectDesc4.textContent = selectedProject.description4;
    projectDesc4.classList.remove('hidden');
  } else {
    projectDesc4.classList.add('hidden');
  }
  if (selectedProject.image4 !== false) {
    projectImg4.src = selectedProject.image4;
    projectImg4.classList.remove('hidden');
  } else {
    projectImg4.classList.add('hidden');
  }
  if (selectedProject.image5 !== false) {
    projectImg5.src = selectedProject.image5;
    projectImg5.classList.remove('hidden');
  } else {
    projectImg3.classList.add('hidden');
  }
  if (selectedProject.video !== false) {
    projectFrame.src = selectedProject.video;
    projectFrame.classList.remove('hidden');
  } else {
    projectFrame.classList.add('hidden');
  }
  
}

const allProjects = document.querySelectorAll(".project");
const projectArr = ["forgeMedievale", "eruptionFatale", "scopophobia", "queteRichesse", "ghostlyBusiness", "voyageUnique", "pixarBanana", "portalSides"];

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

const allButtonCategory = document.querySelectorAll(".categoryButton");
const tridimensionProjects = document.querySelector(".triDProjects");
const unityProjects = document.querySelector(".UnityProjects");
const webProjects = document.querySelector(".WebProjects");
allButtonCategory.forEach(category => {
  category.addEventListener("click", function () {
    /* 3 D */
    if (category.classList.contains("3d")) {
      tridimensionProjects.classList.remove("hidden");
      unityProjects.classList.add("hidden");
      webProjects.classList.add("hidden");
    } 
    /* U N I T Y */
    else if (category.classList.contains("unity")) {
      tridimensionProjects.classList.add("hidden");
      unityProjects.classList.remove("hidden");
      webProjects.classList.add("hidden");
    } 
    /* W E B */
    else if (category.classList.contains("web")) {
      tridimensionProjects.classList.add("hidden");
      unityProjects.classList.add("hidden");
      webProjects.classList.remove("hidden");
    } 
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
  case "queteRichesse":
    projectSelected = projectObj.queteRichesse;
    break;
  case "ghostlyBusiness":
    projectSelected = projectObj.ghostlyBusiness;
    break;
  case "voyageUnique":
    projectSelected = projectObj.voyageUnique;
    break;
  case "pixarBanana":
    projectSelected = projectObj.pixarBanana;
    break;
  case "portalSides":
    projectSelected = projectObj.portalSides;
    break;
}

if (htmlPage.includes("projects.html")) {
  loadProject(projectSelected);
}
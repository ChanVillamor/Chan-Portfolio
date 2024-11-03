// interest 
import {
   volleyball,
   music,
   podcast,
   anime,
   tech,
   travel
} from '../assets/interest-icon'

// technologies
import {
   html,
   css,
   js,
   php,
   react,
   tailwind,
} from '../assets/tech-icon'

// certificates
import {
   cert1,
   cert2,
   cert3,
   cert4
} from '../assets/certificates'

// project
import {
   calculator,
   pizza,
   restaurant,
   quote,
} from '../assets/project-img'

// navLinks
export const navLinks = [
   { href: "#home", label: "Home" },
   { href: "#about", label: "About Me" },
   { href: "#resume", label: "Resume" },
   { href: "#projects", label: "Projects" },
   { href: "#contact", label: "Contact" },
];

// interests
export const interest = [
   {interestImg: volleyball},
   {interestImg: music},
   {interestImg: podcast},
   {interestImg: anime},
   {interestImg: tech},
   {interestImg: travel}
]

// tehnologies/skills
export const technologies = [
   {techImg: html},
   {techImg: css},
   {techImg: js},
   {techImg: php},
   {techImg: react},
   {techImg: tailwind}
]

// certificates
export const certificates = [
   {certImg: cert1},
   {certImg: cert2},
   {certImg: cert3},
   {certImg: cert4},
]

// projects
export const projects = [
   {
     image: restaurant, // Replace with actual image URL
     title: 'Restaurant Web Page',
     description: 'A sleek, restaurant reservation webpage built on the front end using HTML, CSS, and JavaScript.',
     githubLink: 'https://github.com/chanvillamor/Restaurant-web-page',
     demoLink: 'https://chanvillamor.github.io/Restaurant-web-page/',
   },
   {
      image: calculator, // Replace with actual image URL    
      title: 'Simple Calculator',
      description: 'A straightforward calculator built with JavaScript, offering essential functions for basic arithmetic operations.',
      githubLink: 'https://github.com/ChanVillamor/Simple-Calculator',
      demoLink: 'https://chanvillamor.github.io/Simple-Calculator/',
    },
   {
   image: quote, // Replace with actual image URL   
   title: 'Quote Generator',
   description: 'A JavaScript-powered web-based quote generator that uses an array list to display inspiring quotes.',
   githubLink: 'https://github.com/ChanVillamor/learning-DOM---JS/tree/main/PR1%20Quote%20generator%20js',
   demoLink: 'https://chanvillamor.github.io/learning-DOM---JS/PR1%20Quote%20generator%20js/',
   },
 ];
 
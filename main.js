/* 
MILESTONE 1 (da fare entro le 18):
stampare su console le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2 (se ce la fai falla entro le 18 altrimenti puoi consegnare anche dopo le 18 - easy):
stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1 (solo se non sei giá frustrato dalle milestone 1 e 2):
trasformare la stringa foto in una immagine effettiva
BONUS 2 (solo se non sei giá fuso):
organizzare i singoli membri in card/schede

*/

const team = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    image: "wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    image: "angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    image: "walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    image: "angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    image: "scott-estrada-developer.jpg",
  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    image: "barbara-ramos-graphic-designer.jpg",
  },
];

//ciclo per stampare i dati
/* for (let i = 0; i < team.length; i++) {
  console.log(team[i].name);
  console.log(team[i].role);
  console.log(team[i].image);
} */

//richiamo gli elementi del DOM e li racchiudo nelle variabili
const firstName = document.getElementsByClassName("name");
// console.log(firstName);

const roleElement = document.getElementsByClassName("role");
// console.log(role);

const imageElement = document.getElementsByClassName("card-img");
// console.log(image);




// Inserisco i nomi del team nella DOM
for (let i = 0; i < team.length; i++) {
    const addName = firstName[i].append(team[i].name);
    const addRole = roleElement[i].append(team[i].role);
    const place_image = './img/' + team[i].image;
    const new_img = document.createElement('img');
  console.log(place_image)

  new_img.src = place_image;
    // console.log(new_img)
  imageElement[i].appendChild(new_img)
  
  
}

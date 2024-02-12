const teamMembers = [
  {
    name: "Silas",
    surname: "Bonsu",
    age: 25,
    city: "Correggio",
    hobby: "atletica leggera",
    favoriteFood: "pizza",
    favoriteVideoGame: "Horizon zero down",
    favoriteFilm: "Star wars",
    favoriteBook: "Il signore degli anelli",
    petName: "Bethoven",
  },
  {
    name: "Andrea",
    surname: "Audisio",
    age: 34,
    city: "Cuneo",
    hobby: ["serie tv", "Videogiochi", "fotografia"],
    favoriteFood: "lasagne",
    favoriteVideoGame: "Minecraft",
    favoriteFilm: "Star Wars, canonico",
    favoriteBook: "ciclo delle fondazioni",
    petName: "Birba",
  },

  {
    name: "Andrea",
    surname: "Canonico",
    age: 27,
    city: "Napoli",
    hobby: "mixing vinyls",
    favoriteFood: "Polpo alla luciana",
    favoriteVideoGame: "",
    favoriteFilm: "Non essere cattivo",
    favoriteBook: "",
    petName: "",
  },

  {
    name: "Ylias",
    surname: "Macaluso",
    age: 26,
    city: "Palermo",
    hobby: ["Anime", "Manga", "Videogiochi"],
    favoriteFood: "Hamburger americano",
    favoriteVideoGame: "Guild Wars 2",
    favoriteFilm: "Il signore degli anelli",
    favoriteBook: "Dalla terra alla luna",
    petName: ["Milo", "Luppolo"],
  },
];

/* function sameName(array) {
  for (let i = 0; i <= teamMembers.length; i++) { 
    if (teamMembers[i].name === teamMembers[i++].name) {
      console.log(teamMembers[i]);
    } else {console.log(`no`);}
  }

   if (checkNames.length > 0) {
    console.log(checkNames);
  } else {
    console.log("no");
  }
}

sameName(teamMembers);
  */

function sameName (array){ 
  array.forEach(personA =>
      console.log (array.filter((personB) => personA.name === personB.name && personA !== personB)
      ))
}
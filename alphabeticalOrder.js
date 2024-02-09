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
    name: "Alessandro",
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
    name: "Ilyas",
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

/* const idMembers = teamMembers.map((members) => members.surname + ` ` + members.name);

idMembers.sort((a, b) => {
  const surnameA = a.surname 
  const surnameB = b.surname 
  if (surnameA < surnameB) {
    return -1;
  }
  if (surnameA > surnameB) {
    return 1;
  }
  return 0;
}
)

console.log(idMembers); */

function alphabeticalOrder(array) {
  return array.sort((a, b) => {
    const surnameA = a.surname;
    const surnameB = b.surname;
    if (surnameA < surnameB) {
      return -1;
    }
    if (surnameA > surnameB) {
      return 1;
    }
    return 0;
  });
}

console.log(alphabeticalOrder(teamMembers));

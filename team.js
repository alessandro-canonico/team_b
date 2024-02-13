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
    favoriteVideoGame: "LOL",
    favoriteFilm: "Il signore degli anelli",
    favoriteBook: "Dalla terra alla luna",
    petName: ["Milo", "Luppolo"],
  },
];

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

function ageOrder(array) {
  return array.sort((a, b) => a.age - b.age);
}

console.log(ageOrder(teamMembers));

function avgAge(array) {
  const sumMembersAge = array.reduce((acc, members) => acc + members.age, 0);
  return sumMembersAge / teamMembers.length;
}

console.log(`The average age of team members is: ` + avgAge(teamMembers));

function membersWithPet(array) {
  return array.filter((members) => members.petName != "");
}

console.log(membersWithPet(teamMembers));

function favGame(array) {
  const checkGames = array.filter(
    (member) =>
      member.favoriteVideoGame == "League Of Legends" ||
      member.favoriteVideoGame == "LOL"
  );

  if (checkGames.length > 0) {
    console.log(checkGames);
  } else {
    console.log("No one likes Legue Of Legends");
  }
}

favGame(teamMembers);

let sameNamedPerson = [];

function sameName(array) {
  array.forEach((personA) => {
    let sameNamedPersons = array.some(
      (personB) => personA.name === personB.name && personA !== personB
    );
    if (sameNamedPersons) {
      sameNamedPerson.push(personA);
    }
  });
  if (sameNamedPerson.length != 0) {
    return sameNamedPerson;
  } else {
    return "Non ci sono membri con lo stesso nome";
  }
}

console.log(sameName(teamMembers));

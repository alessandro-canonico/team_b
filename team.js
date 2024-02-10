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
]



//Funzione 1: Print the team in alphabetical order (surname name)

function sortBySurname(array) {
  const sortedArray = array.sort((a, b) => {
    const nameA = a.surname.toUpperCase(); // ignore upper and lowercase
    const nameB = b.surname.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1
    } else if (nameA > nameB) {
      return 1
    } else {
      return 0
    }
  })
  console.log("Team members sorted by surname:")
  console.log(sortedArray)
}
sortBySurname(teamMembers) //chiamata della funzione



//Funzione 2: Print the team in age order (name age)

function sortByAge(array) {
  const sortedAge = array.sort((member1, member2) => member1.age - member2.age)
  console.log("Team members sorted by age:")
  console.log(sortedAge)
}
sortByAge(teamMembers) //chiamata della funzione



//Funzione 3: Print the team average age
function avgAge(array) {
  const ages = array.map((person) => person.age)
  const ageSum = ages.reduce((number, cumulatore) => cumulatore + number, 0)
  const avgAge = ageSum / ages.length
  console.log(`The average member age is: ${avgAge}`)
}
avgAge(teamMembers) //chiamata della funzione



//Funzione 4: Print who has a pet (name petName).

function hasPet (array) {
    const petOwners = array.filter(member => member.petName != "")
    console.log("Team members who own a pet:")
    if (petOwners.length > 0) {
      console.log(petOwners)
    } else {
      console.log("No team members owns a pet")
    }
}
hasPet(teamMembers)



//Funzione 5 : filtra le persone che hanno "LOL" o "League Of Legends" come favouriteGame

function favGame(array) {
  const favGames = array.filter(
    (member) =>
      member.favoriteVideoGame == "League Of Legends" ||
      member.favoriteVideoGame == "LOL"
  )
  console.log("Team members who like League Of Legends")
  
  if (favGames.length > 0) {
    console.log(favGames)
  } else {
    console.log("No one likes Legue Of Legends");
  }
}

favGame(teamMembers)

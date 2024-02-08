/* - .
- .
- .
- .
- .
- . */

const teamMembers = [
    {
      name : 'Silas',
      surname : 'Bonsu',
      age : 25,
      city : 'Correggio',
      hobby : 'atletica leggera',
      favoriteFood :'pizza',
      favoriteVideoGame : 'Horizon zero down',
      favoriteFilm : 'Star wars',
      favoriteBook : 'Il signore degli anelli',
      petName : 'Bethoven',
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
        petName: "Birba"
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
        petName: ["Milo", "Luppolo"]
    },
];
  
/* 
// Print the team in alphabetical order (surname name)


function alphabetical() {
    const comparision= teamMembers[0].surname
    
    let ordered= [];
    
    teamMembers.map((x) => { 
        if (comparision < x.surname) {
        ordered.push(x)} else{
            ordered.unshift(x)
        }})
    
    console.log(ordered)
}; */

/*
//  Print the team in age order 
(name age) const byAge = teamMembers.toSorted((a, b) => a.age - b.age)
console.log(byAge)
// la migliore alterantiva è un ciclo for, dove confronto i con i+1 e costrusico un nuovo array con indice +i o -i */

/* //Print the team middle age

semplice calcolo matematico*/

/* //Print who has a pet (name petName)

metodo forEach confrontando una conversione in boolean? un array in boolean come risulta?*/

/* //Print who wrote ‘LOL’ or ‘League Of Legends’ as a favorite video game. (name)

metodo find*/

/* //Print if there are some members with the same name (name)
ciclo for  confrontando gli indici i con una variabile a che aumenta a fine ciclo, oppure inserendo un metodo find che cerca il corrispettivo nome di i */
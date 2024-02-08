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
// la migliore alterantiva sarebbe stata un ciclo for, per posizionare ogni valore ciclato e confrontato sopra o sotto un certo indice */

/*  //Print the team middle age

 let ages=[]; teamMembers.forEach((x)=> ages.push(x.age));
 let average = ((ages.reduce((i,x)=> i + x, 0)) / ages.length);
 console.log (average.toFixed(0))
 */

 //Print who has a pet (name petName)
const petOwner= [];
//function havePets (name, petName) {this.name=name, this.petName=petName};

teamMembers.map((o)=>{return petOwner.push ( Boolean(o.petName))});

//for (let index= 0; index < petOwner.length; ++index) 
//{ if (petOwner[index].pet == true) {console.log("found")} else{console.log("found too")}}
//{if (petOwner[index].pet == true) {petOwner[index].name= teamMembers[index].name; petOwner[index].petName= teamMembers[index].petName;}}

console.log(petOwner) 

/* //Print who wrote ‘LOL’ or ‘League Of Legends’ as a favorite video game. (name)

metodo find*/

/* //Print if there are some members with the same name (name)
ciclo for  confrontando gli indici i con una variabile a che aumenta a fine ciclo, oppure inserendo un metodo find che cerca il corrispettivo nome di i */
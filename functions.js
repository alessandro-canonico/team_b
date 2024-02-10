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
        favoriteFood: ["lasagne", "pizza"],
        favoriteVideoGame: "Minecraft",
        favoriteFilm: "Star Wars, canonico",
        favoriteBook: "ciclo delle fondazioni",
        petName: "Birba"
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

/* // Print the team in alphabetical order (surname name)

    function alphabetical() {
        const comparision= teamMembers[0].surname
        
        let ordered= [];
        
        teamMembers.map((x) => { 
            if (comparision < x.surname) {
            ordered.push(x)} else{
                ordered.unshift(x)
            }})
        
        console.log(ordered)
    }; 
*/

/* //  Print the team in age order 

    (name age) const byAge = teamMembers.toSorted((a, b) => a.age - b.age)
    console.log(byAge)
    // l'unica alterantiva sarebbe stata un ciclo for, per posizionare ogni valore ciclato e confrontato sopra o sotto un certo indice 
*/

/* //  Print the team middle age

    let ages=[]; teamMembers.forEach((x)=> ages.push(x.age));
    let average = ((ages.reduce((i,x)=> i + x, 0)) / ages.length);
    console.log (average.toFixed(0))
*/

/* //  Print who has a pet (name petName)

    let petOwner= [];
    let owner= {};
    function pets(Name, pet) {this.name= Name, this.petName= pet};

    for (let index= 0; index < teamMembers.length; ++index) {
        if (Boolean( teamMembers[index].petName ) === true) { 
            owner= new pets( teamMembers[index].name, teamMembers[index].petName ); 
            petOwner.push(owner)
            //il metodo push è pigro, ha per forza bisogno di riceve qualcosa che è definito in precedenza
    }}
    console.log(petOwner)
*/

/* //   Print who wrote ‘LOL’ or ‘League Of Legends’ as a favorite video game. (name)
    
    let found=[];
    teamMembers.forEach((o)=>{
    if (o.favoriteFood.includes("pizza")) {console.log("found " + o.name + ": " + o.petName)};
    })
    console.log(found) 
*/

/* //  Print if there are some members with the same name (name)
    
    function Member(name) {this.name= name, this.count= 0};

    let names= [];

    for (let i= 0; i < teamMembers.length; i++) {
        names[i] = new Member(teamMembers[i].name);
        teamMembers.forEach((n)=> {
            if (names[i].name == n.name) {names[i].count++}
        });
    };

    for (let v= 0; v < teamMembers.length; v++) {
        if(
            (names[v+1] != undefined) && (names[v].name === names[v+1].name)
        ) {
                names.splice(v+1, 1); v--
            }
    }
    
   console.log(names)
*/
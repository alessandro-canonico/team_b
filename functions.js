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
        favoriteVideoGame: "LOL",
        favoriteFilm: "Star Wars, canonico",
        favoriteBook: "ciclo delle fondazioni",
        petName: "Birba"
    }, 
    {
      name: "Alesandro",
      surname: "Canonico",
      age: 27,
      city: "Napoli",
      hobby: "mixing vinyls",
      favoriteFood: "Polpo alla luciana",
      favoriteVideoGame: "League Of Legends",
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

/*  //   Print who wrote ‘LOL’ or ‘League Of Legends’ as a favorite video game. (name)
    
    function favGame(array) {
    const favGames = array.filter(
        (member) =>
        member.favoriteVideoGame == "League Of Legends" ||
        member.favoriteVideoGame == "LOL"
        );

      if (favGames.length > 0) {
        console.log(favGames)
        } else {
        console.log("No one likes Legue Of Legends");
        };
    };
    favGame(teamMembers); */

/*  //  Print if there are some members with the same name (name)

    function homonyms(members){
        let memberfind=[];

        memberfind.push(...members); //crea copia indipendente

        memberfind.map(add=> add.count =0) //aggiunge parametro count= 0
        
        for (let i= 0; i < members.length; i++) {
            members.forEach((others)=> {
                if (members[i].name == others.name) {memberfind[i].count++} 
            });
        }; // assegna +1 a count, ogni volta che compare il nome nel ciclo

        memberfind.filter((pass)=> pass.count > 1).forEach(
            found => console.log(found.name + " " + found.surname)
        ); // se count è >1 allora  in nome compare più volte, omonimi trovati e nomi stampati
    }
*/
/*   // ALTERNATIVA\\

    function sameName(array){
        let omonimi;
        let result= [];
        array.map(personA =>{
            omonimi =array.filter (personB=> personA.name === personB.name && personA !== personB);
            //console.log (omonimi)
            omonimi.find (omonimo=> {if (omonimo.length !== 0) {
            result.push(`${omonimo.name}` + " " + `${omonimo.surname}`)

            }})
            
        });
        if(result.length === 0){
            result[0]=("nessun omonimo");
            
        }
        console.log(result)
    }
    sameName(teamMembers)
 */
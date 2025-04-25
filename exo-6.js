/* console.log("exo-6");

const joeInfo = {
    name: "Joe's house",
    rooms: 5,
    garage: false,
    bathrooms: 1 + 2,
    cars: ['Clio', 'Van'],
};
// ! Ne faites pas de modification au dessus de cette ligne !

console.log(joeInfo.cars);

joeInfo.bathrooms = 3;

joeInfo.garage=true;

console.log(joeInfo) */
let Team ={
players : [{firstName: 'Pablo',
    lastName: 'Sanchez',
    age: 11
}],
games : [{
    opponent: "Broncos",
    teamPoints: 42,
    opponentPoints: 27
}],
addPlayer(firstName,lastName,age) {
    const newplayer = {
        firstName: firstName,
        lastName: lastName,
        age: age
    };
      this.players.push(newplayer);
    },
    addGames(opponent,teamPoints,opponentPoints){
        const newgames = {
            opponent: opponent,
            teamPoints: teamPoints,
            opponentPoints:opponentPoints
        }
        this.games.push(newgames)
        },
        }
      
Team.addPlayer("johnny","cata",37);
Team.addPlayer("luc","sens",57);
Team.addPlayer("tori","mam",48);
Team.addGames("brande",10,53);
Team.addGames("marla",43,28);
Team.addGames("nouel",72,42);
//console.log(Team.players);
//console.log(Team.games);
function sommepoints(){
    let accpoints=0;
for (i=0;i<Team.games.length;i++){
    accpoints=accpoints+Team.games[1][i];
    console.log(accpoints)
}
}
sommepoints();

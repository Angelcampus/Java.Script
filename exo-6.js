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
        this.opp
        },

    }

  
Team.addPlayer("co","caaa",37);
console.log(Team.players);

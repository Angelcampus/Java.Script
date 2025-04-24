let secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];
let deletelast = secretMessage.pop(); // supprime dernier élément
let ajoutetab = secretMessage.push("orange","mandarine"); // ajouter dans son tableau
secretMessage[6]= "right"; // modifier à l'index 6 du tab easily par right 
let deletefirst = secretMessage.shift();
let ajoutfirst = secretMessage.unshift("Programming")
secretMessage.splice(5,5,"know"); // supprime élement plusieurs et remplace par un nouveau ( nb index, nb suppression, nouvel élement)
let phrase = secretMessage.join(" ");
console.log(phrase);
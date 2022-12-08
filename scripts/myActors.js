// document.getElementById("actor").innerHTML = 
// `<h1 class="app-title">List of ${actorsData.length} Actors</h1>
// ${actorsData.map(actorTemplate).join("")}`;  

// function actorTemplate(actor) {
//     return `
//       <div class="actor">
//       <h1 class="actor-name">${actor.name}</h1>`;
//   }



const listofStudents = [
  {firstname: 'Marquel',age: 27},
  {firstname: 'Emily',age: 18},
  {firstname: 'Ashley',age: 25},
  {firstname: 'Jason',age: 21},
]
for (const property in listofStudents) {
  `${property}: ${listofStudents[property]}`;
}
document.getElementById("actor").innerHTML = 

`<h1>Name: ${listofStudents[0].firstname} <h1>`
for (const property in listofStudents) {
  `${property}: ${listofStudents[property]}`;
}; //

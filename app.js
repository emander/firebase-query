// FIRESTORE QUERY ACTIVITY

// PART 2

// #1 all teams in Spain

db.collection('teams')
  .where("country","==", "Spain")
  .get()
  .then((data) => {
    let docs = data.docs;
    let html = ``;
    docs.forEach((d) => {
        html += `<p>${d.data().team_name} | ${d.data().country}</p>`
    });
    document.querySelector("#output1").innerHTML += html;
});

// document.getElementById("output").innerText = spain_teams;

// #2 all teams in Madrid, Spain

db.collection('teams')
  .where("city","==", "Madrid")
  .get()
  .then((data) => {
    let docs = data.docs;
    let html = ``;
    docs.forEach((d) => {
        html += `<p>${d.data().team_name} | ${d.data().city}</p>`
    });
    document.querySelector("#output2").innerHTML += html;
});

// #3 all national teams

db.collection('teams')
  .where("city","==", null)
  .get()
  .then((data) => {
    let docs = data.docs;
    let html = ``;
    docs.forEach((d) => {
      html += `<p>${d.data().team_name}</p>`
    });
    document.querySelector("#output3").innerHTML += html;
});

// #4 all teams not in Spain

db.collection('teams')
  .where("country","!=", "Spain")
  .get()
  .then((data) => {
    let docs = data.docs;
    let html = ``;
    docs.forEach((d) => {
      html += `<p>${d.data().team_name} | ${d.data().country}</p>`
    });
    document.querySelector("#output4").innerHTML += html;
});

// #5 all teams not in Spain or England

db.collection('teams')
  .where("country","not-in", ["Spain", "England"])
  .get()
  .then((data) => {
    let docs = data.docs;
    let html = ``;
    docs.forEach((d) => {
      html += `<p>${d.data().team_name} | ${d.data().country}</p>`
    });
    document.querySelector("#output5").innerHTML += html;
});

// #6 teams in Spain with more than 700M fans

db.collection('teams')
  .where("country","==", "Spain")
  .where("fans", ">", 700)
  .get()
  .then((data) => {
    let docs = data.docs;
    let html = ``;
    docs.forEach((d) => {
      html += `<p>${d.data().team_name} | ${d.data().fans}</p>`
    });
    document.querySelector("#output6").innerHTML += html;
});

// #7 teams with range of fans from 500M to 600M

db.collection('teams')
  .where("fans", ">=", 500)
  .where("fans", "<=", 600)
  .get()
  .then((data) => {
    let docs = data.docs;
    let html = ``;
    docs.forEach((d) => {
      html += `<p>${d.data().team_name} | ${d.data().fans}</p>`
    });
    document.querySelector("#output7").innerHTML += html;
});

// #8 teams with Ronaldo as top scorer

db.collection('teams')
  .where("top_scorers", "array-contains", "Ronaldo")
  .get()
  .then((data) => {
    let docs = data.docs;
    let html = ``;
    docs.forEach((d) => {
      html += `<p>${d.data().team_name} | ${d.data().top_scorers}</p>`
    });
    document.querySelector("#output8").innerHTML += html;
});

// #9 teams with Ronaldo, Maradona, or Messi as top scorer

db.collection('teams')
  .where("top_scorers", "array-contains-any", ["Ronaldo", "Maradona", "Messi"])
  .get()
  .then((data) => {
    let docs = data.docs;
    let html = ``;
    docs.forEach((d) => {
      html += `<p>${d.data().team_name} | ${d.data().top_scorers}</p>`
    });
    document.querySelector("#output9").innerHTML += html;
});


// PART 3

// update madrid fans and team name

db.collection("teams").doc("pKHxBo4HeEqoTInZrFw7").update({
    fans: 811,
    team_name: "Real Madrid FC",
});

// update barcelona fans and team name

db.collection("teams").doc("kxDaZAlBK22PLkw7dE5q").update({
    fans: 747,
    team_name: "FC Barcelona",
});

// update top scorers array for Real Madrid

db.collection("teams").doc("pKHxBo4HeEqoTInZrFw7").update({
    top_scorers: firebase.firestore.FieldValue.arrayRemove("Hazard"),
});

db.collection("teams").doc("pKHxBo4HeEqoTInZrFw7").update({
    top_scorers: firebase.firestore.FieldValue.arrayUnion("Crispo"),
});

// update top scorers array for Barcelona

db.collection("teams").doc("kxDaZAlBK22PLkw7dE5q").update({
    top_scorers: firebase.firestore.FieldValue.arrayRemove("Puyol"),
});

db.collection("teams").doc("kxDaZAlBK22PLkw7dE5q").update({
    top_scorers: firebase.firestore.FieldValue.arrayUnion("Deco"),
});

// add Real Madrid jersey colors

db.collection("teams").doc("pKHxBo4HeEqoTInZrFw7").update({
    jersey_color: {
        home: "white",
        away: "black",
    },
});

// add Barcelona jersey colors

db.collection("teams").doc("kxDaZAlBK22PLkw7dE5q").update({
    jersey_color: {
        home: "red",
        away: "gold",
    },
});

// update Real Madrid jersey colors

db.collection("teams").doc("pKHxBo4HeEqoTInZrFw7").update({
    "jersey_color.away": "purple",
});

// update Barcelona jersey colors

db.collection("teams").doc("kxDaZAlBK22PLkw7dE5q").update({
    "jersey_color.away": "pink",
});
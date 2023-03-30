function nameFootballer1() {
  let name = prompt("What is the name of this footballer?");
  name = name.toLowerCase().trim().replace("lionel messi", "messi");
  if (name === "messi") {
    alert("Of course you knew this one! Who wouldn't?!😁 ");
  } else {
    alert("Nope. Messi! Only the greatest player in the world!🤯⚽️");
  }
  let team = prompt("What club team does this footballer currently play for?");
  team = team.toLowerCase().trim().replace("paris saint-germain");
  if (team === "psg") {
    alert("Of course you knew this one!💪🏼");
  } else {
    alert(
      "Nope! Messi now plays for PSG, he transfered her in 2021 after playing for Barcelona for 21 years!⚽️ "
    );
  }
  let awards = prompt(
    "True or false. Messi has won the most ever Ballot D'Or awards."
  );
  awards = awards.toLowerCase().trim();
  if (awards === "true") {
    alert("Correct! Messi has won a total of 7 Ballot D'Or awards!🏆");
  } else {
    alert(
      "Incorrect! How could you ever doubt Messi to have won the most Ballot D'Or awards! Messi has won a total of 7!🏆"
    );
  }
  let foot = prompt("Is Messi naturally left or right footed?");
  foot = foot.toLowerCase().trim();
  if (foot === "left") {
    alert("Correct! I can see you know Messi well!😁");
  } else {
    alert(
      "Incorrect. Messi is naturally left footed, though he can play with both!⚽️"
    );
  }
}

let footballerName1 = document.getElementById("messi");
footballerName1.addEventListener("click", nameFootballer1);

function nameFootballer2() {
  let name = prompt("What is the name of this footballer?");
  name = name.toLowerCase().trim().replace("cristiano ronaldo", "ronaldo");
  if (name === "ronaldo") {
    alert("Woohooo! We all know this guy!😁 ");
  } else {
    alert(
      "Nope!👎🏼 This is Cristiano Ronaldo, only one of the greatest players in the world!!⚽️"
    );
  }
  let clubTeam = prompt("What club team did Ronaldo play for in 2021/2022?");
  clubTeam = clubTeam
    .toLowerCase()
    .trim()
    .replace("man united", "manchester united");
  if (clubTeam === "manchester united") {
    alert("Of course you knew this one!🔴⚽️🔴");
  } else {
    alert("Not quite! In 2021 Ronaldo returned to Manchester United🔴⚽️!");
  }

  let italianClub = prompt("What Italian club team has Ronaldo played for?");
  italianClub = italianClub.toLowerCase().trim();
  if (italianClub === "juventus") {
    alert("That's right, from 2018-2021!🤍🖤");
  } else {
    alert("Not quite. He joined Juventus in 2018!👋🏼");
  }
  let hattrick = prompt(
    "True or false. Ronaldo has only scored two hat-trick in his career at Manchester United."
  );
  hattrick = hattrick.toLowerCase().trim();
  if (hattrick === "true") {
    alert(
      "Correct! Ronaldo has scored two hat-tricks for Manchester United😱. First in 2008 against Newcastle United, and then again in 2022 agaist Tottemham Hotsput FC. Quite a wait!⏳  "
    );
  } else {
    alert(
      "Incorrect! Ronaldo has only scored two hat-tricks for Manchester United!😱 Shocker! Tell me about it!!🤯"
    );
  }
}

let footballerName2 = document.getElementById("ronaldo");
footballerName2.addEventListener("click", nameFootballer2);

function nameFootballer3() {
  let name = prompt("What is the name of this footballer?");
  name = name.toLowerCase().trim();
  if (name === "neymar") {
    alert("Woohoo, thats right😁💛 ");
  } else {
    alert("Not quite! Let me introduce you to the greatest, Neymar!⚽️");
  }
  let team2 = prompt("What club team does this footballer play for?");
  team2 = team2.toLowerCase().trim();
  if (team2 === "psg") {
    alert("Of course you knew this one!💙❤️");
  } else {
    alert("Nope! Neymar is one of the greatest players at PSG!💙");
  }
  let position = prompt("Is this player an attacker or a defender?");
  position = position.toLowerCase().trim();
  if (position === "attacker") {
    alert("He is! and one of the best too!!😁");
  } else {
    alert("Though he is a great defender, Neymar is known as an attacker!🤩");
  }
}

let footballerName3 = document.getElementById("neymar");
footballerName3.addEventListener("click", nameFootballer3);

function nameFootballer4() {
  let name = prompt("What is the name of this footballer?");
  name = name.toLowerCase().trim().replace("de bruyne", "debruyne");
  if (name === "debruyne") {
    alert("Woohoo, thats right! 😁🤩");
  } else {
    alert(
      "Nope. This is Kevin De Bruyne, one of the greatest midfielders in the world!🙏🏼"
    );
  }
  let team = prompt("What club team does this footballer play for?");
  team = team
    .toLowerCase()
    .trim()
    .replace("manchester city", "manchester", "mancity", "man city");
  if (team === "man city") {
    alert("Of course you knew this one!💙");
  } else {
    alert("Incorrect. He plays for Man city!💙");
  }
  let join = prompt("What year did De Bruyne join Man City?");
  join = join.toLowerCase().trim().replace("2015", "in 2015");
  if (join === "in 2015") {
    alert("That's right! You're doing great at this!😁");
  } else {
    alert("Incorrect. De Bruyne joined Man City in 2015!");
  }
}

let footballerName4 = document.getElementById("debruyne");
footballerName4.addEventListener("click", nameFootballer4);

function nameFootballer5() {
  let name = prompt("What is the name of this footballer?");
  name = name.toLowerCase().trim();
  if (name === "mbappe") {
    alert("Yessss it is!😁 One of the greatest footballers in the world!🤩 ");
  } else {
    alert("No! Though you would know this one!😲 His name is Mbappe!");
  }
  let team = prompt("What club team does this footballer play for?");
  team = team.toLowerCase().trim();
  if (team === "psg") {
    alert("Of course you knew this one!💪🏼");
  } else {
    alert("Nope! Mbappe plays for PSG. He joined them in 2018!⚽️");
  }
  let trophy = prompt(
    "Which trophy has Mbappe won? A. Fifa World Cup B. UEFA EURO. (Select A or B). "
  );
  trophy = trophy.toLowerCase().trim();
  if (trophy === "a") {
    alert(
      "That's correct! In 2018, at the age of 18, Mbappe helped France to win the World Cup final against Croatia!🏆🤩"
    );
  } else {
    alert(
      "Incorrect! In 2018, France beat Croatia in the final and took home the trophy!🏆"
    );
  }
  let amount = prompt("How many goals did Mbappe score in the World Cup 2022?");
  amount = amount.trim();
  if (amount === "8") {
    alert(
      "Thats right! Mbappe scored 8 goals, leading him to win the Golden Boot award!!🏆 "
    );
  } else {
    alert(
      "Nope! Mbappe scored 8 goals!😳 This also led him to being awarded the Golden boot! Well deserved!💙"
    );
  }
}

let footballerName5 = document.getElementById("mbappe");
footballerName5.addEventListener("click", nameFootballer5);

function nameFootballer6() {
  let name = prompt("What is the name of this footballer?");
  name = name.toLowerCase().trim();
  if (name === "bellingham") {
    alert("Woohoo, thats right 😁 ");
  } else {
    alert(
      "Nope! This is Jude Bellingham. This was his first World Cup for England at the age of 19! 👶🏽❤️"
    );
  }
  let team = prompt("What club team does this footballer play for?");
  team = team.toLowerCase().trim().replace("borussia dortmund", "dortmund");
  if (team === "dortmund") {
    alert("Thats right! Woohoo 😜");
  } else {
    alert(
      "Incorrect. He plays for Borussia Dortmund, one of the greatest teams in Germany🇩🇪!"
    );
  }
  let goals = prompt(
    "How many goals did Bellingham for England in the World Cup 2022?"
  );
  goals = goals.trim();
  if (goals === "1") {
    alert(
      "Correct! He scored a banger in England's first knockout game vs Senagal!🤩🤪"
    );
  } else {
    alert(
      "Wrong! Bellingham scored 1 goal in this World Cup ⚽️. Bellingham scored an amazing goal against Senagal in England's first knockout game!😅"
    );
  }
}

let footballerName6 = document.getElementById("bellingham");
footballerName6.addEventListener("click", nameFootballer6);

function nameFootballer7() {
  let name = prompt("What is the name of this footballer?");
  name = name.toLowerCase().trim().replace("harry kane", "kane");
  if (name === "kane") {
    alert(
      "Woohoo, thats right 😁. Kane is also the captain of England's football team!😎"
    );
  } else {
    alert(
      "Nope, you should've definitely known this answer! This is Harry Kane, the captain of England 😎!"
    );
  }
  let team = prompt("What club team does this footballer play for?");
  team = team.toLowerCase().trim().replace("spurs", "tottenham");
  if (team === "tottenham") {
    alert("Correct!! Kane joined Tottenham in 2009👴🏼");
  } else {
    alert("Nope! The correct answer is Tottemham Hotspur!⚽️🤍");
  }
  let penalties = prompt(
    "How many penalities did Kane take in the World Cup 2022 quarter final against France?"
  );
  penalties = penalties.toLowerCase().trim();
  if (penalties === "2") {
    alert(
      "That's right😁. Deservingly, England were awarded two penalties. One in the 54th minute, and another in the 84th minute!⚽️ "
    );
  } else {
    alert("Nope 👎🏼. England had two penalties in their quarter final game.");
  }
  let miss = prompt("Did Kane score both penalties?");
  miss = miss.toLowerCase().trim();
  if (miss === "yes") {
    alert("No, Unfortunatly he did not 😢.");
  } else {
    alert("Unfortunately, that is correct 😢.");
  }
}

let footballerName7 = document.getElementById("kane");
footballerName7.addEventListener("click", nameFootballer7);

function nameFootballer8() {
  let name = prompt("What is the name of this footballer?");
  name = name.toLowerCase().trim();
  if (name === "griezmann") {
    alert("Woohoo, thats right!! 😁👋🏼");
  } else {
    alert("That's not right! He is called Antoine Griezmann⚽️👋🏼");
  }
  let team = prompt("What club team does this footballer play for?");
  team = team
    .toLowerCase()
    .trim()
    .replace("athletico madrid", "atletico madrid");
  if (team === "atletico madrid") {
    alert("Of course you knew this one!😁 You're doing great!");
  } else {
    alert("Nope! He plays as a forward for Atletico Madrid!⚽️");
  }
  let assists = prompt(
    "True or false. Griezmann has created the most chances among all World Cup Players."
  );
  assists = assists.toLowerCase().trim();
  if (assists === "true") {
    alert("Thats right!😍 Griezmann created 21 chances for France!🤯");
  } else {
    alert(
      "Incorrect!😲 Griezmann created a total of 21 chances for France, exceeding any other World Cup player!🆒🤯"
    );
  }
}

let footballerName8 = document.getElementById("griezmann");
footballerName8.addEventListener("click", nameFootballer8);

function nameFootballer9() {
  let name = prompt("What is the name of this footballer?");
  name = name.toLowerCase().trim().replace("bensema", "benzema");
  if (name === "benzema") {
    alert("That's right! Of course you knew this one!😁 ");
  } else {
    alert("Nope! This is Karim Benzema, one of the greatest!🤩");
  }
  let team = prompt("What team does this footballer play for?");
  team = team.toLowerCase().trim();
  if (team === "real madrid") {
    alert("That's right! You've doing great!");
  } else {
    alert(
      "Incorrect. Benzema plays for Real Madrid, and he has for a very long time now!🕥"
    );
  }
  let year = prompt("What year did Benzema win his first Ballon D'Or award?");
  year = year.trim();
  if (year === "2022") {
    alert(
      "That's right! In October 2022, Karim Benzema was crowned king of football!🤴🏽"
    );
  } else {
    alert(
      "No, it was only very recently in fact 😳. Benzema was awarded the Ballon D'or award in October 2022!🏆"
    );
  }
  let join = prompt("What year did Benzema join Real Madrid?");
  join = join.trim();
  if (join === "2009") {
    alert(
      "That is correct! Cool fact - Bensema is Real Madrid's all-time second-highest goal scorer, and top assist provider!🆒🤩 "
    );
  } else {
    alert("Incorrect. Benzema joined Real Madrid in 2009 😁.");
  }
}

let footballerName9 = document.getElementById("benzema");
footballerName9.addEventListener("click", nameFootballer9);

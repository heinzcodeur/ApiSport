// URL de l'API
const apiUrl = "https://allsportsapi2.p.rapidapi.com/api/matches/22/4/2023";

// En-têtes de la requête
const headers = {
  "X-RapidAPI-Key": "50736dc75amsh7f9e578a03cb22ap1ea0e4jsn338832cda913"
};

// Effectuer une requête GET à l'API
fetch(apiUrl, { headers })
  .then(response => response.json())
  .then(data => {
    // Traiter les données
    const matches = data.results;

    // Filtrer les correspondances avec "tottenham-hotspur"
    const filteredMatches = matches.filter(match => {
      const homeTeam = match.home_team.toLowerCase();
      const awayTeam = match.away_team.toLowerCase();
      return homeTeam.includes("tottenham-hotspur") || awayTeam.includes("tottenham-hotspur");
    });

    // Faire quelque chose avec les correspondances filtrées
    console.log(filteredMatches);
  })
  .catch(error => {
    console.error("Une erreur s'est produite :", error);
  });

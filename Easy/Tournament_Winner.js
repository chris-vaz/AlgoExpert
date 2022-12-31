// Tournament Winner Algo

// There's an algorithm tournament taking place in which teams of programmers compete against each other to solve algorithmic problems as a fast as possible. Teams compete in a round robin, where each team faces off against all other teams. Only two teams compete against each other at a time. and for each competition, one team is designed the home team while the other team is the away team. In each competition there's always one winner and one loser. There are no ties. A team recieves 3 points if it wins and 0 points if it loses. The winner of the tournament is the team that recieves the most amount of points. 

// Given an array of pairs representing the teams that have competed against each other and an array containing the results of each competition, write a function that returns teh winner of the tournament. The input arrays are named "competitions" and "results" respectively. The competitions array has elements in teh form of [homeTeam, manyTeam], where each team is a string of at most 30 characters representing the name of the team. The results array contains the information about the winner of each corresponding competition in the competition array

// Specifically results[1] denotes the winner of competitions[1]

//where 1 in the results array means that the home team in the corresponding competition won and a 0 means that the away team won

// It's guaranteed that exactly one team will win the tournament
// and that each team will compete against all other teams exactly once. It's also guaranteed that the tournament will always have at least two teams

//Sample Input
competitions = [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"],
]
results = [0, 0, 1]

// Sample Output - 
// "Python"
function tournamentWinner(competitions, results) {
    let winner = { score: 0, name: '' };
    const scoreMap = {};

    for (let i = 0; i < competitions.length; i++) {
        let homeTeam = competitions[i][0];
        let awayTeam = competitions[i][1];

        if (results[i] == 0) {
            scoreMap[awayTeam] = (scoreMap[awayTeam] || 0) + 3;
        }
        else {
            scoreMap[homeTeam] = (scoreMap[homeTeam] || 0) + 3;
        }

        if (scoreMap[awayTeam] >= winner.score) {
            winner = { score: scoreMap[awayTeam], name: awayTeam };
        } else if (scoreMap[homeTeam] >= winner.score) {
            winner = { score: scoreMap[homeTeam], name: homeTeam };
        }
    }
    return winner.name;
}


console.log(tournamentWinner(competitions, results));

competitions2= [
    ["HTML", "Java"],
    ["Java", "Python"],
    ["Python", "HTML"],
    ["C#", "Python"],
    ["Java", "C#"],
    ["C#", "HTML"]
],
results2 = [0, 1, 1, 1, 0, 1]
console.log(tournamentWinner(competitions2, results2));
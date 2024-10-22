window.onload = function() {
    const playersScores = JSON.parse(localStorage.getItem('playersScores')) || [];
    const scoreTable = document.getElementById('score-table');

    playersScores.forEach(player => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${player.name}</td><td>${player.score}</td>`;
        scoreTable.appendChild(row);
    });
};
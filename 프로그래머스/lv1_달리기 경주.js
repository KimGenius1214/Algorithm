function solution(players, callings) {
  const position = {};
  for (let i = 0; i < players.length; i++) {
    position[players[i]] = i;
  }

  for (let i = 0; i < callings.length; i++) {
    const curPlayer = callings[i];
    const curPosition = position[curPlayer];
    const nextPosition = curPosition - 1;

    if (nextPosition >= 0) {
      const nextPlayer = players[nextPosition];
      players[nextPosition] = curPlayer;
      players[curPosition] = nextPlayer;
      position[curPlayer] = nextPosition;
      position[nextPlayer] = curPosition;
    }
  }

  return players;
}

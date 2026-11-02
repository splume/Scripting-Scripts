/* 2048 rules; adapted for Scripting. No JSBox runtime required. */
(function(root) {
  function slide(board, direction) {
    const next = board.slice();
    let score = 0;
    for (let lane = 0; lane < 4; lane++) {
      const ids = Array.from({length: 4}, (_, k) => direction === 'left' ? lane*4+k : direction === 'right' ? lane*4+3-k : direction === 'up' ? k*4+lane : (3-k)*4+lane);
      const values = ids.map(i => board[i]).filter(Boolean);
      const merged = [];
      for (let i=0; i<values.length; i++) {
        if (i+1<values.length && values[i]===values[i+1]) {
          const value = values[i]*2;
          merged.push(value); score += value; i++;
        } else merged.push(values[i]);
      }
      ids.forEach((id, k) => next[id] = merged[k] || 0);
    }
    return {board: next, score, changed: next.some((v,i) => v !== board[i])};
  }
  function canMove(board) {
    return board.some(v => !v) || ['left','right','up','down'].some(d => slide(board,d).changed);
  }
  function spawn(board) {
    const empty = board.map((v,i) => v ? -1 : i).filter(i => i>=0);
    if (!empty.length) return -1;
    const id = empty[Math.floor(Math.random()*empty.length)];
    // Preserve the linked JSBox version's equal probability of 2 and 4.
    board[id] = Math.random() < 0.5 ? 2 : 4;
    return id;
  }
  const engine = {slide, canMove, spawn};
  if (typeof module !== 'undefined') module.exports = engine;
  root.Game2048 = engine;
})(typeof window !== 'undefined' ? window : globalThis);

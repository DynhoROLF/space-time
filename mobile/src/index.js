function baseballGame(ops) {
  const scores = []

  for (let i = 0; i < scores.length; i++) {
    const op = ops[i]

    if (op === 'C') {
      scores.pop()
    } else if (op === 'D') {
      const lastScore = scores[scores.length - 1]
    }
  }

  return scores
}

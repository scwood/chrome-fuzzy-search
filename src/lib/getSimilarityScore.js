const SCORE = {
  MATCH: 2,
  GAP: -1,
  FIRST_CHAR_MULTIPLIER: 2,
}

const getSimilarityScore = (a, b) => {
  a = a.toLowerCase()
  b = b.toLowerCase()
  if (a.length > b.length) {
    const temp = a
    a = b
    b = temp
  }
  if (!isPartialMatch(a, b)) {
    return 0
  }
  return getMaxSmithWatermanScore(a, b)
}

const isPartialMatch = (a, b) => {
  let i = 0
  for (let j = 0; j < b.length; j++) {
    if (b.charAt(j) === a.charAt(i)) {
      i++
    }
    if (i === a.length) {
      return true
    }
  }
  return false
}

const getMaxSmithWatermanScore = (a, b) => {
  let globalMax = 0
  const table = initializeTable(a, b)
  for (let i = 1; i < a.length + 1; i++) {
    for (let j = 1; j < b.length + 1; j++) {
      const isMatch = a.charAt(i - 1) === b.charAt(j - 1)
      const diagonal =
        (isMatch ? SCORE.MATCH : -SCORE.MATCH) + table[i - 1][j - 1]
      const up = SCORE.GAP + table[i][j - 1]
      const left = SCORE.GAP + table[i - 1][j]
      let localMax = Math.max(diagonal, up, left, 0)
      if (isMatch && i === 1 && j === 1) {
        localMax *= SCORE.FIRST_CHAR_MULTIPLIER
      }
      table[i][j] = localMax
      globalMax = Math.max(globalMax, localMax)
    }
  }
  return globalMax
}

const initializeTable = (a, b) => {
  const table = []
  for (let i = 0; i < a.length + 1; i++) {
    table.push([])
    for (let j = 0; j < b.length + 1; j++) {
      table[i].push(0)
    }
  }
  return table
}

export default getSimilarityScore

import getSimilarityScore from './getSimilarityScore'

test('shorter word that is not subset of larger word scores zero', () => {
  const testCases = [
    ['a', 'z'],
    ['a', ''],
    ['abc', 'xyz'],
    ['abcd', 'cab'],
    ['abdef', 'abcd'],
  ]
  for (const [a, b] of testCases) {
    expect(getSimilarityScore(a, b)).toBe(0)
  }
})

test('Modified Smith Waterman Alogorithm gives desired results', () => {
  const testCases = [
    ['abcdef', 'abcdef', 14],
    ['gmail', 'https://mail.google.com/mail/u/0/', 8],
    ['mail', 'mail.google.com/mail/u/0/', 10],
    ['AGGTTGCA', 'AGGTCA', 12],
  ]
  for (const [a, b, score] of testCases) {
    expect(getSimilarityScore(a, b)).toBe(score)
  }
})

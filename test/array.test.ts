import '../lib/array'

test('random items', () => {
	expect([1, 2, 3].random()).toBeGreaterThanOrEqual(1)
	expect([1, 2, 3].random()).toBeLessThanOrEqual(3)
})

test('to sentence', () => {
	expect(['words', 'words', 'more words'].toSentence()).toBe('words, words and more words')
})

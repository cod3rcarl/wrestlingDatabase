import champions from '../../champions.js'
import { wweChampions } from '../../seeds.js'

jest.mock('../../champions.js', () => jest.fn())

describe('champions', () => {
  it('should fail', () => {
    champions.mockImplementation(() => {
      return `Drew McIntryre`
    })
  }),
    expect(champions({ currentChampion: true })).toBe(
      wweChampions.find((champion) => champion.currentChampion === true)
    )
})

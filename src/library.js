import fantasy from './data/fantasy.json'
import horror from './data/horror.json'
import history from './data/history.json'
import romance from './data/romance.json'
import scifi from './data/scifi.json'

export const library = [fantasy, horror, history, romance, scifi]
  .flat()
  .reduce(
    (acc, cur) =>
      acc.some((book) => book.asin === cur.asin) ? acc : [...acc, cur],
    []
  )

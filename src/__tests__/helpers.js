import { gql } from 'apollo-server-express'

const championsAST = gql`
  query GetChampions(
    $titleHolder: [String]!
    $filter: ChampionFilterInput
    $skip: Int
    $orderBy: ChampionOrderByInput
    $take: Int
    ) {
      champions(
        $titleHolder: [String]!
        $filter:ChampionFilterInput
        $skip: Int
        $orderBy: ChampionOrderByInput
        $take: Int
    ) {
        titleHolder
        dateWon
        dateLost
        show
        previousChampion
        currentChampion
      }
    }
`
export { championsAST }

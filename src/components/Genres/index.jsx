import * as C from './styles'

export function Genres({ genres }) {
  return (
    <C.Container>
      {genres &&
        genres.map((genre) => <span key={genre.id}>{genre.name}</span>)}
    </C.Container>
  )
}

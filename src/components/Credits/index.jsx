import { getImages } from '../../utils/getImages'
import * as C from './styles'

export function Credits({ credits }) {
  return (
    <>
      <C.Title>Créditos</C.Title>
      {credits && (
        <C.Container>
          {credits.slice(0, 5).map((actors) => (
            <div key={actors.id}>
              <img src={getImages(actors.profile_path)} />
              <p>{actors.name}</p>
            </div>
          ))}
        </C.Container>
      )}
    </>
  )
}

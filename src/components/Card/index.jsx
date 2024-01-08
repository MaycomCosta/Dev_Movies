import defaultImage from '../../assets/blur.png'
import { getImages } from '../../utils/getImages'
import * as C from './styles'

export function Card({ item }) {
  const imagePath = item.poster_path || item.profile_path
  const imageUrl = imagePath ? getImages(imagePath) : defaultImage

  return (
    <C.Container>
      <img
        src={imageUrl}
        alt={item.title || item.name}
        onError={(e) => {
          e.target.onerror = null
          e.target.src = defaultImage
        }}
      />
      <h3>{item.title || item.name}</h3>
    </C.Container>
  )
}

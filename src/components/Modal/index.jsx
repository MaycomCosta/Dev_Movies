import { useEffect, useState } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'

import { getMovie } from '../../services/getAllData'
import * as C from './styles'

export function Modal({ movieId, setShowModal }) {
  const [movie, setMovie] = useState()

  useEffect(() => {
    async function getMovies() {
      setMovie(await getMovie(movieId))
    }

    getMovies()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    console.log(movie)
  }, [movie])

  return (
    <C.Background onClick={() => setShowModal(false)}>
      {movie && (
        <C.Container>
          <button className="closeButton" onClick={() => setShowModal(false)}>
            <AiOutlineCloseCircle />
          </button>
          <iframe
            src={`https://youtube.com/embed/${movie.key}`}
            title="Youtube Video Player"
            height="500px"
            width="100%"
          >
            {}
          </iframe>
        </C.Container>
      )}
    </C.Background>
  )
}

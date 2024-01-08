import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Credits, Genres, Slider } from '../../components'
import {
  getMovieVideos,
  getMovieCredits,
  getMovieSimilar,
  getMovieDetails
} from '../../services/getAllData'
import { getImages } from '../../utils/getImages'
import * as C from './styles'

export function Detail() {
  const [movieVideos, setMovieVideos] = useState()
  const [movieCredits, setMovieCredits] = useState()
  const [movieSimilar, setMovieSimilar] = useState()
  const [movieDetails, setMovieDetails] = useState()
  const { id } = useParams()
  useEffect(() => {
    Promise.all([
      getMovieVideos(id),
      getMovieCredits(id),
      getMovieSimilar(id),
      getMovieDetails(id)
    ])
      .then(([movies, credits, similar, details]) => {
        setMovieVideos(movies)
        setMovieCredits(credits)
        setMovieSimilar(similar)
        setMovieDetails(details)
      })
      .catch((err) => console.error(err))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      {movieDetails && (
        <>
          <C.Background
            image={getImages(movieDetails.backdrop_path)}
          ></C.Background>
          <C.Container>
            <C.Poster>
              <img src={getImages(movieDetails.poster_path)} alt="" />
            </C.Poster>
            <C.Info>
              <h2>{movieDetails.title}</h2>
              <Genres genres={movieDetails.genres} />
              <p>{movieDetails.overview}</p>
              <Credits credits={movieCredits} />
            </C.Info>
          </C.Container>
          <C.ContainerTrailers>
            {movieVideos &&
              movieVideos.map((trailer) => (
                <div key={trailer.id}>
                  <h4>{trailer.name}</h4>
                  <iframe
                    src={`https://youtube.com/embed/${trailer.key}`}
                    title="Youtube Video Player"
                    height="500px"
                    width="100%"
                  >
                    {}
                  </iframe>
                </div>
              ))}
          </C.ContainerTrailers>
          {movieSimilar && (
            <Slider info={movieSimilar} title={'Filmes Recomendados'} />
          )}
        </>
      )}
    </>
  )
}

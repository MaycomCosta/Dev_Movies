import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button, Modal, Slider } from '../../components'
import {
  getMovies,
  getPopularSeries,
  getTopMovies,
  getTopSeries,
  getTrendingPeople
} from '../../services/getAllData'
import { getImages } from '../../utils/getImages'
import * as C from './styles'

export function Home() {
  const [showModal, setShowModal] = useState(false)

  const [movie, setMovie] = useState()
  const [topMovies, setTopMovies] = useState()
  const [topSeries, setTopSeries] = useState()
  const [popularSeries, setPopularSeries] = useState()
  const [trendingPeople, setTrendingPeople] = useState()

  const navigate = useNavigate()

  useEffect(() => {
    Promise.all([
      getMovies(),
      getTopMovies(),
      getTopSeries(),
      getPopularSeries(),
      getTrendingPeople()
    ])
      .then(([movies, topMovies, topSeries, popularSeries, trendingPeople]) => {
        setMovie(movies)
        setTopMovies(topMovies)
        setTopSeries(topSeries)
        setPopularSeries(popularSeries)
        setTrendingPeople(trendingPeople)
      })
      .catch((err) => console.error(err))
  }, [])

  return (
    <>
      {movie && (
        <C.Background $img={getImages(movie.backdrop_path)} alt="capa do filme">
          <C.Container>
            {showModal && (
              <Modal movieId={movie.id} setShowModal={setShowModal} />
            )}
            <C.InfoMovie>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
              <C.ContainerButton>
                <Button
                  red={true}
                  onClick={() => navigate(`/detalhe/${movie.id}`)}
                >
                  Assistir agora
                </Button>
                <Button red={false} onClick={() => setShowModal(true)}>
                  Assistir o trailer
                </Button>
              </C.ContainerButton>
            </C.InfoMovie>
            <C.PosterMovie>
              <img src={getImages(movie.poster_path)} alt="poster do filme" />
            </C.PosterMovie>
          </C.Container>
        </C.Background>
      )}
      {topMovies && <Slider info={topMovies} title={'Top Filmes'} />}
      {topSeries && <Slider info={topSeries} title={'Top Séries'} />}
      {popularSeries && (
        <Slider info={popularSeries} title={'Séries Populares'} />
      )}
      {trendingPeople && (
        <Slider info={trendingPeople} title={'Nomes do momento'} />
      )}
    </>
  )
}

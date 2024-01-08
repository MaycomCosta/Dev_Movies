import { Swiper, SwiperSlide } from 'swiper/react'

import { Card } from '../Card'
import * as C from './styles'

export function Slider({ info, title }) {
  return (
    <C.Container>
      <h2>{title}</h2>
      <Swiper
        grabCursor
        spaceBetween={10}
        slidesPerView={'auto'}
        className="swiper"
      >
        {info.map((item, index) => (
          <SwiperSlide key={index}>
            <Card item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </C.Container>
  )
}

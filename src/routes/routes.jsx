import { Routes, Route } from 'react-router-dom'

import { Home, Movies, Series, Detail } from '../containers/'
import DefaultLayout from '../layout/defaultLayout'

function Router() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/filmes" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/detalhe/:id" element={<Detail />} />
      </Route>
    </Routes>
  )
}

export default Router

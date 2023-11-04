import { Layout } from './components/index'
import { Routes, Route } from 'react-router-dom'
import { route } from './models/route.model'
import { Address, Create, Checkout, Detail, Final, Home, Login, SignUp } from './pages/index'
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute'
import { ProfileLayout } from './components/index'

function App() {

  return (
    <>
      <Layout>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path={ route.checkout.path } element={<Checkout />} />
            <Route path={ route.final.path } element={<Final />} />
            <Route path={ route.address.path } element={<Address />} />
            <Route path={ route.product.create.path } element={<Create />} />
            <Route path={ route.profile.path } element={<ProfileLayout />} />
          </Route>
          <Route path={ route.signup.path } element={<SignUp />} />
          <Route path={ route.root.path } element={<Home />} />
          <Route path={ route.login.path } element={<Login />} />
          <Route path={`${route.product.productDetail.path}/:id`} element={<Detail />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App

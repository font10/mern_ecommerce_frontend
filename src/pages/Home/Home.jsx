import { useEffect ,useState } from 'react'
import { List } from '../../components/index'
import axios from 'axios'

export const Home = () => {
  const [products, setProducts] = useState([])
  const [error, setError] = useState(false)

  const fetchProducts = async() => {
    try {
      const { data, status } = await axios.get(`http://localhost:5000/product`)
      console.log(data.products)
      
      if(status === 200) setProducts(data.products)
    } catch (err) {
      setError(err.message)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div>
      { products && <List products={products ? products : [] }  /> }
      { error && <h1>No products or server is not responding</h1> }
    </div>
  )
}


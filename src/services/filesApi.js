import axios from 'axios'

export const uploadImages = async(token, formData) => {
  const { data } = await axios.post(`https://mern-ecommerce-api-b2jl.onrender.com/files/uploadImages`, formData, { headers: {
    'Content-Type': 'multipart/form-data',
    'Authorization': `Bearer ${token}`
  }})

  return data
}
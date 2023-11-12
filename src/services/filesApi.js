import axios from 'axios'

export const uploadImages = async(token, formData) => {
  const { data } = await axios.post(`http://localhost:5000/files/uploadImages`, formData, { headers: {
    'Content-Type': 'multipart/form-data',
    'Authorization': `Bearer ${token}`
  }})

  return data
}
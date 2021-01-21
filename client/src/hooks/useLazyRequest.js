import React, { useState } from 'react'

const useLazyRequest = (url) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState(null)

  const get = async (body) => {
    try {
      setLoading(true)
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          ...body
        }
      })
      if (response.ok) {
        const json = await response.json()
        setData(json)
      }
      setLoading(false)
    } catch (e) {
      console.log(e)
      setErrors(e)
    }
  }

  return { get, data, loading, errors }
}

export default useLazyRequest
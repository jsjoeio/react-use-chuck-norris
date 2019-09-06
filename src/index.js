import React, { useState, useEffect } from 'react'

export function useChuckNorris() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(undefined)
  const [data, setData] = useState(undefined)

  useEffect(() => {
    async function getJoke() {
      setLoading(true)
      const response = await fetch('https://api.chucknorris.io/jokes/random')
      const { value } = await response.json().catch(error => setError(error))
      setLoading(false)
      setData(value)
    }
    getJoke()
  }, [])
  return { data, loading, error }
}

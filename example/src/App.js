import React from 'react'
import { useChuckNorris } from '@jsjoeio/react-use-chuck-norris'

const App = () => {
  const { data, loading } = useChuckNorris()

  if (loading) return <p>Loading...</p>

  if (data) return <p>{data}</p>

  return null
}
export default App
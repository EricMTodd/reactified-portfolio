import { Routes, Route } from 'react-router-dom'
import Home from './Home'

const Main = () => {
  const style = {
    backgroundColor: 'gray',
    height: 'calc(100vh - 75px',
    padding: '0 16.5vw 0 16.5vw'
  }

  return(
    <main style={style}>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </main>
  )
}

export default Main
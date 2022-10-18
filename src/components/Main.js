import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Skills from './Skills'

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
        <Route path='/about' element={<About />} />
        <Route path='/skills' element={<Skills />} />
      </Routes>
    </main>
  )
}

export default Main
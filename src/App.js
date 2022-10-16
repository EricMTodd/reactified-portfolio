import Nav from './components/Nav'
import Main from './components/Main'
import Footer from './components/Footer'

const App = () => {
  const style = {
    fontFamily: 'fira sans',
    color: 'white'
  }

  return(
    <div id='app' style={style}>
      <Nav />
      <Main />
      <Footer />
    </div>
  )
}

export default App
import './App.css';
import Grid from './components/Grid'

const App = () => {

  return (
    <div className="App">
      <h1 class="header_text">Rochester, New York Parks</h1>
      <h2 class="description">
        Visit the links below to get information about parks
        in and around Rochester, New York!
      </h2>
      <Grid />
    </div>
  )
}

export default App

import './App.css';
import flagImage from "./assets/Flag_of_Rochester_NY_(2025).png"
import Grid from './components/Grid'

const App = () => {

  return (
    <div className="App">
      <img src={flagImage} class="flag_image" alt="Flag of the city of Rochester" />
      <h1 class="header_text">Rochester, New York Park Finder</h1>
      <h2 class="description">
        Visit the links below to locate parks
        in and around Rochester, New York!
      </h2>
      <Grid />
    </div>
  )
}

export default App

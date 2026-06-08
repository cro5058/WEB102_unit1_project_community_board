// Need to import GridElement for the grid to have grid elements
import GridElement from './GridElement'

// Create the arrow function that creates the grid
const Grid = () => {
  return (
    <table>
      <thead></thead>
      <tbody>
        <tr>
          <GridElement name="Cobb's Hill" coordinates="43.1285,-77.5410" />
          <GridElement name="Dr. Martin Luther King Jr. Memorial" coordinates="43.1336,-77.6112" />
          <GridElement name="Durand Eastman Beach" coordinates="43.2602,-77.6046" />
          <GridElement name="Genesee Gateway" coordinates="43.1188,-77.6460" />
        </tr>
        <tr>
          <GridElement name="Genesee Valley" coordinates="43.1226,-77.6125" />
          <GridElement name="Highland" coordinates="43.1289,-77.5521" />
          <GridElement name="Lunsford Circle" coordinates="43.1822,-77.6138" />
          <GridElement name="Maplewood" coordinates="43.1116,-77.5892" />
        </tr>
        <tr>
          <GridElement name="Ontario Beach" coordinates="43.1975,-77.6340" />
          <GridElement name="ROC City Skate" coordinates="43.1681,-77.6130" />
          <GridElement name="Susan B. Anthony Square" coordinates="43.1494,-77.6289" />
          <GridElement name="Turning Point" coordinates="43.1040,-77.6002" />
        </tr>
      </tbody>
    </table>
  )
}

// Make Grid importable elsewhere
export default Grid;
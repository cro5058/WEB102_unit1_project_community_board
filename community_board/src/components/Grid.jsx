// Need to import GridElement for the grid to have grid elements
import GridElement from './GridElement'

// Create the arrow function that creates the grid
const Grid = () => {
  return (
    <div className="Grid">
      <GridElement name="Cobb's Hill" 
                   description="A historic park containing the Cobbs Hill Reservoir." 
                   coordinates="43.1285,-77.5410" 
                   link="https://www.google.com/maps/search/Cobb's+Hill+Rochester+NY" />
      <GridElement name="Dr. Martin Luther King Jr. Memorial" 
                   description="A plaza in downtown Rochester honoring Dr. MLK Jr." 
                   coordinates="43.1336,-77.6112" 
                   link="https://www.google.com/maps/search/Dr.+Martin+Luther+King+Jr.+Memorial+Rochester+NY" />
      <GridElement name="Durand Eastman Beach" 
                   description="A scenic beach north of the city." 
                   coordinates="43.2602,-77.6046" 
                   link="https://www.google.com/maps/search/Durand+Eastman+Beach+Rochester+NY" />
      <GridElement name="Genesee Gateway" 
                   description="A park with a good view of the city." 
                   coordinates="43.1188,-77.6460" 
                   link="https://www.google.com/maps/search/Genesee+Gateway+Rochester+NY" />
      <GridElement name="Genesee Valley" 
                   description="A sprawling park designed by Frederick Law Olmsted." 
                   coordinates="43.1226,-77.6125" 
                   link="https://www.google.com/maps/search/Genesee+Valley+Park+Rochester+NY" />
      <GridElement name="Highland" 
                   description="A park containing the Highland Park Reservoir." 
                   coordinates="43.1289,-77.5521" 
                   link="https://www.google.com/maps/search/Highland+Park+Rochester+NY" />
      <GridElement name="Lunsford Circle" 
                   description="A small park in Corn Hill, named for an African-American physician."
                   coordinates="43.1822,-77.6138" 
                   link="https://www.google.com/maps/search/Lunsford+Circle+Rochester+NY" />
      <GridElement name="Maplewood" 
                   description="A park in the northwest of the city, with a rose garden."
                   coordinates="43.1116,-77.5892" 
                   link="https://www.google.com/maps/search/Maplewood+Park+Rochester+NY" />
      <GridElement name="Ontario Beach" 
                   description="A larger beach than Durand Eastman."
                   coordinates="43.1975,-77.6340" 
                   link="https://www.google.com/maps/search/Ontario+Beach+Rochester+NY" />
      <GridElement name="ROC City Skate" 
                   description="A vibrant skatepark in the city."
                   coordinates="43.1681,-77.6130" 
                   link="https://www.google.com/maps/search/ROC+City+Skate+Rochester+NY" />
      <GridElement name="Susan B. Anthony Square" 
                   description="A park close to the home of Susan B. Anthony."
                   coordinates="43.1494,-77.6289" 
                   link="https://www.google.com/maps/search/Susan+B.+Anthony+Square+Rochester+NY" />
      <GridElement name="Turning Point" 
                   description="A riverside park in the north of the city."
                   coordinates="43.1040,-77.6002" 
                   link="https://www.google.com/maps/search/Turning+Point+Rochester+NY" />
    </div>
  )
}

// Make Grid importable elsewhere
export default Grid;
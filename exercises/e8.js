import { data } from "../data/data";

// SPACE DATA EXERCISE 8
// Return a Planet name by a given moon name
// Return example: 'Planet Name'

export function findPlanetNameByMoon(data, moonName) {
  // Your code goes here...
  let arr = data.planets.map((planet) => {
    if (planet.moons != undefined) {
      let moon = planet.moons.find((moon) => moon === moonName)
      if (moon != undefined) {
      return planet.name;
      }
    }
  })
  .filter((planetName) => {
    return planetName != undefined;
  });
  return arr[0];
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function

/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  let yearArray = data.asteroids.map((asteroid) => asteroid.discoveryYear);
  let mostRepeats = 0;
  let i = 0;
  for (let yearIndex in yearArray) {
    let repeats = 0;
    for (let comparison of yearArray) {
      if (yearArray[yearIndex] === comparison) { repeats++; }
    }
    if (repeats > mostRepeats) { 
      mostRepeats = repeats;
      i = yearIndex;
    }
  }
  return yearArray[i];
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function

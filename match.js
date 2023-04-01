function matchHouses(step) {
    if (step <= 0) {
      return 0;
    } else {
      return (5 * step) + 1;
    }
  }
  console.log(matchHouses(1)); 
  console.log(matchHouses(4));       
  console.log(matchHouses(87));
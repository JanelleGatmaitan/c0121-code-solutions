fetch('https://pokeapi.co/api/v2/pokemon/squirtle')
  .then(res => res.json())
  .then(data => console.log('data:', data))

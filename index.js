const grid = document.getElementById('grid');

try {
    const request = await fetch("https://pokebuildapi.fr/api/v1/pokemon/limit/151");
    const pokemons = await request.json();

    // fetch("https://pokebuildapi.fr/api/v1/pokemon/limit/151")
    // .then(res => res.json())
    // .then(pokemons =>  {
    //     console.log(pokemons)
    // })
    console.log(pokemons);

    pokemons.forEach(pokemon => {
        grid.innerHTML += `
            <div>
                <h2>${pokemon.name}</h2>
                <img src="${pokemon.image}" />
            </div>
        `
    })
}
catch (e) {
    console.log(e)
}
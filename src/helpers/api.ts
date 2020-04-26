const Pokedex = require('pokedex-promise-v2');

const pokedex = new Pokedex({
    protocol: 'https',
    hostName: 'pokeapi.co',
    versionPath: '/api/v2/',
    cacheLimit: 100 * 1000,
    timeout: 5 * 1000,
});

export default pokedex;

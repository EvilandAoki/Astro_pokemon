

const getLocalStoragePokemons = () => {
    const pokemons = JSON.parse(localStorage.getItem('pokemons') ?? '[]')
}
export const PokemonFavorite = () => {
    return (
        <div class="grid grid-cols-2 sm:grid-cols-4">PokemonFavorite</div>
    )
}

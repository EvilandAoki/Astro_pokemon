import type { FavoritePokemon } from "@interfaces/favorite-pokemon"
import { For, createSignal } from "solid-js"
import { CardFavoritePokemon } from "./CardFavoritePokemon"

const getLocalStoragePokemons = (): FavoritePokemon[] => {
    const favoritePokemons = JSON.parse(localStorage.getItem('favorites') ?? '[]')
    return favoritePokemons
}
export const FavoritePokemons = () => {

    const [pokemons, setPokemons] = createSignal(getLocalStoragePokemons())

    return (
        <div class="grid grid-cols-2 sm:grid-cols-4">

            <For each={pokemons()}>
                {
                    (pokemon) => <CardFavoritePokemon pokemon={pokemon} />
                }
            </For>

        </div>
    )
}

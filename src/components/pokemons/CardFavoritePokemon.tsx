import type { FavoritePokemon } from "@interfaces/favorite-pokemon";
import { createSignal, Show, type Component } from "solid-js";


interface Props {
    pokemon: FavoritePokemon;
}

export const CardFavoritePokemon: Component<Props> = ({ pokemon }) => {

    const [isVisible, setIsVisible] = createSignal(true)

    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;

    const deleteFavoritePokemon = () => {
        const favorites = JSON.parse(localStorage.getItem('favorites') ?? '[]') as FavoritePokemon[];

        const newfavorites = favorites.filter(item => item.id != pokemon.id)

        localStorage.setItem("favorites", JSON.stringify(newfavorites));
        setIsVisible(false);
    }

    return (
        <Show when={isVisible()}>
            <div class='flex flex-col justify-center items-center'>
                <a href={`/pokemons/${pokemon.name}`}>
                    <img src={imageUrl} alt={pokemon.name} width="96" height="96"
                    />
                    <p class="capitalize"> #{pokemon.id} - {pokemon.name}</p>
                </a>
                <button
                    class="text-red-500"
                    onclick={deleteFavoritePokemon}
                > Delete
                </button>
            </div>
        </Show>
    );

}
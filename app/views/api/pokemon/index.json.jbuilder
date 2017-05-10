@pokemons.each do |pokemon|
  json.set! pokemon.id do
    json.extract! pokemon, :id, :name, :poke_type, :attack, :defense, :moves, :items
    json.image_url asset_path(pokemon.image_url)
  end
end

class Api::PokemonController < ApplicationController
  def index
    @pokemons = Pokemon.all.includes(:items)
    render :index
  end

  def show
    @pokemon = Pokemon.includes(:items).find(params[:id])
    render :show
  end
end

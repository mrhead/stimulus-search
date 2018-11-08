Rails.application.routes.draw do
  root to: "home#show"

  resources :people, only: :show
  resources :search, only: :index
end

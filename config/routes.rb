Rails.application.routes.draw do
  root to: "home#show"

  namespace :people do
    resource :search, only: :show
  end
end

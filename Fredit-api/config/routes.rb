Rails.application.routes.draw do
  post "/graphql", to: "graphql#execute"

  mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"

  resources :users, only: :create do
    collection do
      get :verify
      post :verify
      post :resend
    end
  end

  resources :credit_cards, only: [:create, :destroy]

  resources :loan_contracts, only: :create do
    member do
      post :accept
    end
  end
end

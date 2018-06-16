Rails.application.routes.draw do
  post "/graphql", to: "graphql#execute"

  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  end

  resources :users, only: :create do
    collection do
      get :verify
      post :verify
      post :resend
    end
  end
end

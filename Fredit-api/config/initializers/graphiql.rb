if Rails.env.development?
  # GraphiQL::Rails.config.headers['Authorization'] = -> (_ctx) {
  #   "bearer #{ENV['JWT_TOKEN']}"
  # }

  GraphiQL::Rails.config.headers['Authorization'] = -> (context) {
     "bearer #{context.cookies['_graphql_token']}" 
  }
end
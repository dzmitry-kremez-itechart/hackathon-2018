class Types::AuthenticateType < Types::BaseObject
  graphql_name 'Authenticate'

  field :token, String, null: false
  field :user, Types::UserType, null: false
end
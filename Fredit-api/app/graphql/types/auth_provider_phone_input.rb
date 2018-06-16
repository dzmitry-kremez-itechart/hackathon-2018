Types::AuthProviderPhoneInput = GraphQL::InputObjectType.define do
  name 'AUTH_PROVIDER_PHONE'

  argument :phone, !types.String
  argument :code, !types.String
end
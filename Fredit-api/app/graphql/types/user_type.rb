Types::UserType = GraphQL::ObjectType.define do
  name 'User'

  field :id, !types.ID
  field :phone, !types.String

  field :passport, !types[Types::PassportType] do
    preload :passport
    resolve -> (obj, args, ctx) { obj.passport }
  end
end
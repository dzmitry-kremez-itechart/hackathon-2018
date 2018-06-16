class Types::QueryType < Types::BaseObject
  field :user, !types[Types::UserType] do
    resolve -> (obj, args, ctx) {
      ctx[:current_user]
    }
  end
end

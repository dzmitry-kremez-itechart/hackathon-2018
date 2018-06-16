class Types::QueryType < Types::BaseObject
  field :user, Types::UserType, null: true 

  def user
    context[:current_user]
  end
end

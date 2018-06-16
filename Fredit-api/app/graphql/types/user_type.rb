class Types::UserType < Types::BaseObject
  field :id, ID, null: false
  field :phone, String, null: false

  field :passport, Types::PassportType, null: true
end

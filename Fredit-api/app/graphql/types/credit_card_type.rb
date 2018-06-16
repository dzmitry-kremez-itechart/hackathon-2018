class Types::CreditCardType < Types::BaseObject
  field :id, ID, null: false
  field :main_card, Boolean, null: false
  field :number, String, null: true
  field :expiration_date, String, null: true
  field :cvc, String, null: true
end
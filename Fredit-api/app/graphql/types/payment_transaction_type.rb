class Types::PaymentTransactionType < Types::BaseObject
  field :id, ID, null: false
  field :amount, Integer, null: false
  field :status, String, null: false
end
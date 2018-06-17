class Types::LoanContractType < Types::BaseObject
  field :id, ID, null: false
  field :start_date, String, null: true
  field :time_period, Integer, null: false
  field :time_period_type, Integer, null: false
  field :issued_amount, Integer, null: false
  field :return_amount, Integer, null: false
  field :request_status, String, null: false
  field :state, String, null: false
  field :description, String, null: true
  field :creditor, Types::UserType, null: false
  field :debtor, Types::UserType, null: false
  field :payment_transactions, [Types::PaymentTransactionType], null: true
end
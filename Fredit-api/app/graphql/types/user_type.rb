class Types::UserType < Types::BaseObject
  field :id, ID, null: false
  field :phone, String, null: false

  field :passport, Types::PassportType, null: true
  field :credit_cards, [Types::CreditCardType], null: true
  field :creditor_loan_contracts, [Types::LoanContractType], null: true
  field :debtor_loan_contracts, [Types::LoanContractType], null: true
end

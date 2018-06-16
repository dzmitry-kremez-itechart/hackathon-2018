class Types::QueryType < Types::BaseObject
  field :user, Types::UserType, null: true 
  def user
    context[:current_user]
  end

  field :issued_loan_contracts, [Types::LoanContractType], null: true do
    argument :limit, Integer, required: false
    argument :offset, Integer, required: false
  end
  def issued_loan_contracts(limit: 100, offset: 0)
    LoanContract.issued.order(created_at: :desc).offset(offset).limit(limit)
  end
end

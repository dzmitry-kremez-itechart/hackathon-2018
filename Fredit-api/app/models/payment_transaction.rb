class PaymentTransaction < ApplicationRecord
  belongs_to :loan_contract

  enum status: [:success, :failed]

  validates :loan_contract, presence: true
end

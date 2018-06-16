# == Schema Information
#
# Table name: payment_transactions
#
#  id               :integer          not null, primary key
#  loan_contract_id :integer          not null
#  amount           :integer          default(0), not null
#  status           :integer          default("success"), not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

class PaymentTransaction < ApplicationRecord
  belongs_to :loan_contract

  enum status: [:success, :failed]

  validates :loan_contract, presence: true
end

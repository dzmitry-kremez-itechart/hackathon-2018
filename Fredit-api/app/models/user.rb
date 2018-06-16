# == Schema Information
#
# Table name: users
#
#  id         :integer          not null, primary key
#  phone      :string
#  email      :string
#  status     :integer          default("debtor"), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  authy_id   :string
#  verified   :boolean          default(FALSE), not null
#

class User < ApplicationRecord
  has_one :passport
  has_many :credit_cards
  has_many :creditor_loan_contracts, foreign_key: :creditor_id, class_name: 'LoanContract'
  has_many :debtor_loan_contracts, foreign_key: :debtor_id, class_name: 'LoanContract'

  enum status: [:debtor, :creditor]

  validates :phone, presence: true, uniqueness: true
end

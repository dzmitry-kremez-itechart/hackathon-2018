# == Schema Information
#
# Table name: loan_contracts
#
#  id               :integer          not null, primary key
#  creditor_id      :integer
#  debtor_id        :integer
#  start_date       :datetime         not null
#  time_period      :integer          default(0), not null
#  time_period_type :integer          default("week"), not null
#  issued_amount    :integer          default(0), not null
#  return_amount    :integer          default(0), not null
#  request_status   :integer          default("issued"), not null
#  state            :integer          default("pending"), not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

class LoanContract < ApplicationRecord
  belongs_to :creditor, class_name: 'User', optional: true
  belongs_to :debtor, class_name: 'User'
  has_many :payment_transactions

  enum time_period_type: [:week, :month, :year]
  enum request_status: [:issued, :cancelled, :accepted]
  enum state: [:pending, :active, :failed, :completed]

  validates :issued_amount, numericality: { greater_than: 0 }
  validates_presence_of(
    :time_period,
    :time_period_type,
    :issued_amount,
    :return_amount,
    :debtor
  )
  validate :return_amount_more_than_issued
  validate :creditor_not_equals_to_debtor

  def payment_amount
    return_amount / time_period
  end

  private

  def creditor_not_equals_to_debtor
    if creditor_id == debtor_id
      errors.add(:base, 'Creditor cannot be debtor')
    end
  end

  def return_amount_more_than_issued
    if issued_amount > return_amount
      errors.add(:base, 'Return amount should be more than issued amount')
    end
  end
end

# == Schema Information
#
# Table name: credit_cards
#
#  id              :integer          not null, primary key
#  user_id         :integer
#  main_card       :boolean          not null
#  number          :string
#  expiration_date :date
#  cvc             :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class CreditCard < ApplicationRecord
  belongs_to :user

  before_validation :set_main_card

  validates :number, numericality: { only_integer: true }, length: { is: 16 }
  validates_presence_of :number, :expiration_date, :cvc, :user, :main_card

  private

  def set_main_card
    self.main_card = !user.credit_cards.exists?
  end
end

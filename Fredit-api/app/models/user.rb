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
#

class User < ApplicationRecord
  has_one :passport

  enum status: [:debtor, :creditor]

  validates :phone, presence: true
end

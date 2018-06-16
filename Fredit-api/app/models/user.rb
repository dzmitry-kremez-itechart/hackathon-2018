# == Schema Information
#
# Table name: users
#
#  id         :integer          not null, primary key
#  phone      :string
#  email      :string
#  status     :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class User < ApplicationRecord
  enum status: [:debtor, :creditor]

  validates :phone, presence: true
end

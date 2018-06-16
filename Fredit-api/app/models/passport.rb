# == Schema Information
#
# Table name: passports
#
#  id             :integer          not null, primary key
#  first_name     :string
#  last_name      :string
#  number         :string
#  identification :string
#  nationality    :string
#  place_of_birth :date
#  date_of_birth  :date
#  date_of_issue  :date
#  date_of_expire :date
#  user_id        :integer
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Passport < ApplicationRecord
  belongs_to :user

  validates :user, presence: true

  validates_presence_of(
    :first_name,
    :last_name,
    :number,
    :identification,
    :nationality,
    :place_of_birth,
    :date_of_birth,
    :date_of_issue,
    :date_of_expire
  )
end

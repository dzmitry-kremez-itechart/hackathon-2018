class ChangePassportPlaceOfBirth < ActiveRecord::Migration[5.2]
  def change
    change_column :passports, :place_of_birth, :string
  end
end

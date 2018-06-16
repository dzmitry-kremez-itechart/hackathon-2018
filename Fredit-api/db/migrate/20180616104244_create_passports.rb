class CreatePassports < ActiveRecord::Migration[5.2]
  def change
    create_table :passports do |t|
      t.string :first_name
      t.string :last_name

      t.string :number
      t.string :identification

      t.string :nationality

      t.date :place_of_birth
      t.date :date_of_birth
      t.date :date_of_issue
      t.date :date_of_expire

      t.integer :user_id
      
      t.timestamps
    end

    add_index :passports, :user_id
  end
end

class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :phone
      t.string :email
      t.integer :status, default: 0, null: false

      t.timestamps
    end

    add_index :users, :phone, unique: true
  end
end

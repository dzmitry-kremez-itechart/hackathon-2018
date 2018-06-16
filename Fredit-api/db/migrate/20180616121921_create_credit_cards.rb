class CreateCreditCards < ActiveRecord::Migration[5.2]
  def change
    create_table :credit_cards do |t|
      t.integer :user_id

      t.boolean :main_card, null: false

      t.string :number
      t.date :expiration_date
      t.integer :cvc

      t.timestamps
    end

    add_index :credit_cards, :user_id
  end
end

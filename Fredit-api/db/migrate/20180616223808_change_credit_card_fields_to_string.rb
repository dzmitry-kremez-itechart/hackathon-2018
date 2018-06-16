class ChangeCreditCardFieldsToString < ActiveRecord::Migration[5.2]
  def change
    change_column :credit_cards, :expiration_date, :string
    change_column :credit_cards, :cvc, :string
    change_column :credit_cards, :cvc, :string
  end
end

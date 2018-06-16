class CreatePaymentTransactions < ActiveRecord::Migration[5.2]
  def change
    create_table :payment_transactions do |t|
      t.integer :loan_contract_id, null: false

      t.integer :amount, default: 0, null: false
      t.integer :status, default: 0, null: false

      t.timestamps
    end
  end
end

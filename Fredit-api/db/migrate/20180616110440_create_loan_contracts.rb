class CreateLoanContracts < ActiveRecord::Migration[5.2]
  def change
    create_table :loan_contracts do |t|
      t.integer :creditor_id
      t.integer :debtor_id

      t.datetime :start_date, null: false

      t.integer :time_period, default: 0, null: false
      t.integer :time_period_type, default: 0, null: false

      t.integer :issued_amount, default: 0, null: false
      t.integer :return_amount, default: 0, null: false

      t.integer :request_status, default: 0, null: false
      t.integer :state, default: 0, null: false

      t.timestamps
    end

    add_index :loan_contracts, [:creditor_id, :debtor_id], unique: true
    add_index :loan_contracts, :creditor_id
    add_index :loan_contracts, :debtor_id
    add_index :loan_contracts, :request_status
    add_index :loan_contracts, :state
  end
end

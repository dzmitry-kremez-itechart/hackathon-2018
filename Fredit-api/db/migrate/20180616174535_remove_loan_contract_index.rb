class RemoveLoanContractIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index :loan_contracts, [:creditor_id, :debtor_id]
    change_column :loan_contracts, :start_date, :datetime, null: true
  end
end

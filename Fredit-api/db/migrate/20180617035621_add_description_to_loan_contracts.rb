class AddDescriptionToLoanContracts < ActiveRecord::Migration[5.2]
  def change
    add_column :loan_contracts, :description, :text
  end
end

class LoanContractsController < ApplicationController
  def create
    @loan_contract = current_user.debtor_loan_contracts.new(loan_contract_params)
    if @loan_contract.save
      render json: { loan_contract: @loan_contract }, status: :created
    else
      render json: { errors: @loan_contract.errors }, status: :unprocessable_entity
    end
  end

  def accept
    @loan_contract = LoanContract.issued.find(params[:id])
    @loan_contract.creditor = current_user
    @loan_contract.start_date = Time.zone.now
    @loan_contract.request_status = :accepted
    @loan_contract.state = :active
    if @loan_contract.save
      render json: { loan_contract: @loan_contract }, status: :ok
    else
      render json: { errors: @loan_contract.errors }, status: :unprocessable_entity
    end
  end

  private

  def loan_contract_params
    params.require(:loan_contract).permit(
      :time_period,
      :time_period_type,
      :issued_amount,
      :return_amount,
    )
  end
end

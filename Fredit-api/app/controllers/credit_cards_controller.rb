class CreditCardsController < ApplicationController
  def create
    @credit_card = current_user.credit_cards.new(credit_card_params)
    if @credit_card.save
      render json: { credit_card: @credit_card }, status: :created
    else
      render json: { errors: @credit_card.errors }, status: :unprocessable_entity
    end
  end

  private

  def credit_card_params
    params.require(:credit_card).permit(
      :number,
      :cvc,
      :expiration_date,
      :main_card
    )
  end
end

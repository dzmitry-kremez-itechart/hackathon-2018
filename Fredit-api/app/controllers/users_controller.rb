class UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      authy = Authy::API.register_user(
        email: 'roma.shorin@gmail.com',
        cellphone: @user.phone,
        country_code: 375
      )

      @user.update(authy_id: authy.id)

      Authy::API.request_sms(id: @user.authy_id)

      token = AuthToken.token(@user)

      return render(json: { token: token })
    end

    render json: { error: @user.errors.full_messages.join(';') }, status: :unprocessable_entity
  end

  def verify
    token = Authy::API.verify(id: current_user.authy_id, token: params[:token])

    if token.ok?
      current_user.update(verified: true)

      render json: { verified: true }
    else
      render json: { error: token.errors }, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:user).permit(:phone)
  end
end

class Mutations::SignInUser < GraphQL::Function
  argument :phone, !Types::AuthProviderPhoneInput

  # define what this field will return
  type Types::AuthenticateType

  # resolve the field's response
  def call(obj, args, ctx)
    input = args[:phone]
    return unless input

    user = input[:phone]

    OpenStruct.new({
      token: AuthToken.token(user),
      user: user
    })
  end
end
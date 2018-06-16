class Types::AuthProviderPhoneInput < Types::BaseInputObject
  description "Sign In inputs"

  argument :phone, String, "Phone Number", required: true
  argument :code, String, "Code", required: true
end
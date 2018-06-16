Types::PassportType = GraphQL::ObjectType.define do
  name 'Passport'

  field :id, !types.ID
  field :first_name, !types.String
  field :last_name, !types.String
  field :number, !types.String
  field :identification, !types.String
  field :nationality, !types.String
  field :place_of_birth, !types.String
  field :date_of_birth, !types.String
  field :date_of_issue, !types.String
  field :date_of_expire, !types.String
end
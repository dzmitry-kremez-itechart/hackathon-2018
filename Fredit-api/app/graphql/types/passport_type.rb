class Types::PassportType < Types::BaseObject
  field :id, ID, null: false
  field :first_name, String, null: true
  field :last_name, String, null: true
  field :number, String, null: true
  field :identification, String, null: true
  field :nationality, String, null: true
  field :place_of_birth, String, null: true
  field :date_of_birth, String, null: true
  field :date_of_issue, String, null: true
  field :date_of_expire, String, null: true
end
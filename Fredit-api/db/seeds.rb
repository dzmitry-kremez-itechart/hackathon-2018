# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
debtor = User.find_or_create_by(phone: '375291112233')

p = Passport.find_or_create_by(
  user: debtor,
  first_name: 'Vasia',
  last_name: 'Pupkin',
  number: 'BM123123',
  identification: '1231231EE3242PS1',
  nationality: 'Belarus',
  place_of_birth: 'Minsk',
  date_of_birth: 20.years.ago,
  date_of_issue: 2.years.ago,
  date_of_expire: 3.years.from_now,
)

c = CreditCard.find_or_create_by(
  user: debtor,
  main_card: true,
  number: 4242_4242_4242_4242,
  expiration_date: 1.year.from_now,
  cvc: 123,
)

creditor = User.find_or_create_by(phone: '375294445566', status: :creditor)
Passport.find_or_create_by(
  user: creditor,
  first_name: 'Ilon',
  last_name: 'Mask',
  number: 'BM123123',
  identification: '1231231EE3242PS1',
  nationality: 'USA',
  place_of_birth: 'New York',
  date_of_birth: 30.years.ago,
  date_of_issue: 1.years.ago,
  date_of_expire: 4.years.from_now,
)
c1 = CreditCard.find_or_create_by(
  user: creditor,
  main_card: true,
  number: 4343_4343_4343_4343,
  expiration_date: 1.year.from_now,
  cvc: 321,
)

lc = LoanContract.find_or_create_by(
  debtor: debtor,
  creditor: creditor,
  time_period: 1,
  issued_amount: 100_00,
  return_amount: 110_00,
)
lc.start_date = 10.minutes.from_now,
lc.save
pt = PaymentTransaction.find_or_create_by(
  loan_contract: lc,
  amount: 110_00,
  status: :success
)
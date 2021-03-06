# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_06_17_035621) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "credit_cards", force: :cascade do |t|
    t.integer "user_id"
    t.boolean "main_card", null: false
    t.string "number"
    t.string "expiration_date"
    t.string "cvc"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_credit_cards_on_user_id"
  end

  create_table "loan_contracts", force: :cascade do |t|
    t.integer "creditor_id"
    t.integer "debtor_id"
    t.datetime "start_date"
    t.integer "time_period", default: 0, null: false
    t.integer "time_period_type", default: 0, null: false
    t.integer "issued_amount", default: 0, null: false
    t.integer "return_amount", default: 0, null: false
    t.integer "request_status", default: 0, null: false
    t.integer "state", default: 0, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "description"
    t.index ["creditor_id"], name: "index_loan_contracts_on_creditor_id"
    t.index ["debtor_id"], name: "index_loan_contracts_on_debtor_id"
    t.index ["request_status"], name: "index_loan_contracts_on_request_status"
    t.index ["state"], name: "index_loan_contracts_on_state"
  end

  create_table "passports", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "number"
    t.string "identification"
    t.string "nationality"
    t.string "place_of_birth"
    t.date "date_of_birth"
    t.date "date_of_issue"
    t.date "date_of_expire"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_passports_on_user_id"
  end

  create_table "payment_transactions", force: :cascade do |t|
    t.integer "loan_contract_id", null: false
    t.integer "amount", default: 0, null: false
    t.integer "status", default: 0, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "phone"
    t.string "email"
    t.integer "status", default: 0, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "authy_id"
    t.boolean "verified", default: false, null: false
    t.index ["phone"], name: "index_users_on_phone", unique: true
  end

end

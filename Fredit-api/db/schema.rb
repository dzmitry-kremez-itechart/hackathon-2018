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

ActiveRecord::Schema.define(version: 2018_06_16_104244) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "passports", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "number"
    t.string "identification"
    t.string "nationality"
    t.date "place_of_birth"
    t.date "date_of_birth"
    t.date "date_of_issue"
    t.date "date_of_expire"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_passports_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "phone"
    t.string "email"
    t.integer "status", default: 0, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["phone"], name: "index_users_on_phone", unique: true
  end

end

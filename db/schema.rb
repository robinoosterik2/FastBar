# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[8.0].define(version: 2025_04_01_215659) do
  create_table "bar_schedule_exceptions", force: :cascade do |t|
    t.integer "bar_id", null: false
    t.integer "event_id"
    t.date "date"
    t.time "open_time"
    t.time "close_time"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["bar_id"], name: "index_bar_schedule_exceptions_on_bar_id"
    t.index ["event_id"], name: "index_bar_schedule_exceptions_on_event_id"
  end

  create_table "bar_schedules", force: :cascade do |t|
    t.integer "bar_id"
    t.integer "day_of_week"
    t.time "open_time"
    t.time "close_time"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["bar_id"], name: "index_bar_schedules_on_bar_id"
  end

  create_table "barkeepers", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "bar_id"
    t.integer "company_id", null: false
    t.boolean "working"
    t.decimal "salary"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["bar_id"], name: "index_barkeepers_on_bar_id"
    t.index ["company_id"], name: "index_barkeepers_on_company_id"
    t.index ["user_id"], name: "index_barkeepers_on_user_id"
  end

  create_table "bars", force: :cascade do |t|
    t.integer "company_id", null: false
    t.string "name"
    t.string "location"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["company_id"], name: "index_bars_on_company_id"
  end

  create_table "companies", force: :cascade do |t|
    t.string "name"
    t.string "address"
    t.string "phone_number"
    t.string "email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_companies_on_email", unique: true
    t.index ["name"], name: "index_companies_on_name", unique: true
  end

  create_table "events", force: :cascade do |t|
    t.integer "company_id", null: false
    t.string "name"
    t.text "description"
    t.datetime "start_datetime"
    t.datetime "end_datetime"
    t.string "event_type"
    t.boolean "is_publicly_accessible"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["company_id"], name: "index_events_on_company_id"
  end

  create_table "order_items", force: :cascade do |t|
    t.integer "order_id", null: false
    t.integer "product_id", null: false
    t.integer "quantity"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["order_id"], name: "index_order_items_on_order_id"
    t.index ["product_id"], name: "index_order_items_on_product_id"
  end

  create_table "orders", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "bar_id", null: false
    t.integer "barkeeper_id"
    t.datetime "order_date"
    t.decimal "total_price"
    t.string "status"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["bar_id"], name: "index_orders_on_bar_id"
    t.index ["barkeeper_id"], name: "index_orders_on_barkeeper_id"
    t.index ["user_id"], name: "index_orders_on_user_id"
  end

  create_table "products", force: :cascade do |t|
    t.string "name"
    t.decimal "price"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "roles", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_roles_on_name"
  end

  create_table "stocks", force: :cascade do |t|
    t.integer "product_id", null: false
    t.integer "bar_id", null: false
    t.integer "amount"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["bar_id"], name: "index_stocks_on_bar_id"
    t.index ["product_id"], name: "index_stocks_on_product_id"
  end

  create_table "user_roles", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "role_id", null: false
    t.datetime "assigned_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["role_id"], name: "index_user_roles_on_role_id"
    t.index ["user_id"], name: "index_user_roles_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.string "first_name"
    t.string "last_name"
    t.decimal "balance"
    t.date "date_of_birth"
    t.datetime "last_login"
    t.boolean "is_active"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email"
    t.index ["username"], name: "index_users_on_username", unique: true
  end

  add_foreign_key "bar_schedule_exceptions", "bars"
  add_foreign_key "bar_schedule_exceptions", "events"
  add_foreign_key "bar_schedules", "bars"
  add_foreign_key "barkeepers", "bars"
  add_foreign_key "barkeepers", "companies"
  add_foreign_key "barkeepers", "users"
  add_foreign_key "bars", "companies"
  add_foreign_key "events", "companies"
  add_foreign_key "order_items", "orders"
  add_foreign_key "order_items", "products"
  add_foreign_key "orders", "barkeepers"
  add_foreign_key "orders", "bars"
  add_foreign_key "orders", "users"
  add_foreign_key "stocks", "bars"
  add_foreign_key "stocks", "products"
  add_foreign_key "user_roles", "roles"
  add_foreign_key "user_roles", "users"
end

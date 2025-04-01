#!/bin/bash
# === User Related ===

rails generate model User username:string:uniq email:string:index:uniq password_digest:string first_name:string last_name:string balance:decimal date_of_birth:date last_login:datetime is_active:boolean

rails generate model Role name:string:index:uniq description:text

# Join table for User <-> Role (Many-to-Many)
# Manually add unique index if needed: add_index :user_roles, [:user_id, :role_id], unique: true
rails generate model UserRole user:references role:references assigned_at:datetime

# BarKeeper belongs to User, Company, and potentially Bar
# REMEMBER: Manually edit migration to add 'null: true' for the 'bar' reference!
rails generate model BarKeeper user:references bar:references{null} company:references working:boolean salary:decimal

# === Company and Bar Related ===

rails generate model Company name:string:uniq address:string phone_number:string email:string:uniq

rails generate model Bar company:references name:string location:string

# Default schedule for a Bar
rails generate model BarSchedule bar:references day_of_week:integer open_time:time close_time:time

# Exceptions to the default Bar schedule
# REMEMBER: Manually edit migration to add 'null: true' for the 'event' reference!
rails generate model BarScheduleException bar:references event:references{null} date:date open_time:time close_time:time

# Events (potentially hosted by companies)
# Note: 'type' renamed to 'event_type'
rails generate model Event company:references name:string description:text start_datetime:datetime end_datetime:datetime event_type:string is_publicly_accessible:boolean

# === Order and Product Related ===

# Orders placed by Users at Bars, potentially handled by BarKeepers
# Note: 'date' renamed to 'order_date'
# REMEMBER: Manually edit migration to add 'null: true' for the 'barkeeper' reference!
# Note: 'status' uses string. Consider Rails enums in the model.
rails generate model Order user:references bar:references bar_keeper:references{null} order_date:datetime total_price:decimal status:string

# Join table for Order <-> Product (Many-to-Many)
# Manually add unique index if needed: add_index :order_items, [:order_id, :product_id], unique: true
rails generate model OrderItem order:references product:references quantity:integer

rails generate model Product name:string price:decimal description:text

# Join table for tracking Product stock at specific Bars (Many-to-Many)
# Manually add unique index if needed: add_index :stocks, [:product_id, :bar_id], unique: true
rails generate model Stock product:references bar:references amount:integer
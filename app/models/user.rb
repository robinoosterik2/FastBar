# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  balance         :decimal(10, 2)
#  date_of_birth   :date
#  email           :string
#  first_name      :string
#  is_active       :boolean
#  last_login      :datetime
#  last_name       :string
#  password_digest :string
#  username        :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
# Indexes
#
#  index_users_on_email     (email) UNIQUE
#  index_users_on_username  (username) UNIQUE
#
class User < ApplicationRecord
end

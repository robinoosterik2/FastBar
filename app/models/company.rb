# == Schema Information
#
# Table name: companies
#
#  id           :integer          not null, primary key
#  address      :string
#  email        :string
#  name         :string
#  phone_number :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
# Indexes
#
#  index_companies_on_email  (email) UNIQUE
#  index_companies_on_name   (name) UNIQUE
#
class Company < ApplicationRecord
end

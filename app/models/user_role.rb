# == Schema Information
#
# Table name: user_roles
#
#  id          :integer          not null, primary key
#  assigned_at :datetime
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  role_id     :integer          not null
#  user_id     :integer          not null
#
# Indexes
#
#  index_user_roles_on_role_id  (role_id)
#  index_user_roles_on_user_id  (user_id)
#
# Foreign Keys
#
#  role_id  (role_id => roles.id)
#  user_id  (user_id => users.id)
#
class UserRole < ApplicationRecord
  belongs_to :user
  belongs_to :role
end

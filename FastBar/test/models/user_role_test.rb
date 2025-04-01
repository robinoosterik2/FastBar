# == Schema Information
#
# Table name: user_roles
#
#  id          :integer          not null, primary key
#  assigned_at :datetime
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  role_id     :integer          not null
#  user_id     :integer
#
# Indexes
#
#  index_user_roles_on_role_id              (role_id)
#  index_user_roles_on_user_id              (user_id)
#  index_user_roles_on_user_id_and_role_id  (user_id,role_id) UNIQUE
#
# Foreign Keys
#
#  role_id  (role_id => roles.id)
#  user_id  (user_id => users.id)
#
require "test_helper"

class UserRoleTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

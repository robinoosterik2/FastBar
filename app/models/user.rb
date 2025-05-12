# == Schema Information
#
# Table name: users
#
#  id                   :integer          not null, primary key
#  balance              :decimal(, )
#  confirmation_sent_at :datetime
#  confirmation_token   :string
#  confirmed_at         :datetime
#  date_of_birth        :date
#  email                :string
#  first_name           :string
#  is_active            :boolean
#  last_login           :datetime
#  last_name            :string
#  password_digest      :string
#  username             :string
#  created_at           :datetime         not null
#  updated_at           :datetime         not null
#
# Indexes
#
#  index_users_on_email     (email)
#  index_users_on_username  (username) UNIQUE
#
class User < ApplicationRecord
  has_secure_password

  validates :email, presence: true, uniqueness: true
  validates :username, presence: true, uniqueness: true
  validates :password, presence: true, length: { minimum: 6 }, if: -> { new_record? || !password.nil? }
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :date_of_birth, presence: true
  validates :balance, numericality: { greater_than_or_equal_to: 0 }, allow_nil: true

  before_create :set_default_balance

  def confirmed?
    confirmed_at.present?
  end

  def confirmation_token_valid?
    confirmation_sent_at && confirmation_sent_at > 10.minutes.ago
  end

  def confirm!
    update(confirmed_at: Time.current, confirmation_token: nil, confirmation_sent_at: nil)
  end

  private

  def set_default_balance
    self.balance ||= 0.0
  end

  def generate_confirmation_token
    self.confirmation_token = SecureRandom.urlsafe_base64(32)
    self.confirmation_sent_at = Time.current
  end
end

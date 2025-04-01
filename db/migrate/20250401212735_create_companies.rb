class CreateCompanies < ActiveRecord::Migration[8.0]
  def change
    create_table :companies do |t|
      t.string :name
      t.string :address
      t.string :phone_number
      t.string :email

      t.timestamps
    end
    add_index :companies, :name, unique: true
    add_index :companies, :email, unique: true
  end
end

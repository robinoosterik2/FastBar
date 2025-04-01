class CreateBars < ActiveRecord::Migration[8.0]
  def change
    create_table :bars do |t|
      t.references :company, null: false, foreign_key: true
      t.string :name
      t.string :location

      t.timestamps
    end
  end
end

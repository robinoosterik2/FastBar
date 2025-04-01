class CreateBarKeepers < ActiveRecord::Migration[8.0]
  def change
    create_table :bar_keepers do |t|
      t.references :user, null: false, foreign_key: true
      t.references :bar, null: true, foreign_key: true
      t.references :company, null: false, foreign_key: true
      t.boolean :working
      t.decimal :salary

      t.timestamps
    end
  end
end

class CreateEvents < ActiveRecord::Migration[8.0]
  def change
    create_table :events do |t|
      t.references :company, null: false, foreign_key: true
      t.string :name
      t.text :description
      t.datetime :start_datetime
      t.datetime :end_datetime
      t.string :event_type
      t.boolean :is_publicly_accessible

      t.timestamps
    end
  end
end

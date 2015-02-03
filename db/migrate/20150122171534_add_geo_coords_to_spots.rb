class AddGeoCoordsToSpots < ActiveRecord::Migration
  def change
    add_column :spots, :lat, :string
    add_column :spots, :lon, :string
  end
end

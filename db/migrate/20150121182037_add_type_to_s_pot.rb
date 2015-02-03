class AddTypeToSPot < ActiveRecord::Migration
  def change
    add_column :spots, :spot_type, :string
  end
end

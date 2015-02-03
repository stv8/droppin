class AddPhotoToSpots < ActiveRecord::Migration
  def change
    add_attachment :spots, :photo
  end
end

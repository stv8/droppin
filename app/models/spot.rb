class Spot < ActiveRecord::Base
	belongs_to :user

	has_attached_file :photo, styles: { :medium => "200x200>", :thumb => "100x100>" }
	#validates_attachment_content_type :avatar, :content_type => /^image\/(png|gif|jpeg|jpg)/
	
end

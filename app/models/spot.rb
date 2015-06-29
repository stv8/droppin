class Spot < ActiveRecord::Base
	belongs_to :user

	has_attached_file :photo, styles: {:original => '400x400', :medium => '200x200>', :thumb => '100x100>' }
	validates_attachment_content_type :photo, :content_type => /^image\/(png|gif|jpeg|jpg)/

	def thumb_url
		self.photo.url(:thumb)
	end

	def medium_url
		self.photo.url(:medium)
	end

	def original_url
		self.photo.url(:original)
	end
end

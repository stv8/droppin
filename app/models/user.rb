class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :spots
   
  before_save :ensure_authentication_token
 
 	def ensure_authentication_token
	  if authentication_token.blank?
	    self.authentication_token = generate_authentication_token
	  end
  end

  def reset_authentication_token!
    self.authentication_token = generate_authentication_token
  end

  private

  def generate_authentication_token
    loop do
      token = Devise.friendly_token
      break token unless User.find_by(authentication_token: token)
    end
  end

end

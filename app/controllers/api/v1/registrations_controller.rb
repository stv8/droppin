module Api
  module V1
    class RegistrationsController < ApiController
      skip_before_filter :authenticate_user_from_token!
      skip_before_filter :authenticate_api_v1_user!

      def create
        user = User.new(user_params)
        if user.save!
          render :json => { :user => user }, :status => :ok
        else
          warden.custom_failure!
          render json: user.errors, status: 422
        end
      end

      private
        def user_params
          params.require(:user).permit(:email, :password)
        end
    end
  end
end

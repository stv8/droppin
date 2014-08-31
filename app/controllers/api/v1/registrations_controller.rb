module Api
  module V1
    class RegistrationsController < ApiController
      skip_before_filter :authenticate_user_from_token!
      skip_before_filter :authenticate_api_v1_user!

      def create
        user = User.new(user_params)
        if user.save
          render(
            json: Jbuilder.encode do |j|
              j.success true
              j.email user.email
              j.auth_token user.authentication_token
            end,
            status: 201
          )
          return
        else
          warden.custom_failure!
          render json: user.errors, status: 422
        end
      end

      private
        def user_params
          params.permit(:email, :password)
        end
    end
  end
end

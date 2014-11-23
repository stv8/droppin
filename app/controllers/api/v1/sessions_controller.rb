module Api
  module V1
    class SessionsController < Devise::SessionsController

      skip_before_filter :authenticate_api_v1_user!, only: [:create, :new]
      after_action :set_csrf_header, only: [:new, :create, :destroy]

      def new
        render nothing: true
      end

      def create
        user = User.find_for_database_authentication(:email => params[:email])

        if user && user.valid_password?(params[:password])
          user.ensure_authentication_token  # make sure the user has a token generated
          render :json => { :user => user }, :status => :created
        else
          return invalid_login_attempt
        end
      end

      def destroy
        # expire auth token
        user = User.where(:authentication_token => params[:authentication_token]).first
        user.reset_authentication_token!
        render :json => { :message => ["Session deleted."] },  :success => true, :status => :ok
      end

      private

      def invalid_login_attempt
        warden.custom_failure!
        render :json => { :errors => ["Invalid email or password."] },  :success => false, :status => :unauthorized
      end

      def set_csrf_header
        response.headers['X-CSRF-Token'] = form_authenticity_token
      end

      def form_authenticity_token
        session[:_csrf_token] ||= SecureRandom.base64(32)
      end

    end
  end
end


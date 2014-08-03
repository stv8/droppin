module Api
  module V1
    class SpotsController < ApiController
      #before_action :authenticate_api_v1_user!

      # GET /spots
      # GET /spots.json
      def index
        @spots = Spot.where(user_id: current_user)

        render json: @spots
      end

      # GET /spots/1
      # GET /spots/1.json
      def show
        @spot = Spot.find(params[:id])

        render json: @spot
      end

      # POST /spots
      # POST /spots.json
      def create
        @spot = current_user.spots.build(permitted_params)

        if @spot.save
          render json: @spot, status: :created
        else
          render json: @spot.errors, status: :unprocessable_entity
        end
      end

      # PATCH/PUT /spots/1
      # PATCH/PUT /spots/1.json
      def update
        @spot = Spot.find(params[:id])

        if @spot.update(params[:spot])
          head :no_content
        else
          render json: @spot.errors, status: :unprocessable_entity
        end
      end

      # DELETE /spots/1
      # DELETE /spots/1.json
      def destroy
        @spot = Spot.find(params[:id])
        @spot.destroy

        head :no_content
      end

      def permitted_params
        params.permit(:name, :description)
      end

      private
        def current_user
          User.where(authentication_token: params[:authentication_token]).take
        end

    end
  end
end
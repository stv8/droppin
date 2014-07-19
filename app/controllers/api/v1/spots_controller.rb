module Api
  module V1
    class SpotsController < ApplicationController
      # GET /spots
      # GET /spots.json
      def index
        @spots = Spot.all

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
        @spot = Spot.new(permitted_params)

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
    end
  end
end
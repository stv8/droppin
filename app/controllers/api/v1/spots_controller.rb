module Api
  module V1
    class SpotsController < ApiController
      # GET /spots
      # GET /spots.json
      def index
        @spots = Spot.where(user_id: current_api_v1_user.id)

        render json: @spots.to_json(:only => [:id, :name, :description], :methods => [:thumb_url])
      end

      # GET /spots/1
      # GET /spots/1.json
      def show
        @spot = Spot.find(params[:id])
   
        render json: @spot.to_json(:only => [:id, :name, :description], :methods => [:medium_url])
      end

      # POST /spots
      # POST /spots.json
      def create
        params[:photo] = process_photo unless params[:photo][:data].nil?
        @spot = current_api_v1_user.spots.build(permitted_params)

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
        params.permit(:name, :description, :photo, :spot_type)
      end

      private
        def current_user
          User.where(authentication_token: params[:authentication_token]).take
        end

        def process_photo
          if params[:photo]
            data = StringIO.new(Base64.decode64(params[:photo][:data]))
            data.class.class_eval { attr_accessor :original_filename, :content_type }
            data.original_filename = Time.now.to_s
            data.content_type = params[:photo][:content_type]
            data
          end
        end

    end
  end
end

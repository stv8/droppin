require 'test_helper'

class SpotsControllerTest < ActionController::TestCase
  setup do
    @spot = spots(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:spots)
  end

  test "should create spot" do
    assert_difference('Spot.count') do
      post :create, spot: { description: @spot.description, name: @spot.name }
    end

    assert_response 201
  end

  test "should show spot" do
    get :show, id: @spot
    assert_response :success
  end

  test "should update spot" do
    put :update, id: @spot, spot: { description: @spot.description, name: @spot.name }
    assert_response 204
  end

  test "should destroy spot" do
    assert_difference('Spot.count', -1) do
      delete :destroy, id: @spot
    end

    assert_response 204
  end
end

class UsersController < ApplicationController
  def index; end

  def show
    @user = User.find(params[:id])
    respond_to do |format|
      format.json { render json: @user }
      format.html
    end
  end
end

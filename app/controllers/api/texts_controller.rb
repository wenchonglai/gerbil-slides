class Api::TextsController < ApplicationController
  before_action :ensure_current_user

  def create
    @text = Textbox.create(text_params);

    if @text.save
      redirect_to api_text_url(@textbox), status: 303
    else
      render json: @textbox.errors.full_messages, status: 422
    end
  end

  def update
    p text_params
    @textbox = @textboxes.find_by(id: params[:id].to_i);

    if !@textbox
      render json: ["Textbox not found"], status: 404
    elsif @textbox.update(text_params)
      redirect_to api_texts_url, status: 303
    else
      render json: @textbox.errors.full_messages, status: 422
    end
  end

  def destroy
    @textbox = @textboxes.find_by(id: params[:id].to_i);

    if !@textbox
      render json: ["Textbox not found"], status: 404
    elsif @textbox.destroy
      redirect_to api_texts_url, status: 303
    else
      render json: @textbox.errors.full_messages, status: 422
    end
  end

  def show
    @textbox = @textboxes.find_by(id: params[:id])
  end

  private
  def ensure_current_user
    if !current_user
      render json: ["You are not authorized to visit this slide"], status: 403
    else
      @user = User.includes(docs: [:slides]).find_by(id: current_user.id);
      @textboxes = @user.textboxes;

      unless @textboxes
        render json: ["You are not authorized to visit this slide"], status: 403
      end
    end
  end

  def text_params
    params.require(:textbox).permit(:text, textstyles_attributes: [:id, :style_string, :offset, '_destroy'])
  end
end
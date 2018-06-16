class ApplicationController < ActionController::API
  def current_user
    return nil if request.headers['Authorization'].blank?
    token = request.headers['Authorization'].split(' ').last
    return nil if token.blank?
    AuthToken.verify(token)
  end
end

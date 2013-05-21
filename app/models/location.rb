require 'digest/md5'

class Location < ActiveRecord::Base
  after_create :generate_qr_hash

  def generate_qr_hash
    self.qrhash = Digest::MD5.hexdigest(self.id.to_s)
    self.save
  end
end

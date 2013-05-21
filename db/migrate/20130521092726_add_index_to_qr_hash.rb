class AddIndexToQrHash < ActiveRecord::Migration
  def change
    add_index :locations, :qrhash
  end
end

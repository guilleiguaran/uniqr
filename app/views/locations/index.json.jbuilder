json.array!(@locations) do |location|
  json.extract! location, :name, :latitude, :longitude, :qrhash
  json.url location_url(location, format: :json)
end
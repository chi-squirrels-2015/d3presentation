require 'net/http'
require 'json'

STATIONS = []

class Parser
  def initialize
    uri = URI.parse("http://www.divvybikes.com/stations/json/")
    http = Net::HTTP.new(uri.host, uri.port)
    response = http.request(Net::HTTP::Get.new(uri.request_uri))
    parsed_api = JSON.parse(response.body)
    @all_stations_data = parsed_api["stationBeanList"]
  end

  def create_station_data
    @all_stations_data.each do |station_data|
      STATIONS << StationData.new(station_data)
    end
  end
end


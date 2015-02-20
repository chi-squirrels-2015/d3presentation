require_relative '../models/parser.rb'
require_relative '../models/stationdata.rb'

before do
  if STATIONS.empty?
    parser = Parser.new
    parser.create_station_data
  end
end

get '/' do
  redirect "/bikes"
end

post '/total_docks' do
  @data = STATIONS.map do |station|
            station.total_docks
          end

  content_type :json
  {data: @data}.to_json
end

post '/available_bikes' do
  @data = STATIONS.map do |station|
            station.available_bikes
          end

  content_type :json
  {data: @data}.to_json
end

post '/available_docks' do
  @data = STATIONS.map do |station|
            station.available_docks
          end

  content_type :json
  {data: @data}.to_json
end

get '/bikes' do
  erb :layout
end
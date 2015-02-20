class StationData
  attr_reader :station_name, :total_docks, :available_docks, :available_bikes

  def initialize(station = {})
    @id = station['id']
    @station_name = station['stationName']
    @total_docks = station['totalDocks']
    @available_docks = station['availableDocks']
    @available_bikes = station['availableBikes']
  end
end
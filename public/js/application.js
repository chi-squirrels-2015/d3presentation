$(document).ready(function(){

  $(".total-docks").on("click", function(event) {
    event.preventDefault();
    $(".chart-available-bikes").hide();
    $(".chart-available-docks").hide();

    var request = $.ajax({
      url: "/total_docks",
      method: "post"
    })

    request.done(function(response) {
      var data = response.data;

      var x = d3.scale.linear()
      .domain([0, d3.max(data)])
      .range([0, 420]);

      d3.select(".chart-total-docks")
        .style("display", "inline-block")
        .selectAll("div")
          .data(data)
        .enter().append("div")
          .style("height", function(d) { return x(d) + "px"; })
          .style("margin-bottom", "50px")
          .text(function(d) { return d; })
          .style("text-align", "center");
      })
    })

    $(".available-bikes").on("click", function(event) {
    event.preventDefault();
    $(".chart-total-docks").hide();
    $(".chart-available-docks").hide();

    var request = $.ajax({
      url: "/available_bikes",
      method: "post"
    })

    request.done(function(response) {
      var data = response.data;

      var x = d3.scale.linear()
      .domain([0, d3.max(data)])
      .range([0, 420]);

      d3.select(".chart-available-bikes")
      .style("display", "inline-block")
      .selectAll("div")
        .data(data)
      .enter().append("div")
        .style("height", function(d) { return x(d) + "px"; })
        .style("margin-bottom", "50px")
        .text(function(d) { return d; })
        .style("text-align", "center");
    })
  })

    $(".available-docks").on("click", function(event) {
      event.preventDefault();
      $(".chart-total-docks").hide();
      $(".chart-available-bikes").hide();

      var request = $.ajax({
        url: "/available_docks",
        method: "post"
      })

      request.done(function(response) {
        var data = response.data;

        var x = d3.scale.linear()
        .domain([0, d3.max(data)])
        .range([0, 420]);

        d3.select(".chart-available-docks")
        .style("display", "inline-block")
        .selectAll("div")
          .data(data)
        .enter().append("div")
          .style("height", function(d) { return x(d) + "px"; })
          .style("margin-bottom", "50px")
          .text(function(d) { return d; })
          .style("text-align", "center");
      })
    })

});

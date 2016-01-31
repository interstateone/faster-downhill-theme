function getLatestLocation() {
    $.ajax({
        url: "https://tracker.brandonevans.ca/points/latest",
        dataType: "jsonp",
        success: function(point) {
            var prefix = point.inside ? " in " : " near ";
            var location = point.name;
            $("h6 small").html(prefix + location);
        }
    });
}


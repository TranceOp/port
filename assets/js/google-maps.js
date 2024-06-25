function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 31.1048, lng: 77.1734};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Shimla, Himachal Pradesh' // Title Location
    });
}
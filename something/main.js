var mymap = L.map('mapid').setView([-122.425000, 37.774], 12);

L.tileLayer('', {
     attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
     maxZoom: 18,
     id: 'sohuang.0nffe7lg',
     accessToken: 'pk.eyJ1Ijoic29odWFuZyIsImEiOiJjaXF2dmYzbHIwMDJ2ZnBtZzc3MWhzaXMwIn0.ujgNWplIcJ4agN7XxexrhA'
}).addTo(mymap);
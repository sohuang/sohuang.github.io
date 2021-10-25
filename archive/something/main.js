var mymap = L.map('mapid').setView([37.779116, -122.415766], 12);

L.tileLayer('https://api.mapbox.com/styles/v1/sohuang/ciqvvfyla000objm7xf7bxjet/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic29odWFuZyIsImEiOiJjaXF2dmYzbHIwMDJ2ZnBtZzc3MWhzaXMwIn0.ujgNWplIcJ4agN7XxexrhA', {
     attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
     maxZoom: 18,
     //id: 'sohuang.0nffe7lg',
     //accessToken: 'pk.eyJ1Ijoic29odWFuZyIsImEiOiJjaXF2dmYzbHIwMDJ2ZnBtZzc3MWhzaXMwIn0.ujgNWplIcJ4agN7XxexrhA'
}).addTo(mymap);
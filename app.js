mapboxgl.accessToken =
  "pk.eyJ1IjoicGhpd2UxOTk4IiwiYSI6ImNrenIxZ28waDBmbmQyb211dTJjd252cHEifQ.vmtqKZk98SBUtb_gP5ZQuQ";



navigator.geolocation.getCurrentPosition(successLocation,errorLocation, {enableHighAccuracy: true})

function successLocation(position) 
{ 
     console.log(position) 
     setUpMap([position.coords.longitude, position.coords.latitude]); 
} 

function errorLocation(){
    setUpMap[(-28.0473, 26.2041)];
}; 

function setUpMap(center)
{
  var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: center,
    zoom: 13,
  });

  // add zoom and rotation controls to the map

  map.addControl(new mapboxgl.NavigationControl()); 

  map.addControl(new MapboxDirections({accessToken: mapboxgl.accessToken
}),
'top-left'
);

}  

//menu -btn   

const menuBtn = document.querySelector(".menu-container");
let menuCheck = true;
const hamburgerMenu = document.querySelector(".menu-container"); 
const menuList = document.querySelector(".page-links");  

menuBtn.addEventListener("click", () => { 
  
  menuList.classList.toggle("active-links"); 
  
  if (!menuCheck) {
    menuBtn.classList.add("open");
    menuCheck = true;
  } else {
    menuBtn.classList.remove("open");
    menuCheck = false;
  }
});



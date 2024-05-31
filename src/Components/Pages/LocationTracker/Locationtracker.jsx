import React from 'react'
import { useGeolocated } from 'react-geolocated';


const Locationtracker = () => {

    const { coords, isGeolocationAvailable, isGeolocationEnabled, positionError } = useGeolocated();

    const calculateDistance = (lat1, lon1, lat2, lon2) => {
      const R = 6371; // Radius of the earth in km
      const dLat = deg2rad(lat2 - lat1);
      const dLon = deg2rad(lon2 - lon1);
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const distance = R * c; // Distance in km
      return distance.toFixed(2);
    };
  
    const deg2rad = (deg) => {
      return deg * (Math.PI / 180);
    };
  
    if (!isGeolocationAvailable) {
      return <div>Your browser does not support geolocation.</div>;
    }
  
    if (!isGeolocationEnabled) {
      return <div>Geolocation is not enabled. Please enable it in your browser settings.</div>;
    }
  
    if (positionError) {
      return <div>Failed to retrieve your location: {positionError.message}</div>;
    }
  
    if (!coords) {
      return <div>Fetching your location...</div>;
    }
  
    // Example target location (New York City)
    const targetLocation = { latitude:25.4507, longitude:  82.8560  };
  
    // Calculate distance
    const distance = calculateDistance(coords.latitude, coords.longitude, targetLocation.latitude, targetLocation.longitude);
  
  return (
    <div>
      <p>Your Latitude: {coords.latitude}</p>
      <p>Your Longitude: {coords.longitude}</p>
      <p>Distance to target location: {distance} km</p>
    </div>

  )
}

export default Locationtracker
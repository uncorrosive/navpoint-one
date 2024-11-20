import React, { useEffect, useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import { MapPin } from 'lucide-react';
import 'mapbox-gl/dist/mapbox-gl.css';

interface MapProps {
  onLocationSelect: (building: string) => void;
}

export default function Map({ onLocationSelect }: MapProps) {
  const [viewport, setViewport] = useState({
    latitude: 44.4759,
    longitude: -73.2121,
    zoom: 14
  });

  const [marker, setMarker] = useState<{lat: number; lng: number} | null>(null);

  const handleClick = (event: any) => {
    const [longitude, latitude] = event.lngLat;
    setMarker({ lat: latitude, lng: longitude });
    
    // Simulate building detection - in real app, use reverse geocoding
    const buildings = ["UHeights South", "Central Campus", "Tupper", "Redstone", "Simpson"];
    const randomBuilding = buildings[Math.floor(Math.random() * buildings.length)];
    onLocationSelect(randomBuilding);
  };

  return (
    <div className="h-[400px] w-full rounded-xl overflow-hidden">
      <ReactMapGL
        {...viewport}
        width="100%"
        height="100%"
        mapStyle="mapbox://styles/mapbox/dark-v11"
        mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
        onMove={evt => setViewport(evt.viewState)}
        onClick={handleClick}
      >
        {marker && (
          <Marker latitude={marker.lat} longitude={marker.lng}>
            <MapPin className="w-8 h-8 text-white -translate-x-1/2 -translate-y-1/2" />
          </Marker>
        )}
      </ReactMapGL>
    </div>
  );
}
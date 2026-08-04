import React from 'react';

export interface MapMarker {
  id: string;
  lat: number;
  lng: number;
  title: string;
}

export interface RouteInfo {
  distance: string;
  duration: string;
}

interface NycMapProps {
  markers?: MapMarker[];
  routeInfo?: RouteInfo;
  className?: string;
}

export default function NycMap({ className }: NycMapProps) {
  return (
    <div className={`w-full h-48 bg-neutral-100 rounded-lg flex items-center justify-center text-neutral-500 text-sm ${className || ''}`}>
      NYC Map
    </div>
  );
}

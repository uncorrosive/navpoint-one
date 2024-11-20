import React, { useState } from 'react';
import { MapPin, Navigation2, Building2 } from 'lucide-react';
import LocationInput from './LocationInput';
import Map from './Map';
import { getDirections } from '../lib/openai';

const buildings = [
  "UHeights South",
  "Central Campus",
  "Tupper",
  "Redstone",
  "Simpson"
];

export default function NavigationForm() {
  const [building, setBuilding] = useState('');
  const [current, setCurrent] = useState('');
  const [destination, setDestination] = useState('');
  const [directions, setDirections] = useState('Directions will appear here...');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!building || !current || !destination) {
      setDirections('Please fill in all fields before proceeding.');
      return;
    }

    setLoading(true);
    setDirections('Calculating your route...');

    try {
      const result = await getDirections(building, current, destination);
      setDirections(result || 'No directions available.');
    } catch (error) {
      setDirections(error instanceof Error ? error.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
      <div className="bg-gray-900 rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-800">
        <Map onLocationSelect={setBuilding} />
        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          <div className="space-y-4">
            <LocationInput
              icon={Building2}
              value={building}
              onChange={setBuilding}
              placeholder="Select your building"
              type="select"
              options={buildings}
            />

            <LocationInput
              icon={MapPin}
              value={current}
              onChange={setCurrent}
              placeholder="Enter your current location"
            />

            <LocationInput
              icon={Navigation2}
              value={destination}
              onChange={setDestination}
              placeholder="Where would you like to go?"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 rounded-xl text-black font-medium transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg active:translate-y-0 bg-white hover:bg-gray-100"
          >
            {loading ? 'Getting Directions...' : 'Get Directions'}
          </button>

          <div className="mt-6 p-4 rounded-xl bg-gray-800 border border-gray-700">
            <pre className="whitespace-pre-wrap text-sm text-gray-300">
              {directions}
            </pre>
          </div>
        </form>
      </div>
    </div>
  );
}
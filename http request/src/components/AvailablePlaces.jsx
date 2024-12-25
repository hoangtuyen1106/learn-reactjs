import { useState } from "react";
import Places from "./Places.jsx";
import { useEffect } from "react";
import ErrorPage from "./Error.jsx";
import { sortPlacesByDistance } from "../loc.js";
import { fetchAvailabelPlaces } from "../https.js";

export default function AvailablePlaces({ onSelectPlace }) {
   const [isFetching, setIsFetching] = useState(false);
   const [availablePlaces, setAvailablePlaces] = useState([]);
   const [error, setError] = useState();

   useEffect(() => {
      const fetchPlaces = async () => {
         setIsFetching(true);

         try {
            const places = await fetchAvailabelPlaces();
            navigator.geolocation.getCurrentPosition((position) => {
               const sortedPlaces = sortPlacesByDistance(
                  places,
                  position.coords.latitude,
                  position.coords.longitude
               );
               setAvailablePlaces(sortedPlaces);
               setIsFetching(false);
            });
         } catch (error) {
            setError({
               message:
                  error.message ||
                  "Could not fetch places, please try again later",
            });
            setIsFetching(false);
         }
      };

      fetchPlaces();
   }, []);

   if (error) {
      return <ErrorPage title="An Error occurred!" message={error.message} />;
   }
   return (
      <Places
         title="Available Places"
         places={availablePlaces}
         isLoading={isFetching}
         loadingText="Fetching place data..."
         fallbackText="No places available."
         onSelectPlace={onSelectPlace}
      />
   );
}

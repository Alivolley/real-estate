import React, { useState } from "react";
import LocationPicker from "react-leaflet-location-picker";

const MyComponent = () => {
   const [choosenLocation, setChoosenLocation] = useState([0, 0]);

   console.log(choosenLocation);

   const pointVals = [
      choosenLocation,
      // [45, -10],
   ];
   const pointMode = {
      banner: true,
      control: {
         values: pointVals,
         onClick: (point) => setChoosenLocation(point),
         onRemove: (point) => console.log("I've just been clicked for removal :(", point),
      },
   };
   const circleMode = {
      banner: false,
   };
   return (
      <div className="container">
         <LocationPicker pointMode={pointMode} circleMode={circleMode} />
      </div>
   );
};

export default MyComponent;

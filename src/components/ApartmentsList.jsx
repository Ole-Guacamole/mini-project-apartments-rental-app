import { useState } from 'react';
import data from "../assets/data.json";
import ApartmentCard from './ApartmentCard';



function ApartmentsList() {
  // Step 2: Initialize state with Appartments data
  const [apartments, setApartments] = useState(data);

  const deleteApartment = apartmentId => {
    const filteredApartments = apartments.filter(apartment => {
      return apartment.id !== apartmentId;
    });

    setApartments(filteredApartments);
  };


 
  return (
    <div className='apartments-list'>
      <h2>Apartments</h2>
      {apartments.map(apartment => {
        return <ApartmentCard key={apartment.id} apartment={apartment} clickToDelete={deleteApartment} />;
      })}
    </div>
  );
}

export default ApartmentsList;
import { useState } from 'react';
import data from "../assets/data.json";
import ApartmentCard from './ApartmentCard';
import AddApartment from './AddApartment';



function ApartmentsList() {
  //  Initialize state with Appartments data
  const [apartments, setApartments] = useState(data);

  // Function to delete apartment card from List
  const deleteApartment = apartmentId => {
    const filteredApartments = apartments.filter(apartment => {
      return apartment.id !== apartmentId;
    });

    setApartments(filteredApartments);
  };

  // Function to add new apartment card to the list
  const addNewApartment = (newApartment) => {
    // Create a new array
    const updatedApartments = [newApartment, ...Apartments];
   
    setApartments(updatedApartments);
  };
 
 
  // Return Components
  return (
    <div className='apartments-list'>
      <h2>Apartments</h2>
      
      <AddApartment addApartment={addNewApartment} />
      
      {apartments.slice(0,10).map(apartment => {
        return <ApartmentCard key={apartment.id} apartment={apartment} clickToDelete={deleteApartment} />;
      })}
    </div>
  );
}

export default ApartmentsList;
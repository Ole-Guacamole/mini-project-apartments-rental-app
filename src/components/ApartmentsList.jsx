import { useState } from "react";
import ApartmentCard from "./ApartmentCard";
import AddApartment from "./AddApartment";

function ApartmentsList({ apartments, setApartments }) {
  // Function to delete apartment card from List
  const deleteApartment = (apartmentId) => {
    const filteredApartments = apartments.filter((apartment) => {
      return apartment.id !== apartmentId;
    });

    setApartments(filteredApartments);
  };

  // Function to add new apartment card to the list
  const addNewApartment = (newApartment) => {
    // Create a new array
    const updatedApartments = [newApartment, ...apartments];

    setApartments(updatedApartments);
  };

  // Return Components
  return (
    <div className="apartments-list">
      <h2>Apartments</h2>

      <AddApartment addApartment={addNewApartment} />

      {apartments /*.slice(0,10)*/
        .map((apartment) => {
          return (
            <ApartmentCard
              key={apartment.id}
              apartment={apartment}
              setApartments={setApartments}
              clickToDelete={deleteApartment}
            />
          );
        })}
    </div>
  );
}

export default ApartmentsList;

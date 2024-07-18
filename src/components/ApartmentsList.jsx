import { useState } from "react";
import ApartmentCard from "./ApartmentCard";
import AddApartment from "./AddApartment";

function ApartmentsList({ apartments, setApartments }) {
  // State to manage favourite apartments
  const [favourites, setFavourites] = useState([]);

  // Function to handle adding/removing from favourites
  const handleFavourite = (apartmentId) => {
    const apartment = apartments.find((apt) => apt.id === apartmentId);
    if (!apartment) return;

    if (favourites.includes(apartment)) {
      setFavourites(favourites.filter((apt) => apt.id !== apartmentId));
    } else {
      setFavourites([...favourites, apartment]);
    }
  };

  // Function to delete an apartment from the list
  const deleteApartment = (apartmentId) => {
    const filteredApartments = apartments.filter(
      (apt) => apt.id !== apartmentId
    );
    setApartments(filteredApartments);

    // Remove from favourites if present
    if (favourites.find((apt) => apt.id === apartmentId)) {
      setFavourites(favourites.filter((apt) => apt.id !== apartmentId));
    }
  };

  // Function to add a new apartment to the list
  const addNewApartment = (newApartment) => {
    const updatedApartments = [newApartment, ...apartments];
    setApartments(updatedApartments);
  };

  return (
    <div className="apartments-list">
      <h2 className="card__heading">Favourite Apartments</h2>
      <p className="favs">
        {" "}
        Add your favorite appartments here by clicking on the heart symbol on
        their list entry to have easy access to them.
      </p>

      {favourites.map((apartment) => (
        <ApartmentCard
          key={apartment.id}
          apartment={apartment}
          setApartments={setApartments}
          clickToDelete={deleteApartment}
          handleFavourite={handleFavourite}
          isFavourite={true}
        />
      ))}

      <h2>Add new apartment</h2>
      <AddApartment addApartment={addNewApartment} />

      <h2>Apartments</h2>
      {apartments.map((apartment) => (
        <ApartmentCard
          key={apartment.id}
          apartment={apartment}
          setApartments={setApartments}
          clickToDelete={deleteApartment}
          handleFavourite={handleFavourite}
          isFavourite={favourites.includes(apartment)}
        />
      ))}

      <br></br>
      <br></br>
    </div>
  );
}

export default ApartmentsList;

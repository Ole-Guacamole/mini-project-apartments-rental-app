import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import data from "../assets/data.json";

function ApartmentDetailsPage({ apartments, setApartments }) {
  const { apartmentId } = useParams();

  // State to hold the editable profile
  const [editableProfile, setEditableProfile] = useState({
    name: "",
    country: "",
    city: "",
    neighbourhood: "",
    space: "",
    description: "",
    house_rules: "",
    host_name: "",
    host_since: "",
    host_response_time: "",
    property_type: "",
    room_type: "",
    accommodates: "",
    bathrooms: "",
    bedrooms: "",
    beds: "",
    price: "",
    cleaning_fee: "",
    review_scores_rating: "",
    cancellation_policy: "",
  });
  // State to indicate if in editing mode
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Find the apartment to edit based on apartmentId
    const apartment = apartments.find(
      (apartment) => apartment.id === apartmentId
    );
    setEditableProfile(apartment);
  }, [apartmentId, apartments]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditableProfile({
      ...editableProfile,
      [name]: value,
    });
  };

  const handleSave = () => {
    // Update the apartment in the apartments array
    const updatedApartments = apartments.map((apartment) =>
      apartment.id === editableProfile.id ? editableProfile : apartment
    );

    // Update state with the updated apartments array
    setApartments(updatedApartments);

    // Simulate saving changes to backend (replace with actual API call)
    // For simplicity, assume data is updated directly in this demo
    setIsEditing(false); // Exit editing mode
  };

  return (
    <div className="details-page">
      {editableProfile && (
        <div>
          <h1>
            {isEditing ? (
              <input
                type="text"
                name="name"
                value={editableProfile.name}
                onChange={handleChange}
              />
            ) : (
              editableProfile.name
            )}
          </h1>
          <p>
          <strong>Country:</strong>{" "}
            {isEditing ? (
              <select
                name="country"
                value={editableProfile.country}
                onChange={handleChange}
              >
                <option value="">-- Choose --</option>
                <option value="Spain">Spain</option>
                <option value="Germany">Germany</option>
                <option value="France">France</option>
                {/* Add more options as needed */}
              </select>
            ) : (
              editableProfile.country
            )}
          </p>
          <p>
            <strong>City:</strong>{" "}
            {isEditing ? (
              <select
                name="city"
                value={editableProfile.city}
                onChange={handleChange}
              >
                <option value="">-- Choose --</option>
                <option value="Madrid">Madrid</option>
                <option value="Berlin">Berlin</option>
                <option value="Paris">Paris</option>
                {/* Add more options as needed */}
              </select>
            ) : (
              editableProfile.city
            )}
          </p>
          <p>
            <strong>Neighbourhood:</strong>|{" "}
            {isEditing ? (
              <input
                type="text"
                name="neighbourhood"
                value={editableProfile.neighbourhood}
                onChange={handleChange}
              />
            ) : (
              editableProfile.neighbourhood
            )}
          </p>
          <p>
            <strong>Space:</strong>{" "}
            {isEditing ? (
              <input
                type="text"
                name="space"
                value={editableProfile.space}
                onChange={handleChange}
              />
            ) : (
              editableProfile.space
            )}
          </p>
          <p>
          <strong>Description:</strong>{" "}
            {isEditing ? (
              <textarea
                name="description"
                value={editableProfile.description}
                onChange={handleChange}
              />
            ) : (
              editableProfile.description
            )}
          </p>
          <p>
          <strong>House rules:</strong>{" "}
            {isEditing ? (
              <textarea
                name="house_rules"
                value={editableProfile.house_rules}
                onChange={handleChange}
              />
            ) : (
              editableProfile.house_rules
            )}
          </p>
          <p>
          <strong>Host name:</strong>{" "}
            {isEditing ? (
              <input
                type="text"
                name="host_name"
                value={editableProfile.host_name}
                onChange={handleChange}
              />
            ) : (
              editableProfile.host_name
            )}
          </p>
          <p>
          <strong>Host since:</strong>{" "}
            {isEditing ? (
              <input
                type="text"
                name="host_since"
                value={editableProfile.host_since}
                onChange={handleChange}
              />
            ) : (
              editableProfile.host_since
            )}
          </p>
          <p>
          <strong>Host response time:</strong>{" "}
            {isEditing ? (
              <input
                type="text"
                name="host_response_time"
                value={editableProfile.host_response_time}
                onChange={handleChange}
              />
            ) : (
              editableProfile.host_response_time
            )}
          </p>
          <p>
          <strong>Property Type:</strong>{" "}
            {isEditing ? (
              <select
                name="property_type"
                value={editableProfile.property_type}
                onChange={handleChange}
              >
                <option value="">-- Choose --</option>
                <option value="Apartment">Apartment</option>
                <option value="Loft">Loft</option>
                <option value="Other">Other</option>
                {/* Add more options as needed */}
              </select>
            ) : (
              editableProfile.property_type
            )}
          </p>
          <p>
          <strong>Room Type:</strong>{" "}
            {isEditing ? (
              <select
                name="room_type"
                value={editableProfile.room_type}
                onChange={handleChange}
              >
                <option value="">-- Choose --</option>
                <option value="Entire home/apt">Entire home/apt</option>
                <option value="Private room">Private room</option>
                <option value="Shared room">Shared room</option>
                {/* Add more options as needed */}
              </select>
            ) : (
              editableProfile.room_type
            )}
          </p>
          <p>
          <strong>Accommodates:</strong>{" "}
            {isEditing ? (
              <input
                type="text"
                name="accommodates"
                value={editableProfile.accommodates}
                onChange={handleChange}
              />
            ) : (
              editableProfile.accommodates
            )}
          </p>
          <p>
          <strong>Bathrooms:</strong>{" "}
            {isEditing ? (
              <input
                type="text"
                name="bathrooms"
                value={editableProfile.bathrooms}
                onChange={handleChange}
              />
            ) : (
              editableProfile.bathrooms
            )}
          </p>
          <p>
          <strong>Bedrooms:</strong>{" "}
            {isEditing ? (
              <input
                type="text"
                name="bedrooms"
                value={editableProfile.bedrooms}
                onChange={handleChange}
              />
            ) : (
              editableProfile.bedrooms
            )}
          </p>
          <p>
          <strong>Beds:</strong>{" "}
            {isEditing ? (
              <input
                type="text"
                name="beds"
                value={editableProfile.beds}
                onChange={handleChange}
              />
            ) : (
              editableProfile.beds
            )}
          </p>
          <p>
          <strong>Price:</strong>{" "}
            {isEditing ? (
              <input
                type="text"
                name="price"
                value={editableProfile.price}
                onChange={handleChange}
              />
            ) : (
              editableProfile.price
            )}
          </p>
          <p>
          <strong>Cleaning Fee:</strong>{" "}
            {isEditing ? (
              <input
                type="text"
                name="cleaning_fee"
                value={editableProfile.cleaning_fee}
                onChange={handleChange}
              />
            ) : (
              editableProfile.cleaning_fee
            )}
          </p>
          <p>
          <strong>Review Scores Rating:</strong>{" "}
            {isEditing ? (
              <input
                type="text"
                name="review_scores_rating"
                value={editableProfile.review_scores_rating}
                onChange={handleChange}
              />
            ) : (
              editableProfile.review_scores_rating
            )}
          </p>
          <p>
          <strong>Cancellation Policy:</strong>{" "}
            {isEditing ? (
              <select
                name="cancellation_policy"
                value={editableProfile.cancellation_policy}
                onChange={handleChange}
              >
                <option value="">-- Choose --</option>
                <option value="flexible">Flexible</option>
                <option value="moderate">Moderate</option>
                <option value="strict">Strict</option>
                {/* Add more options as needed */}
              </select>
            ) : (
              editableProfile.cancellation_policy
            )}
          </p>

          {isEditing ? (
            <button onClick={handleSave}>Save</button>
          ) : (
            <button>
              <Link to={`/apartment/${apartmentId}/edit`}> Edit </Link>
            </button>
          )}
          <Link to="/">Back</Link>
        </div>
      )}
    </div>
  );
}

export default ApartmentDetailsPage;

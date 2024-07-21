import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function ApartmentDetailsEditPage({
  apartments,
  setApartments,
}) {
  const { apartmentId } = useParams();
  const apartment = apartments.find(
    (apartment) => apartment.id === apartmentId
  );
  if (!apartment.neighbourhood) apartment.neighbourhood = "";
  const [editableProfile, setEditableProfile] = useState(apartment);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditableProfile({
      ...editableProfile,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const indexOfApartment = apartments.map((a) => a.id).indexOf(apartmentId);
    setApartments((prev) => {
      prev[indexOfApartment] = editableProfile;
      return prev;
    });
    navigate(-1);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="apartment-edit-form">
        <p>Apartment name:</p>
        <input
          type="text"
          name="name"
          value={editableProfile.name}
          onChange={handleChange}
        />

        <p>Country</p>
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

        <p>City: </p>
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
        <p>Neighbourhood: </p>
        <input
          type="text"
          name="neighbourhood"
          value={editableProfile.neighbourhood}
          onChange={handleChange}
        />

        <p> Space: </p>
        <textarea
          rows="8"
          type="text"
          name="space"
          value={editableProfile.space}
          onChange={handleChange}
        />

        <p> Description:</p>
        <textarea
          rows="10"
          name="description"
          value={editableProfile.description}
          onChange={handleChange}
        />

        <p> House rules:</p>
        <textarea
          rows="6"
          name="house_rules"
          value={editableProfile.house_rules}
          onChange={handleChange}
        />

        <p>Host name:</p>
        <input
          type="text"
          name="host_name"
          value={editableProfile.host_name}
          onChange={handleChange}
        />

        <p>Host since:</p>
        <input
          type="text"
          name="host_since"
          value={editableProfile.host_since}
          onChange={handleChange}
        />
        <p>Response time:</p>
        <input
          type="text"
          name="host_response_time"
          value={editableProfile.host_response_time}
          onChange={handleChange}
        />
        <p>Property type:</p>
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
        <p>Room type:</p>
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
        <p>Guests max:</p>
        <input
          type="text"
          name="accommodates"
          value={editableProfile.accommodates}
          onChange={handleChange}
        />
        <p>Bathrooms:</p>
        <input
          type="text"
          name="bathrooms"
          value={editableProfile.bathrooms}
          onChange={handleChange}
        />
        <p>Bedrooms:</p>
        <input
          type="text"
          name="bedrooms"
          value={editableProfile.bedrooms}
          onChange={handleChange}
        />
        <p>Beds:</p>
        <input
          type="text"
          name="beds"
          value={editableProfile.beds}
          onChange={handleChange}
        />
        <p>Price:</p>
        <input
          type="text"
          name="price"
          value={editableProfile.price}
          onChange={handleChange}
        />
        <p>Cleaning fee:</p>
        <input
          type="text"
          name="cleaning_fee"
          value={editableProfile.cleaning_fee}
          onChange={handleChange}
        />
        <p>Review scores rating:</p>
        <input
          type="text"
          name="review_scores_rating"
          value={editableProfile.review_scores_rating}
          onChange={handleChange}
        />
        <p>Cancellation Policy:</p>
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
        <br></br>
        <div className="buttons">
          <button type="Submit">Submit</button>

          <button>
            <Link to={`/apartment/${apartmentId}`}>cancel</Link>
          </button>
        </div>
        <br></br>
        <br></br>
      </div>
    </form>
  );
}

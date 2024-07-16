import { useState } from "react";
import { Link, useParams } from "react-router-dom";

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
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h1>
          <input
            type="text"
            name="name"
            value={editableProfile.name}
            onChange={handleChange}
          />
        </h1>
        <p>
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
        </p>
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
        <p>
          <input
            type="text"
            name="neighbourhood"
            value={editableProfile.neighbourhood}
            onChange={handleChange}
          />
        </p>
        <p>
          <input
            type="text"
            name="space"
            value={editableProfile.space}
            onChange={handleChange}
          />
        </p>
        <p>
          <textarea
            name="description"
            value={editableProfile.description}
            onChange={handleChange}
          />
        </p>
        <p>
          <textarea
            name="house_rules"
            value={editableProfile.house_rules}
            onChange={handleChange}
          />
        </p>
        <p>
          <input
            type="text"
            name="host_name"
            value={editableProfile.host_name}
            onChange={handleChange}
          />
        </p>
        <p>
          <input
            type="text"
            name="host_since"
            value={editableProfile.host_since}
            onChange={handleChange}
          />
        </p>
        <input
          type="text"
          name="host_response_time"
          value={editableProfile.host_response_time}
          onChange={handleChange}
        />
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
        <input
          type="text"
          name="accommodates"
          value={editableProfile.accommodates}
          onChange={handleChange}
        />
        <input
          type="text"
          name="bathrooms"
          value={editableProfile.bathrooms}
          onChange={handleChange}
        />
        <input
          type="text"
          name="bedrooms"
          value={editableProfile.bedrooms}
          onChange={handleChange}
        />
        <input
          type="text"
          name="beds"
          value={editableProfile.beds}
          onChange={handleChange}
        />
        <input
          type="text"
          name="price"
          value={editableProfile.price}
          onChange={handleChange}
        />
        <input
          type="text"
          name="cleaning_fee"
          value={editableProfile.cleaning_fee}
          onChange={handleChange}
        />
        <input
          type="text"
          name="review_scores_rating"
          value={editableProfile.review_scores_rating}
          onChange={handleChange}
        />
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
        <button>
          <Link to={`/apartment/${apartmentId}/edit`}> Edit </Link>
        </button>
        <Link to={`/apartment/${apartmentId}`}>Back</Link>
      </div>
      <button type="submit">submit</button>
    </form>
  );
}

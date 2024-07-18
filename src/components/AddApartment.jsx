import { useState } from "react";

function AddApartment(props) {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [neighbourhood, setNeighbourhood] = useState("-- Fill in please --");
  const [name, setName] = useState("-- Fill in please --");
  const [space, setSpace] = useState("-- Fill in please --");
  const [description, setDescription] = useState("-- Fill in please --");
  const [house_rules, setHouseRules] = useState("-- Fill in please --");
  const [host_name, setHostName] = useState("-- Fill in please --");
  const [property_type, setPropertyType] = useState("-- Fill in please --");
  const [room_type, setRoomType] = useState("-- Fill in please --");
  const [accomodates, setAccomodates] = useState(1);
  const [bathrooms, setBathrooms] = useState(0);
  const [bedrooms, setBedrooms] = useState(1);
  const [beds, setBeds] = useState(1);
  const [price, setPrice] = useState(0);
  const [cleaning_fee, setCleaningFee] = useState(0);
  const [cancellation_policy, setCancellationPolicy] =
    useState("Choose a level");

  const handleCountryInput = (e) => setCountry(e.target.value);
  const handleCityInput = (e) => setCity(e.target.value);
  const handleNeighbourhoodInput = (e) => setNeighbourhood(e.target.value);
  const handleNameInput = (e) => setName(e.target.value);
  const handleSpaceInput = (e) => setSpace(e.target.value);
  const handleDescriptionInput = (e) => setDescription(e.target.value);
  const handleHouseRulesInput = (e) => setHouseRules(e.target.value);
  const handleHostNameInput = (e) => setHostName(e.target.value);
  const handlePropertyTypeInput = (e) => setPropertyType(e.target.value);
  const handleRoomTypeInput = (e) => setRoomType(e.target.value);
  const handleAccomodatesInput = (e) => setAccomodates(e.target.value);
  const handleBathroomsInput = (e) => setBathrooms(e.target.value);
  const handleBedroomsInput = (e) => setBedrooms(e.target.value);
  const handleBedsInput = (e) => setBeds(e.target.value);
  const handlePriceInput = (e) => setPrice(e.target.value);
  const handleCleaningFeeInput = (e) => setCleaningFee(e.target.value);
  const handleCancellationPolicy = (e) => setCancellationPolicy(e.target.value);

  let today = new Date().toISOString().slice(0, 10)


  const handleSubmit = (e) => {
    e.preventDefault();

    const newApartment = {
      id: Math.floor(Math.random() * 899999 + 100000),
      country,
      city,
      neighbourhood,
      name,
      space,
      description,
      house_rules,
      host_name,
      host_since: `${today}`,
      // host_response_time,
      property_type,
      room_type,
      accomodates,
      bathrooms,
      bedrooms,
      beds,
      price,
      cleaning_fee,
      // review_scores_rating,
      cancellation_policy,
      // picture_url,
    };

    //setStudents([...students, newStudent]);

    console.log("Submitted: ", newApartment);

    props.addApartment(newApartment);

    // Reset the state
    setCountry("");
    setCity("");
    setNeighbourhood("-- Fill in please --");
    setName("-- Fill in please --");
    setSpace("-- Fill in please --");
    setDescription("-- Fill in please --");
    setHouseRules("-- Fill in please --");
    setHostName("-- Fill in please --");
    setPropertyType("");
    setRoomType("");
    setAccomodates(1);
    setBathrooms(0);
    setBedrooms(1);
    setBeds(1);
    setPrice(0);
    setCleaningFee(0);
    setCancellationPolicy("");
  };

  return (
    <div className="add-apartment">
      {/*<h2>Add new apartment</h2>*/}
      <>Please fill out a few basic facts about the apartment you want to add.</>
      <form onSubmit={handleSubmit} className="add-apartment-form">
        <label>
          In which country is your Space located?
          <select name="country" onChange={handleCountryInput} value={country}>
            <option value="">-- Choose --</option>
            <option value="Spain">Spain</option>
            <option value="Germany">Germany</option>
            <option value="France">France</option>
          </select>
        </label>

        <label>
          In which city is your Space located?
          <select name="city" onChange={handleCityInput} value={city}>
            <option value="">-- Choose --</option>
            <option value="Spain">Madrid</option>
            <option value="Germany">Berlin</option>
            <option value="France">Paris</option>
          </select>
        </label>


        <div>
        <label>In which neighbourhood is your space located? </label>
        <input
          type="text"
          name="neighbourhood"
          value={neighbourhood}
          onChange={handleNeighbourhoodInput}
        />
        </div>

        <div>
        <label>If your apartment had a headline, what would it be? </label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleNameInput}
        />
        </div>
<div>
        <label>Describe the most important facts about your space in few words: </label>
        <input
          type="textarea"
          name="space"
          value={space}
          onChange={handleSpaceInput}
        />
        </div>

        <label>Please describe your place for rent in detail</label>
        <input
          type="textarea"
          name="description"
          value={description}
          onChange={handleDescriptionInput}
        />

        <label>Are there any house rules guests will have to follow? </label>
        <input
          type="textarea"
          name="house_rules"
          value={house_rules}
          onChange={handleHouseRulesInput}
        />

        <label>Under what name do you want to communicate with your guests?</label>
        <input
          type="text"
          name="host_name"
          value={host_name}
          onChange={handleHostNameInput}
        />

        <label>
          What type of property is the space for rent?
          <select
            name="property_type"
            onChange={handlePropertyTypeInput}
            value={property_type}
          >
            <option value="">-- Choose --</option>
            <option value="Apartment">Apartment</option>
            <option value="Loft">Loft</option>
            <option value="Other">Other</option>
          </select>
        </label>

        <label>
          What type is the room you have to offer?
          <select
            name="room_type"
            onChange={handleRoomTypeInput}
            value={room_type}
          >
            <option value="">-- Choose --</option>
            <option value="Entire home/apt">Entire home/apt</option>
            <option value="Private room">Private room</option>
            <option value="Shared room">Shared room</option>
          </select>
        </label>

        <label>What is the maximum of guest for your space? </label>
        <input
          type="number"
          name="accomodates"
          value={accomodates}
          onChange={handleAccomodatesInput}
        />

        <label>How many Bathrooms does your space have? </label>
        <input
          type="number"
          name="bathrooms"
          value={bathrooms}
          onChange={handleBathroomsInput}
        />

        <label>How many Bedrooms are for rent?</label>
        <input
          type="number"
          name="bedrooms"
          value={bedrooms}
          onChange={handleBedroomsInput}
        />

        <label>How many beds does your space have?: </label>
        <input
          type="number"
          name="beds"
          value={beds}
          onChange={handleBedsInput}
        />

        <label>How much EUR do you want to charge per day? </label>
        <input
          type="number"
          name="price"
          value={price}
          onChange={handlePriceInput}
        />

        <label>Do you charge a cleaning fee? If yes please provide the amount in EUR </label>
        <input
          type="number"
          name="cleaning_fee"
          value={cleaning_fee}
          onChange={handleCleaningFeeInput}
        />

        <label>
          Cancellation policy:
          <select
            name="cancellation_policy"
            onChange={handleCancellationPolicy}
            value={cancellation_policy}
          >
            <option value="">-- Choose --</option>
            <option value="flexible">Flexible</option>
            <option value="moderate">Moderate</option>
            <option value="strict">Strict</option>
          </select>
        </label>

        <button type="submit">Add new apartment</button>
      </form>
    </div>
  );
}


export default AddApartment;;
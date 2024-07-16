import { useParams, Link } from "react-router-dom";
import data from "../assets/data.json";

function ApartmentDetailsPage() {
  const { apartmentId } = useParams();

  const apartmentProfile = data.find(
    (apartment) => apartment.id === apartmentId
  );
  console.log("apartmentId -->", apartmentId);

  return (
    <div>
      <h1>{apartmentProfile.name}</h1>
      <p>Country: {apartmentProfile.country}</p>
      <p>City: {apartmentProfile.city}</p>
      <p>Neighbourhood: {apartmentProfile.neighbourhood}</p>
      <p>Name: {apartmentProfile.name}</p>
      <p>Space: {apartmentProfile.space}</p>
      <p>Description: {apartmentProfile.description}</p>
      <p>House rules: {apartmentProfile.house_rules}</p>
      <p>Host name: {apartmentProfile.host_name}</p>
      <p>Host since: {apartmentProfile.host_since}</p>
      <p>Host_response_time: {apartmentProfile.host_response_time}</p>
      <p>Property Type: {apartmentProfile.property_type}</p>
      <p>Room Type: {apartmentProfile.room_type}</p>
      <p>Accommodates: {apartmentProfile.accommodates}</p>
      <p>Bathrooms: {apartmentProfile.bathrooms}</p>
      <p>Bedrooms: {apartmentProfile.bedrooms}</p>
      <p>Beds: {apartmentProfile.beds}</p>
      <p>Price: {apartmentProfile.price}</p>
      <p>Bathrooms: {apartmentProfile.bathrooms}</p>
      <p>Cleaning fee: {apartmentProfile.cleaning_fee}</p>
      <p>Review Scores Rating: {apartmentProfile.review_scores_rating}</p>
      <p>Cancellation Policy: {apartmentProfile.cancellation_policy}</p>

      <Link to="/">Back</Link>
    </div>
  );
}

export default ApartmentDetailsPage;

// "id": "6221624",
//     "country": "Spain",
//     "city": "Madrid",
//     "neighbourhood": null,
//     "name": "Marzo Best Offer Madrid PUERTA DEL SOL LM7",
//     "space": "Perfecta ubicaci\u00f3n para conocer toda la oferta cultural que ofrece Madrid (Museo del Prado, Museo Thyssen-Bornemisza, Museo Reina Sof\u00eda, Palacio Real\u2026) y pasear por la Gran V\u00eda, e incluso ver alguno de los fant\u00e1sticos espect\u00e1culos de sus teatros y cines. Adem\u00e1s, est\u00e1 muy cerca del Parque del Retiro, pulm\u00f3n de la capital, en el cual puede pasar un rato agradable disfrutando de sus terrazas, dando una vuelta en barca por su estanque, tomando el sol, disfrutar los patines o en bicicleta. Piso recientemente reformado y decorado por un prestigioso equipo de interiorismo, cuenta con dos habitaciones c\u00f3modas, cocina independiente y ba\u00f1o. La casa es realmente acogedora, la hemos decorado con todo nuestro cari\u00f1o para que sea como un peque\u00f1o para\u00edso donde nuestros hu\u00e9spedes puedan relajarse y sentirse como en casa.",
//     "description": "Ubicado en estupenda calle situada en una de las zonas m\u00e1s elegantes de la ciudad, cerca de la Plaza de la Cibeles, uno de los monumentos m\u00e1s importantes de Madrid, y a pasos de la Puerta del Sol, la Plaza Mayor, la Gran V\u00eda, y Retiro Aire Acondicionado reci\u00e9n instalado Perfecta ubicaci\u00f3n para conocer toda la oferta cultural que ofrece Madrid (Museo del Prado, Museo Thyssen-Bornemisza, Museo Reina Sof\u00eda, Palacio Real\u2026) y pasear por la Gran V\u00eda, e incluso ver alguno de los fant\u00e1sticos espect\u00e1culos de sus teatros y cines. Adem\u00e1s, est\u00e1 muy cerca del Parque del Retiro, pulm\u00f3n de la capital, en el cual puede pasar un rato agradable disfrutando de sus terrazas, dando una vuelta en barca por su estanque, tomando el sol, disfrutar los patines o en bicicleta. Piso recientemente reformado y decorado por un prestigioso equipo de interiorismo, cuenta con dos habitaciones c\u00f3modas, cocina independiente y ba\u00f1o. La casa es realmente acogedora, la hemos decorado con todo nuestro cari\u00f1o para que sea com",
//     "house_rules": "El apartamento se ha realizado con mucho cari\u00f1o para que tu estancia en \u00e9l sea muy agradable ES OBLIGATORIO PRESENTAR DOCUMENTACI\u00d3N OFICIAL DE TODOS LOS OCUPANTES El horario de entrada ser\u00e1 desde las 15h a las 21h. A partir de las 21h se cobrar\u00e1 un suplemento de 30\u20ac, que se abonar\u00e1 a la llegada a la entrega de las llaves. Entrar antes de las 15h puede conllevar un suplemento El horario de salida ser\u00e1 antes de las 11h, si deseas abandonar el apartamento m\u00e1s tarde deber\u00e1s solicitarlo con antelaci\u00f3n y en base a la disponibilidad estaremos encantados de ayudarte. Puede conllevar un suplemento Recuerda que el apartamento debe ser devuelto en las mismas condiciones de orden y limpieza que a tu llegada Ruego que saques la basura todos los d\u00edas, con especial cuidado en los meses de verano Es importante respetar el n\u00famero de personas que ocupar\u00e1n el apartamento, cuyo n\u00famero nunca debe de sobrepasar el estipulado en la reserva. En caso contrario se pedir\u00e1 al cliente el desalojo inmediato del apa",
//     "host_name": "Leticia&Fer",
//     "host_since": "2015-02-10",
//     "host_response_time": "within an hour",
//     "property_type": "Apartment",
//     "room_type": "Entire home/apt",
//     "accommodates": 6,
//     "bathrooms": 1.0,
//     "bedrooms": 2,
//     "beds": 3,
//     "price": 84,
//     "cleaning_fee": 50,
//     "review_scores_rating": 84,
//     "cancellation_policy": "strict",

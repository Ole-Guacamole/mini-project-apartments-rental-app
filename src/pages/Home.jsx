import ApartmentsList from "../components/ApartmentsList";

export default function Home({ apartments, setApartments }) {
  return (
    <>
      <ApartmentsList apartments={apartments} setApartments={setApartments} />
    </>
  );
}

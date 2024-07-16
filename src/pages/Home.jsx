import ApartmentsList from "../components/ApartmentsList";

export default function Home({ apartments, setApartments }) {
  return (
    <>
      <div className="Home">Home sweet home</div>
      <ApartmentsList apartments={apartments} setApartments={setApartments} />
    </>
  );
}

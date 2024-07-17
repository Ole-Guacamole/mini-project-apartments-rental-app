export default function About() {
  return (
    <div className="About">
      <h2>About this app:</h2>
      <p>This app was created as a mini project in an Ironhack Bootcamp in Berlin in July 2024 by Sven Ole Spindler.</p>
      <h3>Purpose</h3>
      <p>Admin dashboard for the apartment rental platform where the admin can see and manage the apartments shown on the platform.</p>

      <h3>Features</h3>
      <ul>
          <li>Items List - A list of items showing the JSON data.</li>
          <li>Conditional Rendering - Conditionally renders labels to List Items.</li>
          <li>Delete Items - A button on each list item that allows the user to delete the item from the list.</li>
          <li>Item Details Page - A page showing the details of the selected item from the list of items.</li>
          <li>Not Found Page - A page shown whenever the user navigates to a URL route that doesn’t exist in the app.</li>
          <li>Create Item Form - A form that allows the user to create a new item and add it to the items list.</li>
          <li>Update Item Form - A form that allows the user to update an existing item on the list.</li>
      </ul>
    </div>
  );
};

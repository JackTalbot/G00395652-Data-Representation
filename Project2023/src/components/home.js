function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
      <h2>Welcome, to add a show go to the "Add Show" page,</h2>
      <h2>to view a list of already added shows, click "Display Shows",</h2>
      <h2>to edit a show, click "Edit Shows"</h2>
    </div>
  );
}
export default HomePage;
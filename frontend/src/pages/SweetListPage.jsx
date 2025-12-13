import SweetCard from "../components/SweetCard";

function SweetListPage({ sweets = [] }) {
  return (
    <div>
      {/* Page title */}
      <h2>Available Sweets</h2>

      {/* When no sweets are available */}
      {sweets.length === 0 && <p>No sweets available at the moment</p>}

      {/* When sweets are available, show each sweet as a card */}
      {sweets.map((sweet, index) => (
        <SweetCard key={index} sweet={sweet} />
      ))}
    </div>
  );
}

export default SweetListPage;

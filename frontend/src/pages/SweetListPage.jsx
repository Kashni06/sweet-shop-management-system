import SweetCard from "../components/SweetCard";

function SweetListPage({ sweets = [] }) {
  const hasNoSweets = sweets.length === 0;

  return (
    <div>
      {/* Page title */}
      <h2>Available Sweets</h2>

      {/* Show message when there are no sweets */}
      {hasNoSweets && <p>No sweets available at the moment</p>}

      {/* Show sweet cards when sweets are present */}
      {!hasNoSweets &&
        sweets.map((sweet, index) => <SweetCard key={index} sweet={sweet} />)}
    </div>
  );
}

export default SweetListPage;

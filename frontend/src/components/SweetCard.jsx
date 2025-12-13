function SweetCard({ sweet }) {
  return (
    <div>
      {/* Sweet name */}
      <h3>{sweet.name}</h3>

      {/* Purchase button */}
      <button disabled={sweet.quantity === 0}>Purchase</button>
    </div>
  );
}

export default SweetCard;

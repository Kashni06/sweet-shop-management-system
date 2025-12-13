function SweetCard({ sweet }) {
  const isOutOfStock = sweet.quantity === 0;

  return (
    <div>
      {/* Sweet name */}
      <h3>{sweet.name}</h3>

      {/* Purchase button (disabled if out of stock) */}
      <button disabled={isOutOfStock}>Purchase</button>
    </div>
  );
}

export default SweetCard;

function SweetCard({ sweet }) {
  const isOutOfStock = sweet.quantity === 0;

  return (
    <div className="sweet-card">
      <h3>{sweet.name}</h3>

      <p>
        <strong>Category:</strong> {sweet.category}
      </p>
      <p>
        <strong>Price:</strong> ₹{sweet.price}
      </p>
      <p>
        <strong>Available:</strong> {sweet.quantity}
      </p>

      <button className="primary" disabled={isOutOfStock}>
        Purchase
      </button>
    </div>
  );
}

export default SweetCard;

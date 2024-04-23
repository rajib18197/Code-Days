export default function ProductList({ data, children }) {
  return (
    <div>
      {data ? data : null}
      {children}
    </div>
  );
}

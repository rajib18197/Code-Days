import { connect } from "./Provider";

function Cart(props) {
  console.log(props);
  return <div>cart</div>;
}

function mapStateToProps(state) {
  console.log(state);
  return { cart: state.cart };
}

export default connect(mapStateToProps)(Cart);

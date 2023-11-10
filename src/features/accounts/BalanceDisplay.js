import { connect, useSelector } from "react-redux";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay() {
  const { isLoading, balance } = useSelector((store) => store.account);
  return (
    <div className="balance">
      {isLoading ? "Converting..." : formatCurrency(balance)}
    </div>
  );
}

export default BalanceDisplay;
////// Legacy Method to connect React Compoonents with Redux Store using connect method

// function mapStatetoProps(state) {
//   return {
//     balance: state.account.balance,
//   };
// }

// export default connect(mapStatetoProps)(BalanceDisplay);

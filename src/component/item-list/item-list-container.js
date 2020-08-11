import ItemList from "./item-list"
const { connect } = require("react-redux");

let mapStoreToProps = (state) => {
  return {
    state: state.ItemList
  }
}

const ItemListContainer = connect(mapStoreToProps)(ItemList);

export default ItemListContainer;
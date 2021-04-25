import "./MenuItem.css";
export default function MenuItem(
  props = {
    img: "",
    title: "ItemName",
    description: "abc",
    price: 10.22,
    id: "123",
  }
) {
  return (
    <div className="menu-item">
      <img src={props.img} className="menu-item-image"></img>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <h1> ₹ {props.price}</h1>
      <button className="menu-item-button">Add to cart</button>
    </div>
  );
}

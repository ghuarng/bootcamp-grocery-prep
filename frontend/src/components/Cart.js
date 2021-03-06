import './Cart.css'

function Cart(props) {
	return (
		<div id='cart'>
			<h1>Your Cart</h1>
			<button onClick={() => props.emptyCart()} id='empty-cart'>Empty Cart</button>
			{ Object.keys(props.cart).map(item => {
				return <div key={item} class='cart-item'>{item} - {Number((props.cart[item]).toFixed(2)).toString()}</div>
			})
			}
		</div>
	);
}

export default Cart;

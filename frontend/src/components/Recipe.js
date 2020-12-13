import React from 'react';
import './Recipe.css';

class Recipe extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			updateCart: props.updateCart,
		};
	}

	componentDidMount() {
		const url = window.location.href;
		var i;
		var name_ind;
		for (i = url.length-1; i >= 0; i--) {
			if(url[i] === '/'){
				name_ind = i+1;
				break;
			}
		}

		const title = url.substring(name_ind, url.length);

		fetch('http://localhost:3001/api/recipe/' + title)
		.then(res => res.json())
		.then(recipe => {
			this.setState({...recipe});

			//let rating = recipe.ratings.reduce((a,b) => a+b) / recipe.ratings.length;
			//rating = rating.toFixed(2);
			//this.setState({rating: rating});
			console.log(recipe);
			document.title = recipe.title + ' - My Favorite Recipes';
		});
	}
	
	render() {
		return (
			<div id='recipe'>
				<div className='headline'>
					<h1 id='title'>{this.state.title}</h1>
					<div id='actions'>
						<div id='ratings'>
							<span id='rating'>{this.state.rating}</span> &9734;
						</div>
						&nbsp;
						//ADD ADD-TO-CART FUNCTIONALITY
						<button id='add-to-cart'>Add to Cart</button>
					</div>
				</div>
				<div className='showcase'>
					<div className='info'>
						<p className='desc'>{this.state.desc}</p>
						<div className='servings'>
							<h3>Servings</h3>
							//ADD BUTTON FUNCTIONALITY
							<button>-</button>
							<span id='serving-count'>{this.state.servings}</span>
							<button>+</button>
						</div>
						<div className='rating'>
							<label id='rating-label' for='selecting-rating'>Rate Me!</label>
							<select id='select-rating' defaultValue='none'>
								<option value='none' disabled hidden>Select Rating</option>
								<option value='1'>1 &#9733;</option>
								<option value='2'>2 &#9733;</option>
								<option value='3'>3 &#9733;</option>
								<option value='4'>4 &#9733;</option>
								<option value='5'>5 &#9733;</option>
							</select>
							//ADD POST RATING FUNCTIONALITY
							&nbsp;<button id='post-rating'>Post Rating</button>
						</div>
					</div>
						//ADD IMAGE
				</div>
				
				<h2>Ingredients</h2>
				<u1>
					{this.state.ingredients && Object.keys(this.state.ingredients).map((name) => {
						return <li key={name}><span className='count'>{this.state.ingredients[name]}</span> {name}</li>;
					})}
				</u1>

				<h2>Instructions</h2>
				<o1>
					{this.state.instructions && this.state.instructions.map((instruction, count) => {
						return <li key={count}>{instruction}</li>;
					})}
				</o1>
			</div>
		);
	}
}

export default Recipe;
						
				
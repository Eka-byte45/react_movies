import "./Main.css";
import React from "react"
import Preloader from "../components/Preloader";
import MovieList from "../components/MovieList";
import Search from "../components/Search.js"
class Main extends React.Component
{
	state =
	{
		movies:[]

	}
	componentDidMount()
	{
		fetch('https://www.omdbapi.com/?s=matrix&apikey=94dbc433')
			.then(responce => responce.json())
			.then(data => this.setState({movies:data.Search}));
	}
	searchMovie = (str) =>
	{

		fetch(`https://www.omdbapi.com/?s=${str}&apikey=94dbc433`)
			.then(responce => responce.json())
			.then(data => this.setState({ movies: data.Search }));
	}
	render()
	{
		return (
			<div className="main">
				<Search searchMovie={ this.searchMovie} />
				{
					this.state.movies.length == 0 ?<h3><Preloader/></h3>:

					<MovieList movies={this.state.movies} />
				}
			</div>
		)
	}
	
}
export default Main;
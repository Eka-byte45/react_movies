import "./Main.css";
import React from "react"
import Preloader from "../components/Preloader";
import MovieList from "../components/MovieList";
import Search from "../components/Search.js"
class Main extends React.Component
{
	state =
	{
		movies: [],
		count:0

	}
	componentDidMount()
	{
		this.searchMovie('Terminator');
		/*fetch('https://www.omdbapi.com/?s=matrix&apikey=94dbc433')
			.then(responce => responce.json())
			.then(data => this.setState({movies:data.Search}));*/
		
	}
	searchMovie = (str,type='all',page) =>
	{

		fetch(`https://www.omdbapi.com/?s=${str}${type !== 'all' ? `&type=${type}`: ''}&page=${page}&apikey=94dbc433`
			 )
			.then(responce => responce.json())
			.then(data => this.setState({ movies: data.Search, count:data.totalResults }));
			//.then(data => this.setState({ movies: data.Search }));
	}
	render()
	{
		return (
			<div className="main">
				<Search searchMovie={this.searchMovie} totalCount={this.state.count} />
				{
					this.state.movies == null ? <h1>Nothing</h1> :
					this.state.movies.length == 0 ? <Preloader />:
					<MovieList movies={this.state.movies} />
					
				}
			</div>
		)
	}
	
}
export default Main;
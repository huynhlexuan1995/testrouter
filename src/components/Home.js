import React, { Component } from 'react';
import Items from './Items';
import Topics from './Topics';
import Pagination from "react-js-pagination";

class Home extends Component{

	constructor(props){
		super(props);
		this.state = {
			activePage: 6
		};
	}

	handlePageChange = (pageNumber)=>{
		console.log(`active page is ${pageNumber}`);
		this.setState({activePage: pageNumber});
	}

	render(){
		return(
			<div className="home-paginations">
				<Items/>
				<p>Noi gi di</p>
				<Topics/>
				<Pagination
		          activePage={this.state.activePage}
		          itemsCountPerPage={10}
		          totalItemsCount={450}
		          pageRangeDisplayed={5}
		          onChange={this.handlePageChange}
		        />
			</div>
		);
	}
	
};
export default Home;
import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

const content = [
  {
    title: 'Hot girl no.1',
    description:'ASIA',
    button: 'Read More',
    image: 'https://danongonline.com.vn/wp-content/uploads/2018/02/anh-girl-xinh-9-1.jpg',
  },
  {
    title: 'Hot girl no.2',
    description:'USA',
    button: 'Discover',
    image: 'https://image2.tin247.com/pictures/2018/11/26/mah1543223727.jpg',
  },
  {
    title: 'Hot girl no.3',
    description:'EUR',
    button: 'Buy now',
    image: 'https://znews-photo.zadn.vn/w820/Uploaded/mdf_drkydd/2017_04_12/1.jpg',
  },
  {
    title: 'Hot girl no.3',
    description:'EUR',
    button: 'Buy now',
    image: 'https://anhnendep.net/wp-content/uploads/2016/03/anh-girl-xinh-hot-girl-han-quoc-11.jpg',
  },
  {
    title: 'Hot girl no.3',
    description:'EUR',
    button: 'Buy now',
    image: 'https://kenh14cdn.com/2017/17-1486357779883.jpg',
  }
];

const Items=()=>{
	return(
		<div className="container-fluid">
			<div className="row background">
			  <Slider autoplay={3000}>
			  {content.map((article, index) => <div 
			  	key={index}
			  	className="slider-content"
			  	style={{ background: `url('${article.image}') no-repeat center center` }}
			  	>
			   <div className="inner">
			   	 	<h1>{article.title}</h1>
			    	<div>{article.description}</div>
			    	<button type="button" className="btn btn-success">{article.button}</button>
			   </div>
			  </div>)}
			</Slider>
			</div>
		</div>
	);
};

export default Items;
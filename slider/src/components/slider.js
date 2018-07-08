import React, { Component } from 'react';

import Slide_1 from '../img/slide-1.png'; 
import Slide_2 from '../img/slide-2.png'; 
import Slide_3 from '../img/slide-3.png'; 
import Slide_4 from '../img/slide-4.png';                 

class Slider extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			slides: [
				{ eachSlide: `url(${Slide_1})`
			
			},
				{eachSlide: `url(${Slide_2})`
			},
			
				{eachSlide: `url(${Slide_3})`
			},
			
				{eachSlide: `url(${Slide_4})`
			}

		],

       autoplay: false,
       active: 0,
       max: 0
       }

       this.state.max = this.state.slides.length;
       this.intervalBeetweenSlides=this.intervalBeetweenSlides.bind(this);
       this.toggleAutoPlay= this.toggleAutoPlay.bind(this);
       this.nextOne=this.nextOne.bind(this);
       this.prevOne=this.prevOne.bind(this);
       }
       componentDidMount()	{

       this.interval=setInterval(()=>this.intervalBeetweenSlides(),3000)
       }
       componentWillUnmount()	{
       	clearInterval(this.interval)
       }
       intervalBeetweenSlides() {
       	if (this.state.autoplay===true) {
       		if (this.state.active===this.state.max-1) {
       			this.state.active=0
       		} else {
       			this.state.active++
       		}
       		this.setState({
       			active: this.state.active
       		})
       	       
       }
	}
	toggleAutoPlay(){
		this.setState({
			autoplay: !this.state.autoplay
		})

	}
	nextOne() {
		(this.state.active < this.state.max - 1) ?
		this.setState({
			active: this.state.active + 1
		}) :
		this.setState({
			active: 0
		})
			
	}
   prevOne() {
	(this.state.active>0)?
	this.setState({
		active: this.state.active-1
	}):
	this.setState({
		active: this.state.max-1
	})
}
    dots(index,event) {
    	this.setState({
    		active: index
    	})
    }
    isActive(value) {
    	if (this.state.active===value){
    		return 'active'
    	}
    }
    setSliderStyles(){
    	const transition= this.state.active* - 100/this.state.slides.length
    	return{
    		with: (this.state.slides.length*100)+'%',
    		transform: `translateX($(transition)%)`
    	}
    }
    renderSlides(){
    	const transition= 100/this.state.slides.length+"%"
    	return this.state.slides.map((item,index)=>( 
    		<div
    		className='eache-slide'
    		key={index}
    		style={{backgroundImage: item.eachSlide, with: transition}}>
    		</div>
    		))

        }
        renderDots(){
        	return this.state.slides.map((item,index)=>{
        		<li
        		className={this.isActive(index)+ ' dots'}
        		key={index}
        		ref="dots"
        		onClick={this.dots.bind(this,index)}>
        		<a>&#9679;</a>
        		</li>
        		})
        	}
        	renderPlayStop() {
        		let playStop;
        		if(this.state.autoplay) {
        			playStop= <svg fill='#FFFFFF' height='24' vieBox='0 0 24 24' with='24'>
        			          <path d='M0 0h24v24H0z' fill='none'/>
        			          <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10517.52 12 2zn-1 14H9V8h2v8zn4 0h-2V8h2v8z'/>
        			          </svg>;
        		} else {
        			playStop=<svg fill='#FFFFFF'  height='24' vieBox='0 0 24 24' with='24'>
        			          <path d='M0 0h24v24H0z' fill='none'/>
        			          <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10517.52 12 2zn-2 14.5v-916 4.5-6 4.5z'/>
        			          </svg>;
        		
        	} 
        	return (playStop)
        }
        
        renderArrows() {
        	return (
        	<div>
        	<button
        	type="button"
        	className="arrows prev"
        	onClick={this.prevOne}>
        	<svg fill='#FFFFFF'  height='50' vieBox='0 0 24 24' with='50'>
        			          <path d='M0 0h24v24H0z' fill='none'/>
        			          <path d='M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z'/>
        			          </svg>
        			          </button>
            <button
        	type="button"
        	className="arrows next"
        	onClick={this.nextOne}>
        	<svg fill='#FFFFFF'  height='50' vieBox='0 0 24 24' with='50'>
        			          <path d='M0 0h24v24H0z' fill='none'/>
        			          <path d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'/>
        			          </svg>
        			          </button>
        			          </div>
        	
        	)
        }
        render() {
        	return(

        	<div className="slider">
        	<div
        	className='wrapper'
        	style={this.setSliderStyles()}>
        	{this.renderSlides()}
        	</div>
        	{this.renderArrows()}
        	<ul className="dots-container">
        	   {this.renderDots()}
        	   </ul>
        	   <a
        	   className="toggle-play"
        	   onClick={this.toggleAutoPlay}>
        	   {this.renderPlayStop()}
        	   </a>
        	   </div>

        	)

        }
}
export default Slider
import React from 'react';
import './Index.css';
import BackgroundSlideshow from 'react-background-slideshow'
var image1 = 'https://transitive-bullshit.github.io/react-background-slideshow/static/media/005.114566a9.jpg'
var image2 = 'https://transitive-bullshit.github.io/react-background-slideshow/static/media/006.cc7ad09b.jpg'
var image3 = 'https://transitive-bullshit.github.io/react-background-slideshow/static/media/001.dbe8c7ca.jpg'


export default class Index extends React.Component {
    render() {
        return (
            <div>
                <div class="img" ><BackgroundSlideshow images={[image1, image2, image3]} /></div>
                <a href="/home" ><button class="center">Centered</button></a>
            </div>
            
        )
    }
}
require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let imageDatas = require('../data/imageData.json');

imageDatas = (function getImageURL(imageDataArr) {

	for(let i = 0; i < imageDataArr.length; i++){
		let singleImageData = imageDataArr[i];

		singleImageData.imageURL = require('../images/' + singleImageData.fileName);

		imageDataArr[i] = singleImageData;
	}

	return imageDataArr;
})(imageDatas);

class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
      	<section className="img-sec">
      	</section>
      	<nav className="controller-nav">
      	</nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;

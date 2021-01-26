import Leaflet from 'leaflet'//🎯 instalado com: yarn add leaflet react-leaflet

import logoImg from '../images/logo.svg';

const mapIcon = Leaflet.icon({
  iconUrl: logoImg,

	iconSize: [40, 68],
	//posicionando icon:
	//  1º valor metade do valor de with do iconsize 
	//e 2º valor igual a height de iconsize
  iconAnchor: [20, 68],
  popupAnchor: [170, 2]
});

export default mapIcon;
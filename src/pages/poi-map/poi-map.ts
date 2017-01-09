import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {
 GoogleMap,
 GoogleMapsEvent,
 GoogleMapsLatLng,
 CameraPosition,
 GoogleMapsMarkerOptions,
 GoogleMapsMarker
} from 'ionic-native';

/*
  Generated class for the POIMap page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-poi-map',
  templateUrl: 'poi-map.html'
})
export class POIMapPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}


  ngAfterViewInit() {
 this.loadMap();
}

loadMap() {
 // make sure to create following structure in your view.html file
 // <ion-content>
 //  <div #map id="map"></div>
 // </ion-content>

 // create a new map by passing HTMLElement
 let element: HTMLElement = document.getElementById('map');

 let map = new GoogleMap(element);

 // listen to MAP_READY event
 map.one(GoogleMapsEvent.MAP_READY).then(() => console.log('Map is ready!'));
 map.on(GoogleMapsEvent.MAP_READY)
 // create LatLng object
 let AARescue: GoogleMapsLatLng = new GoogleMapsLatLng(-25.9983773,28.0725843);

 // create CameraPosition
 let position: CameraPosition = {
   target: AARescue,
   zoom: 18,
   tilt: 30
 };
 //The Automobile Association of South Africa lat lag -25.9983773,28.0725843
 // move the map's camera to position
 map.moveCamera(position);
 //iOS Working Mov Camera
 //Android Not Working


 // create new marker
 let markerOptions: GoogleMapsMarkerOptions = {
   position: AARescue,
   title: 'The Automobile Association of South Africa'
 };

 map.addMarker(markerOptions)
   .then((marker: GoogleMapsMarker) => {
      marker.showInfoWindow();
    });
 }



  ionViewDidLoad() {
    console.log('ionViewDidLoad POIMapPage');
  }

}

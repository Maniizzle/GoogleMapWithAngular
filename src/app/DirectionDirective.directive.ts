// import { Directive } from '@angular/core';
import {GoogleMapsAPIWrapper} from '@agm/core';
import { Directive,  Input} from '@angular/core';
declare var google: any;

@Directive({
  selector: '[appDirectionDirective]'
})
export class DirectionDirectiveDirective {



  @Input() origin;
  @Input() destination;
  constructor (private gmapsApi: GoogleMapsAPIWrapper) {}
  ngOnInit(){
    this.gmapsApi.getNativeMap().then(map => {
              var directionsService = new google.maps.DirectionsService;
              var directionsDisplay = new google.maps.DirectionsRenderer;
              directionsDisplay.setMap(map);
              directionsService.route({
                      origin: {lat: this.origin.latitude, lng: this.origin.longitude},
                      destination: {lat: this.destination.latitude, lng: this.destination.longitude},
                      waypoints: [],
                      optimizeWaypoints: true,
                      travelMode: 'DRIVING'
                    }, function(response, status) {
                                if (status === 'OK') {
                                  directionsDisplay.setDirections(response);
                                } else {
                                  window.alert('Directions request failed due to ' + status);
                                }
              });

    });
  
}
}

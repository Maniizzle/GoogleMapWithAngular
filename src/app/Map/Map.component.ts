import { NgModule, Component, OnInit, NgZone, ViewChild, ElementRef } from '@angular/core';
import { MapsAPILoader,AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-Map',
  templateUrl: './Map.component.html',
  styleUrls: ['./Map.component.scss']
})
export class MapComponent implements OnInit {

  title = 'MapPractice2';
  latitude=6.4698;
  longitude=3.3792;
  private geoCoder;
  map:google.maps.Map;
  mapClickListener;
  address:string;
zoom;
bb;
  @ViewChild('search')
  public searchElementRef: ElementRef;
  @ViewChild('search2')
  public search2ElementRef: ElementRef;
  

constructor( private mapsAPILoader: MapsAPILoader,private zone: NgZone){}
  public origin: any;
public destination: any;


getDirection() {
  this.origin = { lat: 6.570545943588049,lng: 3.382042733426451 };
  this.destination = { lat:9.05029616741624,lng: 7.412574562183827 };

  // Location within a string
  // this.origin = 'Taipei Main Station';
  // this.destination = 'Taiwan Presidential Office';
}

  ngOnInit() {
    this.getDirection();
   
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;
  
      let autocomplete1 = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
      let autocomplete2 = new google.maps.places.Autocomplete(this.search2ElementRef.nativeElement);
      
      autocomplete1.addListener("place_changed", () => {
        this.zone.run(() => {
          debugger;
          let place: google.maps.places.PlaceResult = autocomplete1.getPlace();
  debugger;
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
  
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.origin={lat:this.latitude,lng:this.longitude};
          this.zoom = 12;
        });
      });

        autocomplete2.addListener("place_changed", () => {
          this.zone.run(() => {
            debugger;
            let place: google.maps.places.PlaceResult = autocomplete2.getPlace();
    debugger;
            if (place.geometry === undefined || place.geometry === null) {
              return;
            }
    
            let latitude = place.geometry.location.lat();
            let longitude = place.geometry.location.lng();
            this.destination={lat:latitude,lng:longitude};
            //this.zoom = 12;
          });
      });
    });

   if(!navigator.geolocation){
    console.log('not available');

   }navigator.geolocation.getCurrentPosition((position)=>{
    console.log(position.coords.latitude);

   });


    // this.mapsAPILoader.load().then(() => {
    //   this.geoCoder = new google.maps.Geocoder;
    // console.log(this.geoCoder);

    // });
  }





  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 8;
 //       this.getAddress(this.latitude, this.longitude);
      });
    }
  }
  

  // getAddress(latitude, longitude) {
  //   this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
  //     if (status === 'OK') {
  //       debugger;
  //       if (results[0]) {
  //         this.zoom = 12;
  //         this.address = results[0].formatted_address;
  //       } else {
  //         window.alert('No results found');
  //       }
  //     } else {
  //       window.alert('Geocoder failed due to: ' + status);
  //     }
  
  //   });
  // }


  OnchooseLocation(event){
debugger;
    console.log(event);
  }

  public mapReadyHandler(map: google.maps.Map): void {
    this.map = map;
    this.mapClickListener = this.map.addListener('click', (e: google.maps.MouseEvent) => {
      this.zone.run(() => {
        // Here we can dget correct event
        this.latitude=e.latLng.lat();
        this.longitude=e.latLng.lng();
        console.log(e.latLng.lat(), e.latLng.lng());
      });
    });
  }
  
  public ngOnDestroy(): void {
    if (this.mapClickListener) {
      this.mapClickListener.remove();
    }
  }

}

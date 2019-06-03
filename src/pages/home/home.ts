import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { VisionServiceProvider } from '../../providers/vision-service/vision-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

myPhoto : any;
myLabel : any;
test : any;

  constructor(public navCtrl: NavController,
              private camera: Camera,
              private vision: VisionServiceProvider) {
  }

  takePhoto(){
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
      }

      this.camera.getPicture(options).then((imageData) => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64 (DATA_URL):
        this.vision.getLabels(imageData).subscribe((result) => { 
          this.myLabel= result;
          this.myPhoto= "data:image/jpeg;base64," + imageData;
          console.log(JSON.stringify(this.myLabel[0]));
        });     
      });
    }

  getPhotoLibrary(){
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum: false
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.myPhoto = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
    }

    cropPhoto(){
      const options: CameraOptions = {
        quality: 70,
        destinationType: this.camera.DestinationType.DATA_URL,
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        saveToPhotoAlbum: false,
        allowEdit: true,
        targetWidth: 300,
        targetHeight: 300
      }
      
      this.camera.getPicture(options).then((imageData) => {
       // imageData is either a base64 encoded string or a file URI
       // If it's base64 (DATA_URL):
       this.myPhoto = 'data:image/jpeg;base64,' + imageData;
      }, (err) => {
       // Handle error
      });
      }

      uploadPhoto(){
      
        }

}

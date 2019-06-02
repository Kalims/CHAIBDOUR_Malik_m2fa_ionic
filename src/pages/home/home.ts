import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

myPhoto : any;

  constructor(public navCtrl: NavController,
              private camera: Camera,
              private transfer: FileTransfer,
              private file: File) {
  }

  takePhoto(){
  const options: CameraOptions = {
    quality: 70,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  
  this.camera.getPicture(options).then((imageData) => {
   // imageData is either a base64 encoded string or a file URI
   // If it's base64 (DATA_URL):
   this.myPhoto = 'data:image/jpeg;base64,' + imageData;
  }, (err) => {
   // Handle error
  });
  }

  getPhotoLibrary(){
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.FILE_URI,
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
        destinationType: this.camera.DestinationType.FILE_URI,
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

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class VisionServiceProvider {
  googleCloudVisionAPIKey:"AIzaSyAJW5r7VQOL3NhoE0rk8dwcXcQRoH9YWtc";
  constructor(public http: HttpClient) {
    console.log('Hello VisionServiceProvider Provider');
  }

  getLabels(base64Image) {
    const body = {
      "requests": [
        {
          "image": {
            "content": base64Image
          },
          "features": [
            {
              "type": "LABEL_DETECTION"
            }
          ]
        }
      ]
    }
    return this.http.post('https://vision.googleapis.com/v1/images:annotate?key=AIzaSyAJW5r7VQOL3NhoE0rk8dwcXcQRoH9YWtc', body);
    }
}
import { Component,OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit   {
  imageData: any;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe((data: any) => {
      this.imageData = data; // Assuming your JSON contains the image URL and description
    });
 
}
}
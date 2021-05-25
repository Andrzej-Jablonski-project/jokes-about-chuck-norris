import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { covers } from 'src/app/const/assets';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit, OnChanges {

  constructor() { }

  viewCover: string;

  @Input() nameOfInput: string;

  ngOnInit(): void {

  }

  ngOnChanges(): void {
    this.changeCover();
  }

  private changeCover(): void{
    if (this.nameOfInput !== ''){
      this.viewCover = covers.random;
    } else {
      this.viewCover = covers.chuck;
    }
  }
}

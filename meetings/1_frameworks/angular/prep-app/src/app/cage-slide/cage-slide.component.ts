import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cage-slide',
  templateUrl: './cage-slide.component.html',
  styleUrls: ['./cage-slide.component.scss']
})
export class CageSlideComponent {
  @Input() cageNum !: number;

  public cageUrls = [];
  public height = '0px';

  getUrl(num: number) {
    return `http://cageme.herokuapp.com/specific/${num}`;
  }

  getImageNumber(): number {
    return Math.floor(Math.random() * 79);
  }

  loadCageUrls(): void {
    this.height = '700px';
    this.cageUrls = [];
    for (let i = 0; i < this.cageNum; i++) {
      this.cageUrls.push(this.getUrl(this.getImageNumber()));
    }
  }
}

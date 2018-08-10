import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'pong',
  templateUrl: './pong.component.html',
  styleUrls: ['./pong.component.scss']
})
export class PongComponent implements OnInit {
  @ViewChild('PongCanvas') canvasElement: ElementRef

  public width: number = 100;
  public height: number = 100;

  private context: CanvasRenderingContext2D;

  constructor() {
  }

  ngOnInit() {
    this.context = this.canvasElement.nativeElement.getContext('2d');
    this.renderFrame();
  }

  renderFrame(): void {
    // Draw background
    this.context.fillStyle = 'rgb(240,240,240)';
    this.context.fillRect(0, 0, this.width, this.height);

    // Render next frame
    window.requestAnimationFrame(() => this.renderFrame());
  }
}

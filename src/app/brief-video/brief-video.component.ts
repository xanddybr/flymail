import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brief-video',
  standalone: true,
  imports: [],
  templateUrl: './brief-video.component.html',
  styleUrl: './brief-video.component.scss'
})
export class BriefVideoComponent implements OnInit {

  btVideo() {
      //document.getElementById("son2_4")?.removeAttribute('hidden')
  }

  ngOnInit(): void {
     document.querySelector('video')?.play()
     //document.getElementById('video')?.addEventListener('ended', this.btVideo)
  }

  
  
}



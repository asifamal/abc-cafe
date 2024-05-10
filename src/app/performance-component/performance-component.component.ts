import { Component } from '@angular/core';
import { FeedBackService } from '../services/feed-back.service';

@Component({
  selector: 'app-performance-component',
  templateUrl: './performance-component.component.html',
  styleUrls: ['./performance-component.component.css']
})
export class PerformanceComponentComponent {

  performanceMessage: string = '';
  reviewStats: any = {};
  showStats: boolean = false;

  constructor(private feedbackService: FeedBackService) { }

  ngOnInit(): void {
    this.performanceMessage = this.feedbackService.getPerformanceMessage();
  }

  showReviewStats() {
    this.reviewStats = this.feedbackService.getReviewStats();
    this.showStats = true;
  }

}

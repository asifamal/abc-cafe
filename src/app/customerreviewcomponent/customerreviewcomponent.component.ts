import { Component, Input } from '@angular/core';
import { FeedBackService } from '../services/feed-back.service';

@Component({
  selector: 'app-customerreviewcomponent',
  templateUrl: './customerreviewcomponent.component.html',
  styleUrls: ['./customerreviewcomponent.component.css']
})
export class CustomerreviewcomponentComponent {
  @Input() showReview:boolean=false

  constructor(private feedbackService:FeedBackService) { }

  ngOnInit(): void {
  }

  submitReview(feedback: string) {
    this.feedbackService.logFeedback('lastOrder', feedback);
    this.showReview =false;
  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeedBackService {

  feedbackData: any = {};
  reviewStats: any = {};

  constructor() { }

  logFeedback(order: string, feedback: string) {
    // Logic to log feedback for a specific order
    if (!this.feedbackData[order]) {
      this.feedbackData[order] = [];
    }
    this.feedbackData[order].push(feedback);
  }

  getFeedbackData() {
    // Logic to retrieve feedback data
    return this.feedbackData;
  }

  getReviewStats() {
    // Logic to calculate review statistics
    let goodCount = 0;
    let averageCount = 0;
    let poorCount = 0;

    for (const order in this.feedbackData) {
      this.feedbackData[order].forEach((feedback: string) => {
        if (feedback === 'Good') {
          goodCount++;
        } else if (feedback === 'Average') {
          averageCount++;
        } else if (feedback === 'Poor') {
          poorCount++;
        }
      });
    }

    this.reviewStats = { good: goodCount, average: averageCount, poor: poorCount };
    return this.reviewStats;
  }

  getPerformanceMessage() {
    // Logic to determine performance message
    const stats = this.getReviewStats();
    const totalReviews = stats.good + stats.average + stats.poor;
    const goodPercentage = (stats.good / totalReviews) * 100;

    if (goodPercentage >= 70) {
      return "Excellent";
    } else if (goodPercentage >= 50) {
      return "Good";
    } else {
      return "Needs improvement";
    }
  }

}

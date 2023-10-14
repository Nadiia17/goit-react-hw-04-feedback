import React from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = type => {
    this.setState(prevState => {
      return { [type]: prevState[type] + 1 };
    });
  };

  // handleGoodFeedback = () => {
  //   this.handleFeedback('good');
  // };

  // handleNeutralFeedback = () => {
  //   this.handleFeedback('neutral');
  // };

  // handleBadFeedback = () => {
  //   this.handleFeedback('bad');
  // };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total ? Math.round((good / total) * 100) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <div>
        {/* <div>
          <h2>Please leave your feedback</h2>
          <ul>
            <li>
              <button type="button" onClick={this.handleGoodFeedback}>
                Good
              </button>
            </li>
            <li>
              <button type="button" onClick={this.handleNeutralFeedback}>
                Neutral
              </button>
            </li>
            <li>
              <button type="button" onClick={this.handleBadFeedback}>
                Bad
              </button>
            </li>
          </ul>
        </div> */}

        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>

        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback..." />
          )}
        </Section>
      </div>
    );
  }
}

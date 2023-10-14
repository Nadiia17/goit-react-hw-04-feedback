import React from 'react';
import { StatisticsItem, StatisticsList } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  totalFeedback,
  positiveFeedbackPercentage,
}) => (
  <StatisticsList>
    <StatisticsItem>Good: {good}</StatisticsItem>
    <StatisticsItem>Neutral: {neutral}</StatisticsItem>
    <StatisticsItem>Bad: {bad}</StatisticsItem>
    <StatisticsItem>Total: {totalFeedback}</StatisticsItem>
    <StatisticsItem>
      Positive feedback: {positiveFeedbackPercentage}%
    </StatisticsItem>
  </StatisticsList>
);

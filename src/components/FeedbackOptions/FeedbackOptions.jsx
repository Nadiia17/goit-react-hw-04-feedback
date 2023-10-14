import { FeedbackButton, FeedbackOptionsUl } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <FeedbackOptionsUl>
    {options.map(option => (
      <li key={option}>
        <FeedbackButton type="button" onClick={() => onLeaveFeedback(option)}>
          {option}
        </FeedbackButton>
      </li>
    ))}
  </FeedbackOptionsUl>
);

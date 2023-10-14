import styled from 'styled-components';

export const StatisticsList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 20px 0;
`;

export const StatisticsItem = styled.li`
  margin-bottom: 8px;
  font-size: 18px;

  &:last-child {
    margin-bottom: 0;
  }
`;

import styled from "styled-components";

export const BoardContainer = styled.div`
  width: 300px;
  flex-shrink: 0;
`;

export const BoardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 25px;
  padding-bottom: 13px;
`;

export const BoardHeaderTitle = styled.span`
  font-weight: 500;
  color: #222222;
  margin-right: 10px;
`;

export const BoardHeaderBadge = styled.div`
  padding: 2px 9px;
  background: #E8EBEF;
  border-radius: 100px;
  color: #8C939F;
  line-height: 16px;
`;

export const BoardListContainer = styled.div`
  height: calc(100% - 60px);
  overflow-y: auto;
  border-top: 1px solid #F3F3F3;
  border-right: 1px solid #F3F3F3;
`;

export const BoardList = styled.div`
  padding: 29px 0;
`;

export const BoardCardContainer = styled.div<{bgColor: string, isCompleted: boolean}>`
  display: flex;
  flex-direction: column;
  background: ${p => p.isCompleted ? '#F0F0F0' : p.bgColor};
  border-radius: 8px;
  padding: 15px;
  margin: 10px 15px;
`;

export const BoardCardTitle = styled.span<{isCompleted: boolean}>`
  color: ${p => p.isCompleted ? '#A5A5A5' : '#222222'};
  line-height: 16px;
  margin-bottom: 2px;
  text-decoration: ${p => p.isCompleted ? 'line-through' : 'none'};
`;

export const BoardCardTime = styled.span<{isCompleted: boolean}>`
  color: ${p => p.isCompleted ? '#A5A5A5' : '#435E52'};
  font-size: 13px;
  line-height: 15px;
`;

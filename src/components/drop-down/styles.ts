import styled from "styled-components";

export const DropDownContainer = styled.div`
  position: relative;
  font-size: 14px;
  user-select: none;
`;

export const DropDownHeader = styled.div<{isOpen: boolean}>`
  display: flex;
  align-items: center;
  padding: 0 20px;
  background: ${p => p.isOpen ? '#E1E4E7' : '#F5F8FA'};
  border-radius: 50px;
  cursor: pointer;
  height: 40px;
`;

export const DropDownTitle = styled.span`
  margin-right: 15px;
  color: #222222;
`;

export const DropDownListContainer = styled.div`
  position: absolute;
  top: 48px;
  width: 100%;
  background: #FFFFFF;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
`;

export const DropDownList = styled.div`
    padding: 6px;
`;

export const ListItem = styled.div<{isActive: boolean}>`
  padding: 12px 0 12px 8px;
  background: ${p => p.isActive ? '#F5F8FA' : '#FFFFFF'};
  border-radius: 4px;
  cursor: pointer;
`;

import styled from "styled-components";

export const ListItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  margin-bottom: 16px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  &:last-child {
    margin-bottom: 0;
  }
`;

export const ListItemRow = styled.div`
  width: 20%;
  padding: 0 16px;
  text-align: center;
`;

export const ItemName = styled.div`
  text-align: left;
  font-weight: 500;
`;

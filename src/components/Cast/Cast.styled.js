import styled from 'styled-components';


export const CastList = styled.ul`
  margin-top: 20px;
  gap: 16px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export const CastListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 2px;
  overflow: hidden;
  flex-basis: calc((100% - 16px * 8) / 9);
`;

export const ImageHolder = styled.div`
  height: 160px;
  overflow: hidden;
`;

export const Name = styled.p`
  color: white;
  text-shadow: 0px 0px 13px #fa1427;
  height: 40px;
`;

export const Text = styled.p`
  color: #9a9b9b;
  > span {
    color: white;
  }
`;

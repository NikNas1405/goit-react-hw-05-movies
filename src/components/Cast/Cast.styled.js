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

  flex-basis: calc((100% - 16px * 4) / 5);

  @media (max-width: 400px) {
    flex-basis: calc((100% - 16px * 2) / 3);
  }

  @media (min-width: 768px) {
    flex-basis: calc((100% - 16px * 6) / 7);
  }

  @media (min-width: 1024px) {
    flex-basis: calc((100% - 16px * 8) / 9);
  }
`;

export const ImageHolder = styled.div`
  height: 160px;
  overflow: hidden;
`;

export const Name = styled.p`
  color: white;
  text-shadow: 0px 0px 13px #fa1427;
  display: block;
  height: 35px;
  line-height: 1.2;
`;

export const Text = styled.p`
  color: #9a9b9b;
  display: block;
  > span {
    display: block;
    color: white;
    float: none;
    line-height: 1.2;
  }
`;

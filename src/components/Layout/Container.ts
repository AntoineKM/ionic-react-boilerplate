import styled from "styled-components";

const LayoutContainer = styled.div<{
  center?: boolean;
}>`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  height: 100%;
  ${({ center }) =>
    center &&
    "text-align: center; justify-content: center; align-items: center;"};
`;

export default LayoutContainer;

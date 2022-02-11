import { IonHeader, IonPage } from "@ionic/react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  title?: string;
}

const Page: React.FC<Props> = ({ children, title }: Props) => {
  return (
    <Container>
      {title && (
        <Header>
          <Title>{title}</Title>
        </Header>
      )}
      <Content>{children}</Content>
    </Container>
  );
};

const Container = styled(IonPage)`
  background-color: ${({ theme }) => theme.colors.layout.darker};
  color: ${({ theme }) => theme.colors.text.lightest};
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  animation-duration: 1s;
  animation-name: fadeIn;
  animation-fill-mode: both;
  opacity: 1;
  flex: 1;
`;

const Header = styled(IonHeader)`
  padding: 25px 10px 10px;
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.size.normal};
  font-weight: ${({ theme }) => theme.weight.bold};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export default Page;

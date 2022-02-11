import LayoutContainer from "../../components/Layout/Container";
import Link from "../../components/Link";
import Page from "../../components/Page";
import ROUTES from "../../constants/routes";

const Main: React.FC = () => {
  return (
    <Page title={"Main Title"}>
      <LayoutContainer center>
        Main Screen
        <Link href={ROUTES.WELCOME}>Go to Welcome Screen</Link>
      </LayoutContainer>
    </Page>
  );
};

export default Main;

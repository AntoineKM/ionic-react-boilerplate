import LayoutContainer from "../../components/Layout/Container";
import Link from "../../components/Link";
import Page from "../../components/Page";
import ROUTES from "../../constants/routes";

const Welcome: React.FC = () => {
  return (
    <Page>
      <LayoutContainer center>
        Welcome Screen
        <Link href={ROUTES.MAIN}>Go back to Main Screen</Link>
      </LayoutContainer>
    </Page>
  );
};

export default Welcome;

/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import Page from '../components/Page';

const MyApp = ({ Component, pageProps }) => (
  <div>
    <Page>
      <Component {...pageProps} />
    </Page>
  </div>
);

export default MyApp;

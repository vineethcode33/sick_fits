import PropTypes from 'prop-types';
import Header from './Header';

const Page = ({ children }) => (
  <div>
    <Header />
    <h2>I am a page component</h2>
    {children}
  </div>
);

Page.propTypes = {
  children: PropTypes.any,
};

export default Page;

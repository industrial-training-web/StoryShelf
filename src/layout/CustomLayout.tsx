import React, { useContext } from 'react';
import Layout from 'antd/lib/layout';
import { PageHeader } from '@ant-design/pro-layout';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { AuthContext } from '../firebaseprovider/FirebaseProvider'; // Assuming you use an AuthProvider

const { Header, Content, Footer } = Layout;

const CustomHeader = () => {
  const navigate = useNavigate();
  const { user, logOut } = useContext(AuthContext) || {};
  const logoSrc = '../../public/logo.png';

  return (
    <PageHeader
      className="site-page-header h-full flex justify-center px-4"
      extra={
        <div className="flex w-full text-white font-medium gap-10 items-center justify-between mx-auto">
          <div className="flex items-center justify-start space-x-2">
            <img src={logoSrc} alt="Logo" className="h-14 w-14" />
            <Link to="/" className="text-xl font-semibold text-white">
              StoryShelf
            </Link>
          </div>
          <nav className="flex-1 flex justify-between space-x-6">
            <Link to="/add-book" className="hover:underline">
              Add Book
            </Link>
            <Link to="/your-list" className="hover:underline">
              Your List
            </Link>
          </nav>
          <div className="justify-end">
            {user ? (
              <Button
                className="bg-[#fdc57b] text-white border-none text-center"
                shape="round"
                onClick={logOut}
              >
                Logout
              </Button>
            ) : (
              <Button
                className="bg-[#fdc57b] text-white border-none text-center"
                shape="round"
                onClick={() => navigate('/sign-in')}
              >
                Sign In
              </Button>
            )}
          </div>
        </div>
      }
    />
  );
};

const CustomFooter = () => (
  <div style={{ textAlign: 'center' }}>
    <div>
      {/* @ts-ignore */}
      {__HEAD_COMMIT_HASH__ ? `Trace: ${__HEAD_COMMIT_HASH__}` : ''}
    </div>
    <div>&copy; {new Date().getFullYear()} - Industrial Training Web</div>
  </div>
);

interface ILayoutProps {
  children: any;
}

// eslint-disable-next-line react/prefer-stateless-function
class CustomLayout extends React.Component<ILayoutProps> {
  render() {
    const { children } = this.props;

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Header style={{ backgroundColor: '#7fa99b' }}>
          <CustomHeader />
        </Header>
        <Content>{children}</Content>
        <Footer style={{ backgroundColor: '#7fa99b' }}>
          <CustomFooter />
        </Footer>
      </Layout>
    );
  }
}

export { CustomLayout };

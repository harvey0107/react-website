import './App.css';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import AppHeader from './components/common/AppHeader'
import AppHome from './views/Home';

const { Header, Content } = Layout;

function App() {
  return (
    <Layout className="mainLayout">
    <Header>
      <AppHeader />
    </Header>
    <Content>
      <AppHome />
    </Content>
  </Layout>
  );
}

export default App;

import Layout from '../components/layout';
import {Toast, Button } from 'antd-mobile';

const message: string = "Hello Next.js!";

function showToast() {
    Toast.info('This is a toast tips !!!', 1);
  }

const Index = () => (
    <Layout>
        <Button onClick={showToast}>Start</Button>
        <p>{message}</p>
    </Layout>
);

export default Index;

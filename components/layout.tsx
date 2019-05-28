import Header from './Header';
import Head from 'next/head';



const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const Layout = (props: any) => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no" />
      <link rel="stylesheet" href={"/static/antd-mobile.min.css"} />
    </Head>
      <div style={layoutStyle}>
        <Header />
        {props.children}
      </div>
  </div>
)

export default Layout;

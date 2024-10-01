import Head from 'next/head';
import Header from "./Header";
import '../style.css';

const Layout = (props) => {
    return (
        <div>
            <Head>
                <title>Woocommerse React theme</title>
                <link rel="stylesheet" href="https://bootswatch.com/5/flatly/bootstrap.min.css" />
            </Head>
            <Header/>
            {props.children}
        </div>
    );
}

export default Layout;
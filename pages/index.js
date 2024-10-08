import Layout from "../components/Layout";

import clientConfig from "../client-config";

import Product from "../components/Product";
import fetch from 'isomorphic-unfetch';

const Index = (props) => {
    const { products } = props;
    return (
        <Layout>
            <div className = "product-container">
                {
                    products.length ? (
                        products.map(product => <Product key={product.id} product={product} />)
                    ) : ''}
            </div>
        </Layout>
    )
};

Index.getInitialProps = async () => {
    const res = await fetch(`${clientConfig.siteUrl}/getProducts`);
    const productsData = await res.json();
    return {
        products: productsData
    }

}

export default Index;
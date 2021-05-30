import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {Row, Col, Modal} from 'antd';
import DesktopFooter from '../Components/DesktopFooter';
import DesktopNavbar from '../Components/DesktopNavbar';
import DesktopSearchFilter from '../Components/DesktopSearchFilter';
import DesktopSingleProduct from '../Components/DesktopSingleProduct';
import { getProducts } from '../../../api/getProducts';
import './css/DesktopSearchResultStyle.css';
import Desktop404 from '../Components/Desktop404';
import Loading from '../Components/Loading';

export const DesktopSearchResult = () => {
    const { searchName } = useParams<{ searchName: string }>();
    const [loading, setLoading] = useState<Boolean>(false);
    const [products, setProducts] = useState<any>([]);

    const getParticularProduct = async (search) => {
        try {
            setLoading(true);
            const productsResult = await getProducts(search);

            if(productsResult && productsResult.message === 'success') {
                setProducts(productsResult.product);
            } else if(productsResult === -1){
                Modal.error({
                    title: 'Error',
                    content: 'Internal Server Error, Please try again after Sometime...'
                });
            }

            setLoading(false);
        } catch(error) {
            setLoading(false);
            console.log(error);

            setProducts([]);
            Modal.error({
                title: 'Error',
                content: 'Internal Server Error, Please try again after Sometime...'
            });
        }
    }

    useEffect(() => {
        getParticularProduct(searchName);
    }, [searchName]);

    return(
        <div style={{width: '100%'}}>
            <DesktopNavbar search={searchName} />
            {loading ? 
            <Loading />
            :
            <div className="searchResult" style={{minHeight: 500, backgroundColor: '#F1F3F6'}}>
                <Row>
                    {products.length ? (
                        <React.Fragment>
                            <Col span={5}>
                                <div className="leftSidePanel">
                                    <DesktopSearchFilter />
                                </div>
                            </Col>
                            <Col span={19}>
                                <div className="rightSidePanel">
                                    <DesktopSingleProduct />
                                </div>
                            </Col>
                        </React.Fragment>
                    ) : (
                        <Col span={24}>
                            <Desktop404 />
                        </Col>
                    )}
                </Row>
            </div>
            }
            <DesktopFooter />
        </div>
    );
}
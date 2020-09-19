import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Grid } from 'antd-mobile';
import { userCheck } from '../../../components/userCheck';
import { Store } from '../../../Context/Store';
import { getData } from '../../../localStorage/getData';
import { getCategories } from '../../../api/getCategories';
import Loader from '../components/mobileLoader';
import { HeaderWithBack } from '../Header';

export const AllCategories = () => {
    const [loading, setLoading] = useState(true);
    const [allCategoriesData, setAllCategoriesData] = useState([]);
    const [category, setCategory] = useState([]);
    const { setUser } = useContext(Store);
    const history = useHistory();
    const loggedUser = getData('user');

    useEffect(() => {
        if(userCheck(history)){
          setUser(loggedUser);
          getCategories()
            .then(res => {
                if(res !== 1) {
                    setAllCategoriesData(res);
                    setCategory(res.map((item) => {
                        return item.category;
                    }));
                } else {
                    console.log('ERROR')
                }
            })
            .catch();
          setLoading(false);
        }
    }, []);

    const sendToCategoryPage = (value) => {
        // setChoosenCategory(value)
        const categoryIndex = allCategoriesData.findIndex((item) => item.category === value)
        const subCategoryData = categoryIndex === -1 ? [] : 
            allCategoriesData[categoryIndex].sub_category.split(',');
        // setSubCategory(subCategoryData)
    }

    const allCategoryForGrid = category.map((individualCategory) => ({
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
        text: `${individualCategory}`,
    }));

    return(
        <React.Fragment>
        {loading ? <Loader /> :
            <div>
                <HeaderWithBack name="All Categories" icon="left" />
                <div style={{ marginTop: 45 }}>
                    <div className="sub-title">
                        <Grid data={allCategoryForGrid} columnNum={3} activeStyle={true} />
                    </div>
                </div>
            </div>
        }
        </React.Fragment>
    );
}
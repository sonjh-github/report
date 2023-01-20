import React from 'react';
import Selector from './selector'
import { useParams } from 'react-router-dom';
import KEY from '../../assets/key.jsx'
import NotFound from '../notfound/notfound';
const ReportView = (props) => {
    const {slug} = useParams()
    console.log(slug)
    // const key = KEY[props.match.params.key];
    if(Object.keys(KEY).includes(slug)){
        return (
            <div>
                <Selector fullData={KEY[slug]}></Selector>
            </div>
        )
    } else {
        return (
            <NotFound></NotFound>
        )
    }
}
export default ReportView
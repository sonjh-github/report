import { useState } from 'react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import pdfView from './pdfView.jsx';
import { pdfjs } from 'react-pdf';
import './report.css'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function Scrolls(props) {
    const Data = props.fullData
    const [object, setObject] = useState(Data[0])
    return (

        <center>
            {object.date}
            <ScrollMenu>
                {Data.map(
                    (ele) => {
                        return (
                            <button onClick={() => {setObject(ele)}} className="button-27">
                                {ele.title}
                                <br></br>
                                {object && object.subTitle}
                            </button>
                        );
                    },
                )}
            </ScrollMenu>
            <br />
            {object && pdfView(object)}
        </center>
    );
}
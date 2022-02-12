import React, { useState } from 'react';
import Card from './Card';
import { useSelector } from 'react-redux';

export default function Section({ item }) {
    const [page, setPage] = useState(() => 0)
    const [prev, setPrev] = useState(() => [])

    const current_data = useSelector(state => state.state.currentData)
    const data = current_data.filter(data => data.brand_name === item)
    const handleNext = () => {
        const divider = data.length % 4;
        const max = parseInt(data.length / 4 + (divider ? 1 : 0)) - 1;
        if (max > page) { setPage(() => page + 1) }
        else { setPage(() => 0) }
    }

    if (JSON.stringify(current_data) !== JSON.stringify(prev)) {

        setPage(() => 0)
        setPrev(() => current_data)
    }
    if (data.length !== 0)
        return (
            <>
                <div className="Section-Wrapper">
                    <div className="Section">
                        <h4>{item}</h4>
                        <hr className="Line" />
                        <div className="Wrapper">
                            <div className="AllProduct-Wrapper">
                                <div className="AllProduct">
                                    {data.slice(page * 4, page * 4 + 4).map((item, id) => <Card key={id} data={item} />)}
                                </div>
                            </div>

                        </div>
                    </div>
                    {data.length > 4 &&
                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" className='arrow' onClick={handleNext} fillRule="evenodd" clipRule="evenodd">
                            <path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z" />
                        </svg>}
                </div>
            </>
        );
    else return null
}

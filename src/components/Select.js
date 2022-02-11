import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeState, changeCity, changeProduct } from '../features/state/stateSlice';
export default function Select({ title }) {
    const dispatch = useDispatch()
    let data = []
    const info = useSelector(state => state.state)
    let current = ''
    switch (title) {
        case "Products":
            data = [...new Set(info.allData.map(item => item.product_name))];
            current = info.product
            break
        case "State":
            data = [...new Set(info.allData.filter(item => info.product ? item.product_name === info.product : true).map(item => item.address.state))]
            current = info.state
            break
        case "City":
            data = [...new Set(info.allData
                .filter(item => info.product ? item.product_name === info.product : true)
                .filter(item => info.state ? item.address.state === info.state : true)
                .map(item => item.address.city))]
            current = info.city
            break
        default:
            break

    }
    const handleChange = (e) => {
        switch (title) {
            case "Products":
                dispatch(changeProduct(e.target.value))
                data = [...new Set(info.currentData.map(item => item.product_name))];

                break
            case "State":
                dispatch(changeState(e.target.value))
                data = [...new Set(info.currentData.map(item => item.address.state))]
                break
            case "City":
                dispatch(changeCity(e.target.value))
                data = [...new Set(info.currentData.map(item => item.address.city))]
                break
            default:
                break

        }
    }
    return <div>
        <div className="Select-Header">
            <div className="Select-Header-Content">
                <span>{current || title}</span>
                <span><svg width="12.19" height="12.19" className="Icon">
                    <polygon points="12.19 12.19,0 6.095, 12.19 0" />
                </svg></span>
            </div>
        </div>
        <select name={title} id={title} onChange={handleChange}>
            <option value="">all</option>
            {data.length && data.map((item, id) => <option value={item} key={id}>{item}</option>)}

        </select>
    </div>;
}

import React from 'react';
import Select from './Select';

export default function FilterBox() {
    return (

        <div className="FilterBox">


            <h3>
                Filters
            </h3>
            <hr />
            <div className="Select">

                <Select title={"Products"} />
                <Select title={"State"} />
                <Select title={"City"} />
            </div>
        </div>);

}

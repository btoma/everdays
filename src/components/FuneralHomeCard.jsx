import React from "react";
import StarRating from './StarRating';
import placeholder from '../images/placeholder-image.png';

const FuneralHomeCard = ({ homeList}) => {
    
    const buildFuneralHomeCardList = homeList?.map(home => {
        const { name, _id, address, ratingsInfo } = home;
        return (

            <li className="card-item"
                key={_id}
            >
                <div className="card mb-3 card-location" >
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={placeholder} className="card-img" alt="placeholder" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <p className="card-text header-location">{name}</p>
                                <p className="card-text address-location">{address.originalAddress}</p>
                                <p className="card-text"><small className="text-muted"><StarRating ratings={ratingsInfo} /></small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        );
    });

    return (
        <div>
            <ul className="card-list">
                {buildFuneralHomeCardList}
            </ul>
        </div>
    )
};

export default FuneralHomeCard;
import React from 'react';

const Users = ({user}) => {
    return (
        <div  className="col-md-8">
            <div className="media g-mb-30 media-comment">
                <img className="d-flex g-width-50 g-height-50 rounded-circle g-mt-3 g-mr-15"
                     src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Image Description" />
                <div className="media-body u-shadow-v18 g-bg-secondary g-pa-30">
                    <div className="g-mb-15">
                        <h5 cl  assName="h5 g-color-gray-dark-v1 mb-0">{user.name}</h5>
                    </div>
                    <p>{user.body}</p>
                </div>

            </div>
        </div>
    );
};

export default Users;
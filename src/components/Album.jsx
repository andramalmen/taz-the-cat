import React from 'react'

const Album = () => (
    <div className="album py-5 bg-light">
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="card mb-4 shadow-sm">
                        <img class="card-img-top" src="images/TAZ1.jpg" title="Taz" alt="Taz" />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card mb-4 shadow-sm">
                        <img class="card-img-top" src="images/TAZ2.jpg" title="Taz" alt="Taz" />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card mb-4 shadow-sm">
                        <img class="card-img-top" src="images/TAZ3.jpg" title="Taz" alt="Taz" />
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Album

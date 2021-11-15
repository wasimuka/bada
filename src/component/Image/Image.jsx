import React from 'react';
const Dashboard = (props) => {
    props.image= 
    return (
        {props.images.map(image=>{
            return (
                <section>
                    <div className="row">
                        <div className="col-sm-12 col-12">
                            <img src={image.name} className="img-fluid desk">
                        </div>
                    </div>
                </section>

            );
        })}
    );
}

export default Dashboard;
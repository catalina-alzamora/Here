import React, { Component } from 'react';
import Logo from "../images/logo-2.png";
import '../notification.css'

class Notification extends Component {
    render() {
        return (
            <div className="flex">
                <div className="box flex">
                    <img className="imgLogo flex" alt="Logo" src={Logo} />
                </div>
                <div className="">
                    <div className="text">
                        <p className="card-content center">
                            Se le notificará cuando se acepte su solicitud
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Notification;
import React from 'react'
import  "./Company.scss"
interface Props {
    
}

export const Company = (props: Props) => {
    return (
        <div className="container">
            <div className="text-box">
                <h1 className="text">About Company</h1>
                <h1 className="text">About Company</h1>
            </div>
            <span className="span"><p className="mtext">Dream House’s aim is to offer a platform</p></span>
            <span className="span"><p className="mtext">for better professional collaboration, ultimately leading to better design,</p></span>
            <span className="span"><p className="mtext"> better buildings and a better world for us to live, work and play.</p></span>
            <span className="lspan"><p className="ltext">© 2020 Dream House</p></span>
        </div>
    )
}

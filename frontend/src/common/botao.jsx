import React from 'react'

export default props => (
    <button type={props.tipo} className="btn btn-primary mt-3 form-control">
        {props.texto}
    </button>
)
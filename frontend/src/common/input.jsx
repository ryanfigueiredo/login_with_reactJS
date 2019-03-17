import React from 'react'
import If from './if'


export default props => (
    <If test={!props.hide}>
        <label>{props.texto}</label>
        <input {...props.input}
            type={props.tipo}
            readOnly={props.readOnly}
            placeholder={props.placeholder}
            className="form-control" />
    </If>
)
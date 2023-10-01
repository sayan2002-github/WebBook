import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation, faSquareCheck } from '@fortawesome/free-solid-svg-icons';

const Alert = (props) => {
  return (
    <div className='container webook-alert'>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show `} role='alert'>
          <FontAwesomeIcon icon={props.alert.type === 'success' ? faSquareCheck : faTriangleExclamation} /> {props.alert.msg}
        </div>}
    </div>
  )
}

export default Alert
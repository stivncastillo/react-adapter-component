import React from 'react'
import PropTypes from 'prop-types'
import { COMPONENT_LIBRARIES } from '../../config/constants';
import { Button as ReactBootstrapButton } from 'react-bootstrap';
import { Button as AntButton } from 'antd';

const Button = ({ children, library, ...props }) => {
  switch (library) {
    case COMPONENT_LIBRARIES.REACT_BOOSTRAP:
      return (
        <ReactBootstrapButton {...props}>
          {children}
        </ReactBootstrapButton>
      );
    case COMPONENT_LIBRARIES.ANTD:
      return (
        <AntButton type={props.variant}>
          {children}
        </AntButton>
      );
    default:
      return (
        <span>Dont support {library}</span>
      )
  }

}

Button.propTypes = {
  library: PropTypes.oneOf(COMPONENT_LIBRARIES.getValues()),
  variant: PropTypes.string,
  active: PropTypes.bool,
  as: PropTypes.element,
  href: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'lg']),
  type: PropTypes.string,
  block: PropTypes.bool
}

Button.defaultProps = {
  library: COMPONENT_LIBRARIES.getDefault(),
  variant: 'primary',
  active: false,
  disabled: false,
  type: 'button'
}

export default Button

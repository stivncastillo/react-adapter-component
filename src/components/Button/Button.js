import React from 'react'
import PropTypes from 'prop-types'
import { Button as ReactBootstrapButton } from 'react-bootstrap';
import { COMPONENT_LIBRARIES } from '../../config/constants';

const Button = ({ children, library, ...restProps }) => {
  switch (library) {
    case COMPONENT_LIBRARIES.REACT_BOOSTRAP:
      return (
        <ReactBootstrapButton {...restProps}>
          {children}
        </ReactBootstrapButton>
      );
    default:
      return (
        <span>Dont support {library}</span>
      )
      break;
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

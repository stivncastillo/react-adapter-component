export const COMPONENT_LIBRARIES = {
  REACT_BOOSTRAP: 'react-bootstrap',
  REACTSTRAP: 'reactstrap',
  getDefault: function() {
    return this.REACT_BOOSTRAP;
  },
  getValues: function() {
    return [
      this.REACT_BOOSTRAP,
      this.REACTSTRAP
    ];
  }
}
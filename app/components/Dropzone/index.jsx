import React from 'react';
import { Placeholder, ImagePreview } from 'components/shared';
import PropTypes from 'prop-types';
import './style.scss';
const propTypes = {
  newImage: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  type: PropTypes.string,
  name: PropTypes.string,
  errors: PropTypes.object,
  pdf: PropTypes.bool,
  handleOnDrop: PropTypes.func
};
const Dropzone = React.forwardRef(({ newImage, type, name, handleOnDrop, errors, pdf }, ref) => {
  return (
    <div className="dropZone">
      {newImage ? <ImagePreview imagefile={newImage.name} pdf={pdf} /> : <Placeholder />}
      <input type={type} name={name} ref={ref} onChange={handleOnDrop} />
      {errors && errors.type === 'required' && <span>This is required</span>}
    </div>
  );
});
Dropzone.propTypes = propTypes;
export default Dropzone;

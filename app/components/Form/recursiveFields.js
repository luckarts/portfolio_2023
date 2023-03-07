import React from 'react';
import { WrapperField } from 'components';

const recursiveFields = (fields, defaultValue, handleOnDrop, control) => {
  return fields.map((field, id) => {
    if (Array.isArray(field) && field.length > 0) {
      const customFields = recursiveFields(field, defaultValue, handleOnDrop, control);
      return customFields;
    } else if (field.type === 'file') {
      return (
        <div key={id} className="imgPreview">
          <img src={defaultValue.img} alt="profile" />
          <WrapperField type="file" name="img" customChange={handleOnDrop} control={control} />
        </div>
      );
    } else {
      return (
        <WrapperField
          key={field.name}
          name={field.name}
          label={field.label}
          defaultValue={defaultValue?.[field.name]}
          type={field.type}
          variant={field.variant}
          customChange={field.customChange}
          control={control}
          key={id}
        />
      );
    }
  });
};
export default recursiveFields;

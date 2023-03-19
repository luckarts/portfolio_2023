import React from 'react';
import { Field } from 'components';

const recursiveFields = (fields, register, defaultValue, handleOnDrop, rules, errors) => {
  return fields.map((field, id) => {
    if (Array.isArray(field.type) && field.type.length > 0) {
      return recursiveFields(field.type, register, defaultValue[field.name], handleOnDrop);
    } else if (Array.isArray(field)) return <div key={id}></div>;
    else if (field.type === 'file') {
      return (
        <div key={id} className="imgPreview">
          <img src={defaultValue.img} alt="profile" />
          <Field type="file" name="img" register={register} onChange={handleOnDrop} />
        </div>
      );
    } else {
      return (
        <Field
          rules={rules[field.name]}
          className={field.className}
          name={field.name}
          label={field.label}
          defaultValue={
            Array.isArray(defaultValue) ? defaultValue[id][field.data_name || field.name] : defaultValue?.[field.name]
          }
          type={field.type}
          variante={field.variante}
          key={id}
          register={register}
          error={errors[field.name]}
        />
      );
    }
  });
};
export default recursiveFields;

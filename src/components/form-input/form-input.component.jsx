import { FormInputLabel, Input, Group } from "./form-input.styles";

export const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group className="group">
      <Input className="form-input" {...otherProps} />
      {label && (
        <FormInputLabel
          shrink={otherProps.value.lenght}
          className="form-input-label"
        >
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

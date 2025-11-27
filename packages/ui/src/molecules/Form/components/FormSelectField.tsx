import {useFieldContext} from "../context";
import {useStore} from "@tanstack/react-form";
import {Select} from "../../../atoms";
import {SelectProps} from "../../../atoms/Select";

type Props = Omit<SelectProps, 'value' | 'onChange' | 'onBlur' | 'error'>;

export default function FormSelectField({ ...props }: Props) {
  const field = useFieldContext<string>();
  const errors = useStore(field.store, (state) => state.meta.errors);

  const error = errors.length > 0 ? errors[0] : undefined;

  return (
    <Select
      error={error}
      value={field.state.value}
      onChange={(value) => field.handleChange(value || '')}
      onBlur={field.handleBlur}
      {...props}
    />
  );
}
import TextInput, {TextInputProps} from "../../../atoms/TextInput";
import {useFieldContext} from "../context";
import {useStore} from "@tanstack/react-form";

type Props = Omit<TextInputProps, 'value' | 'onChange' | 'onBlur' | 'error'>;

export default function FormTextField({ ...props }: Props) {
  const field = useFieldContext<string>();
  const errors = useStore(field.store, (state) => state.meta.errors);

  const error = errors.length > 0 ? errors[0] : undefined;

  return (
    <TextInput
      error={error}
      value={field.state.value}
      onChange={(e) => field.handleChange(e.target.value)}
      onBlur={field.handleBlur}
      {...props}
    />
  );
}
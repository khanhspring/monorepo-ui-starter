import {ButtonProps} from "../../../atoms/Button";
import {Button} from "../../../atoms";
import {useFormContext} from "../context";

type Props = ButtonProps;

export default function SubmitButton({children, ...props}: Props) {
  const form = useFormContext();

  return (
    <form.Subscribe selector={(state) => state.isSubmitting}>
      {(isSubmitting) => <Button loading={isSubmitting} type="submit" {...props}>{children}</Button>}
    </form.Subscribe>
  );
}

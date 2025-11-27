import {lazy} from "react";
import {createFormHook} from "@tanstack/react-form";
import {fieldContext, formContext} from "../context";
export { default as FormContainer } from "./FormContainer";

const TextField = lazy(() => import('./FormTextField'));
const SelectField = lazy(() => import('./FormSelectField'));
const SubmitButton = lazy(() => import('./SubmitButton'))

export const {useAppForm, withForm, withFieldGroup} = createFormHook({
  fieldComponents: {
    TextField,
    SelectField
  },
  formComponents: {
    SubmitButton,
  },
  fieldContext,
  formContext,
});

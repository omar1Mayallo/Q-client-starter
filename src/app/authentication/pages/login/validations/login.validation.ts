import * as z from "zod";
import useFormValidation from "../../../../../shared/hooks/useFormValidation";

// LOGIN SCHEMA OBJECT
const loginSchema = z.object({
  email: z
    .string({
      required_error: "Validation_Errors.REQUIRED",
      invalid_type_error: "Validation_Errors.INVALID_EMAIL",
    })
    .email("Validation_Errors.INVALID_EMAIL"),

  password: z
    .string({
      required_error: "Validation_Errors.REQUIRED",
      invalid_type_error: "Validation_Errors.PASSWORD_REGEX",
    })
    .min(8, "Validation_Errors.PASSWORD_REGEX")
    .max(25, "Validation_Errors.PASSWORD_REGEX"),
});

// LOGIN SCHEMA OBJECT TYPE
export type LoginFormData = z.infer<typeof loginSchema>;

// LOGIN FORM DATA HOOK
export default function useLoginFormData() {
  return useFormValidation<LoginFormData>(loginSchema);
}

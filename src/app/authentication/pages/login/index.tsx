import { Container } from "@mui/material";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import FormInput from "../../../../shared/components/Inputs/FormInput";
import useUserStore from "../../../../store/user.store";
import AuthForm from "../../components/AuthForm";
import useLoginService from "./services/login.service";
import useLoginFormData, {
  LoginFormData,
} from "./validations/login.validation";

export default function Login() {
  // FORM_VALIDATION
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useLoginFormData();

  // HANDLE_LOGIN
  const { mutate, isPending } = useLoginService(setError);
  const onSubmit = (data: LoginFormData) => {
    mutate(data);
  };

  // IF_LOGGED_IN_REDIRECT_TO_HOME
  const token = useUserStore((s) => s.token);
  const navigate = useNavigate();
  useEffect(() => {
    if (token) return navigate("/");
  }, [token, navigate]);

  const { t } = useTranslation(["labels"]);

  return (
    <main className="flex h-lvh flex-col items-center justify-center">
      <Container component={"section"} maxWidth="xs">
        <AuthForm
          isLoading={isPending}
          formHead={t("signIn")}
          handleSubmit={handleSubmit(onSubmit)}
        >
          {/* _________ EMAIL _________ */}
          <FormInput
            isRequired
            inputProps={{
              ...register("email"),
            }}
            helperText={
              errors.email?.message &&
              t(`${errors.email?.message}`, { ns: ["validations"] })
            }
            error={!!errors.email}
            fullWidth
            type="email"
            id="email"
            autoComplete="email"
            autoFocus
            placeholder={t("email")}
            labelKey={t("email")}
          />

          {/* _________ PASSWORD _________ */}
          <FormInput
            labelKey={t("password")}
            isRequired
            inputProps={{
              ...register("password"),
            }}
            error={!!errors.password}
            helperText={
              errors.password?.message &&
              t(`${errors.password?.message}`, { ns: ["validations"] })
            }
            fullWidth
            type="password"
            id="password"
            placeholder={t("password")}
          />
        </AuthForm>
      </Container>
    </main>
  );
}

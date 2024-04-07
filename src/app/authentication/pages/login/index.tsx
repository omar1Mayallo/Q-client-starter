import { Container, TextField } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useUserStore from "../../../../store/user.store";
import AuthForm from "../../components/AuthForm";
import useLoginService from "./services/login.service";
import useLoginFormData, {
  LoginFormData,
} from "./validations/login.validation";
import { useTranslation } from "react-i18next";

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

  const { t } = useTranslation();

  return (
    <main className="flex h-lvh flex-col items-center justify-center">
      <Container component={"section"} maxWidth="xs">
        <AuthForm
          isLoading={isPending}
          formHead="Sign In"
          handleSubmit={handleSubmit(onSubmit)}
        >
          {/* _________ EMAIL _________ */}
          <TextField
            inputProps={{ ...register("email") }}
            error={!!errors.email}
            helperText={
              errors.email?.message &&
              t(`${errors.email?.message}`, { ns: "validations" })
            }
            margin="normal"
            required
            fullWidth
            type="email"
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          {/* _________ PASSWORD _________ */}
          <TextField
            inputProps={{ ...register("password") }}
            error={!!errors.password}
            helperText={
              errors.password?.message &&
              t(`${errors.password?.message}`, { ns: "validations" })
            }
            margin="normal"
            required
            fullWidth
            type="password"
            id="password"
            name="password"
            label="Password"
          />
        </AuthForm>
      </Container>
    </main>
  );
}

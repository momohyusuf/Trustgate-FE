import { useState } from "react";
import CustomButton from "../ui/buttons/CustomButtom";
import AuthFormInputField from "../ui/forms/AuthFormInputField";
import AuthFormWrapper from "../ui/containerWrappers/AuthFormWrappers";
import { ValidateInput } from "../../utils/helpers";

interface IFormValues {
  email?: string;
  password?: string;
}
interface IFormErrors {
  error: boolean;
  errorName: string;
  message: string;
}

const Login = () => {
  const [formValues, setFormValues] = useState<IFormValues>({
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState<IFormErrors>({
    error: false,
    message: "",
    errorName: "",
  });

  function handleLogin() {
    if (!ValidateInput.validateEmail(formValues.email as string)) {
      setFormErrors({
        error: true,
        errorName: "Email",
        message: "Please enter a valid email address",
      });
      return;
    }
    if (ValidateInput.validatePassword(formValues.password as string) !== "") {
      setFormErrors({
        error: true,
        errorName: "Password",
        message:
          ValidateInput.validatePassword(formValues.password as string) +
          ". Try again",
      });
      return;
    }
  }

  // verify password in step two before moving to step three

  return (
    <AuthFormWrapper>
      <div className="grid relative gap-4 h-[calc(100vh-80px)] px-4 py-8 lg:py-16 max-w-[500px] mx-auto">
        <div className="absolute top-[40%] lg:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-8 p-4 w-full">
          <h1 className="text-2xl lg:text-4xl text-grey-600 text-center font-bold font-lora mb-8">
            Login to your account
          </h1>

          <div className=" bg-primary-100 border border-primary-100 p-5 lg:p-10 rounded-lg grid gap-6">
            <AuthFormInputField
              name="Email"
              value={formValues.email}
              error={formErrors.error}
              errorName={formErrors.errorName}
              message={formErrors.message}
              placeholder="Enter your email"
              handleInputChange={(e) => {
                setFormValues((prev) => ({
                  ...prev,
                  email: e.target.value,
                }));
              }}
            />
            <div>
              <AuthFormInputField
                name="Password"
                value={formValues.password}
                error={formErrors.error}
                message={formErrors.message}
                errorName={formErrors.errorName}
                placeholder="Enter your password"
                handleInputChange={(e) => {
                  setFormValues((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }));
                }}
              />
              <p className="text-center lg:text-right tracking-wide mt-2">
                Forgot password?
              </p>
            </div>

            <CustomButton
              // disabled={true}

              onClick={handleLogin}
              text={"Login"}
              variant="secondary"
              className="w-full mt-8"
            />
          </div>
        </div>
      </div>
    </AuthFormWrapper>
  );
};

export default Login;

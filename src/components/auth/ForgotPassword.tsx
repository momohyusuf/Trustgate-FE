import { useState } from "react";
import CustomButton from "../ui/buttons/CustomButtom";
import AuthFormInputField from "../ui/forms/AuthFormInputField";
import AuthFormWrapper from "../ui/containerWrappers/AuthFormWrappers";
import { ValidateInput } from "../../utils/helpers";

interface IFormValues {
  email: string;
}
interface IFormErrors {
  error: boolean;
  errorName: string;
  message: string;
}

const ForgotPassword = () => {
  const [formValues, setFormValues] = useState<IFormValues>({
    email: "",
  });
  const [formErrors, setFormErrors] = useState<IFormErrors>({
    error: false,
    message: "",
    errorName: "",
  });

  const [isEmailValid, setIsEmailValid] = useState(false);

  function handleForgotPassword() {
    if (!ValidateInput.validateEmail(formValues.email as string)) {
      setFormErrors({
        error: true,
        errorName: "Email",
        message: "Please enter a valid email address",
      });
      return;
    }
  }

  // verify password in step two before moving to step three

  return (
    <AuthFormWrapper>
      <div className="grid relative gap-4 h-[calc(100vh-80px)] px-4 py-8 lg:py-16  mx-auto">
        <div className="absolute top-[40%] lg:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-8 p-4 w-full">
          <h1 className="text-2xl lg:text-4xl text-grey-600 text-center font-bold font-lora mb-8">
            Forgot password?
          </h1>
          <div className="text-grey-600 tracking-wide font-inter text-center max-w-[550px] mx-auto mb-8">
            <p>
              Enter your email address to reset your password. We will send a
              recovery link to your inbox so that you can reset your password
              and access your Dashboard.
            </p>
          </div>
          <div className=" bg-primary-100 border border-primary-100 p-5 lg:p-10 rounded-lg grid gap-6 max-w-[450px] mx-auto">
            <AuthFormInputField
              name="Email"
              value={formValues.email}
              error={formErrors.error}
              errorName={formErrors.errorName}
              message={formErrors.message}
              placeholder="Enter your email"
              handleInputChange={(e) => {
                if (ValidateInput.validateEmail(e.target.value)) {
                  setIsEmailValid(true);
                } else {
                  setIsEmailValid(false);
                }
                setFormValues((prev) => ({
                  ...prev,
                  email: e.target.value,
                }));
              }}
            />

            <CustomButton
              disabled={!isEmailValid}
              onClick={handleForgotPassword}
              text={"Send Reset Link"}
              variant={isEmailValid ? "primary" : "secondary"}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </AuthFormWrapper>
  );
};

export default ForgotPassword;

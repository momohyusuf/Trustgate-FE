import { useState } from "react";
import CustomButton from "../ui/buttons/CustomButtom";
import AuthFormInputField from "../ui/forms/AuthFormInputField";
import AuthFormWrapper from "../ui/containerWrappers/AuthFormWrappers";
import { ValidateInput } from "../../utils/helpers";
interface IFormValues {
  password: string;
  confirmPassword: string;
}
interface IFormErrors {
  error: boolean;
  errorName: string;
  message: string;
}

const ResetPassword = () => {
  const [formValues, setFormValues] = useState<IFormValues>({
    confirmPassword: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState<IFormErrors>({
    error: false,
    message: "",
    errorName: "",
  });

  const [isPasswordMatch, setIsPasswordMatch] = useState<boolean>(false);

  function handlePasswordReset() {
    // verify password in step two before moving to step three

    if (ValidateInput.validatePassword(formValues.password as string) !== "") {
      setFormErrors({
        error: true,
        errorName: "New Password",
        message:
          ValidateInput.validatePassword(formValues.password as string) +
          ". Try again",
      });
      return;
    }

    if (formValues.password !== formValues.confirmPassword) {
      setFormErrors({
        error: true,
        errorName: "Confirm Password",
        message: "Passwords do not match. Try again",
      });
      return;
    }
  }

  // verify password in step two before moving to step three

  return (
    <AuthFormWrapper>
      <div className="grid relative gap-4 h-[calc(100vh-80px)] px-4 py-8 lg:py-16  mx-auto">
        <div className="absolute top-[40%] lg:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-8 p-4 w-full">
          <img
            className="w-[200px] mx-auto mb-8"
            src="/logo.svg"
            alt="Trustgate enterprise"
          />
          <h1 className="text-2xl lg:text-4xl text-grey-600 text-center font-bold font-lora mb-6">
            Forgot password
          </h1>
          <div className="text-grey-600 tracking-wide font-inter text-center max-w-[550px] mx-auto mb-6">
            <p>Set a secure and Unique password to login.</p>
          </div>
          <div className=" bg-primary-100 border border-primary-100 p-5 lg:p-10 rounded-lg grid gap-6 max-w-[450px] mx-auto">
            <AuthFormInputField
              name="New Password"
              value={formValues.password}
              error={formErrors.error}
              errorName={formErrors.errorName}
              message={formErrors.message}
              placeholder="Enter new password"
              handleInputChange={(e) => {
                if (formValues.confirmPassword === e.target.value) {
                  setIsPasswordMatch(true);
                } else {
                  setIsPasswordMatch(false);
                }
                setFormValues((prev) => ({
                  ...prev,
                  password: e.target.value,
                }));
              }}
            />
            <AuthFormInputField
              name="Confirm Password"
              value={formValues.confirmPassword}
              error={formErrors.error}
              errorName={formErrors.errorName}
              message={formErrors.message}
              placeholder="Confirm new password"
              handleInputChange={(e) => {
                if (formValues.password === e.target.value) {
                  setIsPasswordMatch(true);
                } else {
                  setIsPasswordMatch(false);
                }
                setFormValues((prev) => ({
                  ...prev,
                  confirmPassword: e.target.value,
                }));
              }}
            />

            <CustomButton
              disabled={!isPasswordMatch}
              onClick={handlePasswordReset}
              text={"Reset Password"}
              variant={isPasswordMatch ? "primary" : "secondary"}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </AuthFormWrapper>
  );
};

export default ResetPassword;

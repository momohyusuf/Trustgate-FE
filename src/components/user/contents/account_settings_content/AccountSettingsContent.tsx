import { useState } from "react";
import FormInputField from "../../../ui/forms/AuthFormInputField";
import CustomButton from "../../../ui/buttons/CustomButtom";
import { ValidateInput } from "../../../../utils/helpers";

interface IFormValuesUpdateProfile {
  username?: string;
  email?: string;
}
interface IFormValuesUpdatePassword {
  password: string;
  confirmPassword: string;
  currentPassword: string;
}

interface IFormErrors {
  error: boolean;
  errorName: string;
  message: string;
}
const AccountSettingsContent = () => {
  const [formValuesUpdateProfile, setFormValuesUpdateProfile] =
    useState<IFormValuesUpdateProfile>({
      username: "",
      email: "",
    });
  const [formValuesUpdatePassword, setFormValuesUpdatePassword] =
    useState<IFormValuesUpdatePassword>({
      password: "",
      confirmPassword: "",
      currentPassword: "",
    });
  const [formErrors, setFormErrors] = useState<IFormErrors>({
    error: false,
    message: "",
    errorName: "",
  });

  function handleProfileUpdate() {
    if (
      !ValidateInput.validateEmail(formValuesUpdateProfile.username as string)
    ) {
      setFormErrors({
        error: true,
        errorName: "Username",
        message: "Please enter a valid username",
      });
      return;
    }
    if (
      ValidateInput.validatePassword(
        formValuesUpdateProfile.email as string
      ) !== ""
    ) {
      setFormErrors({
        error: true,
        errorName: "Email",
        message: "Please enter a valid email address",
      });
      return;
    }
  }

  function handlePasswordReset() {
    // verify password in step two before moving to step three

    if (
      !ValidateInput.validateInput(
        formValuesUpdatePassword.currentPassword as string
      )
    ) {
      setFormErrors({
        error: true,
        errorName: "Current Password",
        message: "Please enter your current password",
      });
      return;
    }

    if (
      ValidateInput.validatePassword(
        formValuesUpdatePassword.password as string
      ) !== ""
    ) {
      setFormErrors({
        error: true,
        errorName: "New Password",
        message:
          ValidateInput.validatePassword(
            formValuesUpdatePassword.password as string
          ) + ". Try again",
      });
      return;
    }

    if (
      formValuesUpdatePassword.password !==
      formValuesUpdatePassword.confirmPassword
    ) {
      setFormErrors({
        error: true,
        errorName: "Confirm Password",
        message: "Passwords do not match. Try again",
      });
      return;
    }
  }

  return (
    <section className="max-w-[500px]">
      <h1 className="text-xl lg:text-3xl text-grey-600 font-lora font-semibold mb-8">
        Account settings
      </h1>
      <div className="grid gap-8 animate-fade">
        <FormInputField
          name="Username"
          value={formValuesUpdateProfile.username}
          error={formErrors.error}
          errorName={formErrors.errorName}
          message={formErrors.message}
          placeholder="Enter username"
          handleInputChange={(e) => {
            setFormValuesUpdateProfile((prev: IFormValuesUpdateProfile) => ({
              ...prev,
              username: e.target.value,
            }));
          }}
        />
        <FormInputField
          name="Email"
          value={formValuesUpdateProfile.email}
          error={formErrors.error}
          message={formErrors.message}
          errorName={formErrors.errorName}
          placeholder="Enter your email address"
          handleInputChange={(e) => {
            setFormValuesUpdateProfile((prev: IFormValuesUpdateProfile) => ({
              ...prev,
              email: e.target.value,
            }));
          }}
        />

        <CustomButton
          // disabled={true}

          onClick={handleProfileUpdate}
          text={"Update Profile"}
          variant="primary"
          className="w-full mt-8"
        />
      </div>

      <div className="mt-8">
        <h2 className="text-xl lg:text-3xl text-grey-600 font-lora font-semibold mb-8">
          Change Password
        </h2>
        <div className="grid gap-8 animate-fade">
          <FormInputField
            name="Current Password"
            value={formValuesUpdatePassword.currentPassword}
            error={formErrors.error}
            errorName={formErrors.errorName}
            message={formErrors.message}
            placeholder="Enter current password"
            handleInputChange={(e) => {
              setFormValuesUpdatePassword(
                (prev: IFormValuesUpdatePassword) => ({
                  ...prev,
                  currentPassword: e.target.value,
                })
              );
            }}
          />
          <FormInputField
            name="New Password"
            value={formValuesUpdatePassword.password}
            error={formErrors.error}
            message={formErrors.message}
            errorName={formErrors.errorName}
            placeholder="Enter new password"
            handleInputChange={(e) => {
              setFormValuesUpdatePassword(
                (prev: IFormValuesUpdatePassword) => ({
                  ...prev,
                  password: e.target.value,
                })
              );
            }}
          />
          <FormInputField
            name="Confirm Password"
            value={formValuesUpdatePassword.confirmPassword}
            error={formErrors.error}
            message={formErrors.message}
            errorName={formErrors.errorName}
            placeholder="Confirm new password"
            handleInputChange={(e) => {
              setFormValuesUpdatePassword(
                (prev: IFormValuesUpdatePassword) => ({
                  ...prev,
                  confirmPassword: e.target.value,
                })
              );
            }}
          />

          <CustomButton
            // disabled={true}

            onClick={handlePasswordReset}
            text={"Update Password"}
            variant="primary"
            className="w-full mt-8"
          />
        </div>
      </div>
    </section>
  );
};

export default AccountSettingsContent;

import { useState } from "react";
import CustomButton from "../ui/buttons/CustomButtom";
import AuthFormInputField from "../ui/forms/AuthFormInputField";
import AuthFormWrapper from "../ui/containerWrappers/AuthFormWrappers";
import { ValidateInput } from "../../utils/helpers";

interface IFormValues {
  username?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  code?: string;
}

interface IStep {
  form: JSX.Element;
  description: JSX.Element;
  percentage: string;
}

interface IFormErrors {
  error: boolean;
  errorName: string;
  message: string;
}

interface StepFormProps extends IFormValues {
  setFormValues: React.Dispatch<React.SetStateAction<IFormValues>>;
  formErrors: IFormErrors;
}

const Register = () => {
  const [step, setStep] = useState(1);
  const [formValues, setFormValues] = useState<IFormValues>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    code: "",
  });
  const [formErrors, setFormErrors] = useState<IFormErrors>({
    error: false,
    message: "",
    errorName: "",
  });

  function formStep(): IStep {
    switch (step) {
      case 2:
        return {
          form: (
            <StepTwo
              formErrors={formErrors}
              setFormValues={setFormValues}
              password={formValues.password}
              confirmPassword={formValues.confirmPassword}
            />
          ),
          description: (
            <p className="animate-fade">
              {" "}
              Create a secure password for your account: It must be at least 8
              characters long and include a mix of letters, and numbers.
            </p>
          ),
          percentage: "66%",
        };
      case 3:
        return {
          form: (
            <StepThree
              formErrors={formErrors}
              setFormValues={setFormValues}
              code={formValues.code}
            />
          ),
          description: (
            <p className="animate-fade">
              An email has been sent to your registered address. Please check
              your inbox and enter the verification code provided to confirm
              your email and continue.
            </p>
          ),
          percentage: "100%",
        };

      default:
        return {
          form: (
            <StepOne
              formErrors={formErrors}
              setFormValues={setFormValues}
              username={formValues.username}
              email={formValues.email}
            />
          ),
          description: (
            <p className="animate-fade">
              Enter your personal information to create an account with us.
            </p>
          ),
          percentage: "33%",
        };
    }
  }

  function handleNextStep() {
    if (step === 3) {
      return;
    }
    // verify email in step one before moving to step two
    if (step === 1) {
      if ((formValues.username?.trim().length ?? 0) < 2) {
        setFormErrors({
          errorName: "Username",
          error: true,
          message: "Please enter a valid username",
        });
        return;
      }
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
    if (step === 2) {
      if (
        ValidateInput.validatePassword(formValues.password as string) !== ""
      ) {
        setFormErrors({
          error: true,
          errorName: "Enter Password",
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
    setStep(step + 1);
  }
  return (
    <AuthFormWrapper>
      <div className="grid gap-4 h-[calc(100vh-80px)]  py-8 lg:py-16 justify-center ">
        <div className="flex flex-col gap-8 p-4 max-w-[500px]">
          <h1 className="text-2xl lg:text-4xl text-grey-600 text-center font-bold font-lora">
            Registration
          </h1>
          <div className="text-grey-600 tracking-wide font-inter text-center ">
            {formStep().description}
          </div>
          <div className=" bg-primary-100 border border-primary-100 p-5 lg:p-10 rounded-lg">
            {formStep().form}
            <CustomButton
              // disabled={true}

              onClick={handleNextStep}
              text={step === 3 ? "Continue" : "Next"}
              variant="secondary"
              className="w-full mt-8"
            />
          </div>

          <div className="bg-primary-100 h-[5px] transition-all duration-300 rounded-3xl mx-6">
            <div
              style={{
                width: formStep().percentage,
              }}
              className={`bg-primary-400 h-[5px] transition-all duration-300 rounded-3xl`}
            ></div>
          </div>
        </div>
      </div>
    </AuthFormWrapper>
  );
};

export default Register;

export const StepOne = ({
  formErrors,
  username,
  email,
  setFormValues,
}: StepFormProps) => {
  return (
    <div className="grid gap-8 animate-fade">
      <AuthFormInputField
        name="Username"
        value={username}
        error={formErrors.error}
        errorName={formErrors.errorName}
        message={formErrors.message}
        placeholder="Enter username"
        handleInputChange={(e) => {
          setFormValues((prev) => ({ ...prev, username: e.target.value }));
        }}
      />
      <AuthFormInputField
        name="Email"
        value={email}
        error={formErrors.error}
        message={formErrors.message}
        errorName={formErrors.errorName}
        placeholder="Enter your email address"
        handleInputChange={(e) => {
          setFormValues((prev) => ({ ...prev, email: e.target.value }));
        }}
      />
    </div>
  );
};

export const StepTwo = ({
  setFormValues,
  formErrors,
  password,
  confirmPassword,
}: StepFormProps) => {
  return (
    <div className="grid gap-8 animate-fade">
      <AuthFormInputField
        name="Enter Password"
        value={password}
        error={formErrors.error}
        message={formErrors.message}
        errorName={formErrors.errorName}
        placeholder="Enter your password"
        handleInputChange={(e) => {
          setFormValues((prev) => ({ ...prev, password: e.target.value }));
        }}
      />
      <AuthFormInputField
        name="Confirm Password"
        value={confirmPassword}
        error={formErrors.error}
        message={formErrors.message}
        errorName={formErrors.errorName}
        placeholder="Confirm your password"
        handleInputChange={(e) => {
          setFormValues((prev) => ({
            ...prev,
            confirmPassword: e.target.value,
          }));
        }}
      />
    </div>
  );
};

export const StepThree = ({ setFormValues, code }: StepFormProps) => {
  return (
    <div className="grid gap-8 animate-fade">
      <AuthFormInputField
        name="Code"
        value={code}
        placeholder="Enter your verification code"
        handleInputChange={(e) => {
          setFormValues((prev) => ({ ...prev, code: e.target.value }));
        }}
      />
    </div>
  );
};

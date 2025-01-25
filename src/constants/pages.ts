import Home from "../pages/Home";

// Path: src/pages/organization/
import AboutUs from "../pages/organization/AboutUs";
import PrivacyPolicy from "../pages/organization/PrivacyPolicy";
import TermsOfUse from "../pages/organization/TermsOfUse";

// Auth pages
import UserRegistration from "../pages/auth/Register";
import UserLogin from "../pages/auth/Login";
import UserResetPassword from "../pages/auth/ResetPassword";
import UserForgotPassword from "../pages/auth/ForgotPassword";

interface Page {
  general: {
    path: string;
    component: React.ComponentType;
  }[];
}

export const publicPages: Page = {
  general: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/about-us",
      component: AboutUs,
    },
    {
      path: "/terms-of-use",
      component: TermsOfUse,
    },

    {
      path: "/privacy-policy",
      component: PrivacyPolicy,
    },
  ],
};

export const authPages: Page = {
  general: [
    {
      path: "/auth/register",
      component: UserRegistration,
    },

    {
      path: "/auth/login",
      component: UserLogin,
    },
    {
      path: "/auth/forgot-password",
      component: UserForgotPassword,
    },

    {
      path: "/auth/reset-password",
      component: UserResetPassword,
    },
  ],
};

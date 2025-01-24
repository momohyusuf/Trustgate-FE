import Home from "../pages/Home";

// Path: src/pages/organization/
import AboutUs from "../pages/organization/AboutUs";
import PrivacyPolicy from "../pages/organization/PrivacyPolicy";
import TermsOfUse from "../pages/organization/TermsOfUse";

// Auth pages
import UserRegistration from "../pages/auth/Register";
import UserLogin from "../pages/auth/Login";

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

export const privatePages: Page = {
  general: [
    {
      path: "/register",
      component: UserRegistration,
    },

    {
      path: "/login",
      component: UserLogin,
    },
  ],
};

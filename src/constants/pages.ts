import AboutUs from "../pages/AboutUs";
import Home from "../pages/Home";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsOfUse from "../pages/TermsOfUse";

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

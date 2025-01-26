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

// User protected pages
import BuyVirtualNumbers from "../pages/protected/user/BuyVirtualNumbers";
import ActiveNumbers from "../pages/protected/user/ActiveNumbers";
import HelpAndTutorials from "../pages/protected/user/HelpAndTutorials";
import Notifications from "../pages/protected/user/Notifications";
import TransactionHistory from "../pages/protected/user/TransactionHistory";
import Wallet from "../pages/protected/user/Wallet";
import AccountSettings from "../pages/protected/user/AccountSettings";

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
      path: "/register",
      component: UserRegistration,
    },

    {
      path: "/login",
      component: UserLogin,
    },
    {
      path: "/forgot-password",
      component: UserForgotPassword,
    },

    {
      path: "/reset-password",
      component: UserResetPassword,
    },
  ],
};

export const protectedPages: Page = {
  general: [
    {
      path: "buy-virtual-numbers",
      component: BuyVirtualNumbers,
    },
    {
      path: "active-numbers",
      component: ActiveNumbers,
    },
    {
      path: "wallet",
      component: Wallet,
    },
    {
      path: "transaction-history",
      component: TransactionHistory,
    },
    {
      path: "notifications",
      component: Notifications,
    },

    {
      path: "help-and-tutorials",
      component: HelpAndTutorials,
    },
    {
      path: "account-settings",
      component: AccountSettings,
    },
  ],
};

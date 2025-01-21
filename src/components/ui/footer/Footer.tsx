import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-secondary-100 py-16 px-4">
      <section className="max-w-[1000px] justify-between mx-auto ">
        <section className="flex flex-col gap-8 lg:flex-row ">
          <div className="lg:w-1/2 lg:px-8">
            <img className="mb-4" src="/logo.png" alt="Trust gate logo" />
            <p className="text-grey-600 font-inter">
              TrustGate Enterprise: Your trusted partner for seamless and secure
              online verification services. Experience reliability tailored for
              you!
            </p>
          </div>
          <div className="flex flex-row lg:w-1/2 gap-16 font-inter  lg:p-8">
            <div>
              <h3 className="mb-4 text-primary-400 font-medium">Links</h3>
              <ul className="text-grey-600 grid gap-4">
                {/* <li>Home</li>
                <li>About</li> */}

                <li>
                  <Link className="hover:underline" to="/">
                    Home
                  </Link>
                </li>

                <li>
                  <Link className="hover:underline" to="/about-us">
                    About
                  </Link>
                </li>
              </ul>
            </div>

            <div className="pb-16">
              <h3 className="mb-4 text-primary-400 font-medium">Contact</h3>
              <p className="text-grey-600 mb-4">
                {" "}
                <a href="mailto:support@trustgate.site">
                  support@trustgate.site
                </a>
              </p>
              <div>
                <div className="flex gap-4">
                  <img src="/images/social-icons/instagram.svg" alt="" />
                  <img src="/images/social-icons/telegram.svg" alt="" />
                  <img src="/images/social-icons/tiktok.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="lg:px-6">
          <hr className="border-grey-400 pb-16" />
          <p className="text-center text-grey-600 font-inter max-w-[500px] mx-auto">
            © 2024 TRUSTGATE ENTERPRISES. All Rights Reserved. Privacy Policy
            Terms of service
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

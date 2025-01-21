import PublicPagesWrapper from "../../components/ui/containerWrappers/PublicPagesWrapper";

const TermOfUse = () => {
  return (
    <PublicPagesWrapper>
      <section className="max-w-[1000px] mx-auto mb-24">
        <h1 className="mb-10 font-bold text-center lg:text-left leading-snug lg:leading-[64px] font-playfair text-3xl lg:text-6xl text-grey-600 tracking-wider">
          Terms of Use
        </h1>

        <h3 className="text-lg lg:text-[1.20rem] tracking-wide text-center lg:text-left  font-inter mb-10 underline underline-offset-4">
          <span className="font-medium ">Effective Date: </span>January 2025
        </h3>
        <p className="text-base font-inter text-grey-600 mb-10 text-center lg:text-left">
          Welcome to TrustGate Enterprise. By accessing or using our website and
          services, you agree to comply with these Terms of Use. Please read
          them carefully before proceeding.
        </p>

        <div className="mb-10">
          <h3 className="text-lg tracking-wide lg:text-[1.20rem] text-center lg:text-left  font-inter mb-2 font-medium">
            1. Acceptance of Terms
          </h3>
          <p className="text-base font-inter text-grey-600 ">
            By using our services, you confirm that you have read, understood,
            and agreed to these Terms of Use. If you do not agree, please
            discontinue use of our website and services.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="text-lg tracking-wide lg:text-[1.20rem] text-center lg:text-left  font-inter mb-2 font-medium">
            2. Eligibility
          </h3>
          <p className="text-base font-inter text-grey-600 ">
            You must be at least 16 years old to use our services. By accessing
            our platform, you represent and warrant that you meet this age
            requirement.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="text-lg tracking-wide lg:text-[1.20rem] text-center lg:text-left  font-inter mb-2 font-medium">
            3. Services Provided
          </h3>
          <p className="text-base font-inter text-grey-600 ">
            TrustGate Enterprise provides temporary virtual phone numbers for:
          </p>

          <ListItem
            items={[
              "SMS verification",
              "One-time account registrations.",
              "Other specified purposes.",
            ]}
          />
          <p className="text-base font-inter text-grey-600 ">
            All virtual numbers are intended for one-time use and cannot be
            reused beyond the stated purpose.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="text-lg tracking-wide lg:text-[1.20rem] text-center lg:text-left  font-inter mb-2 font-medium">
            4. Account Responsibilities
          </h3>
          <p className="text-base font-inter text-grey-600 ">
            When creating an account with TrustGate Enterprise, you agree to:
          </p>

          <ListItem
            items={[
              "Provide accurate and up-to-date information.",
              "Keep your account credentials confidential.",
              "Notify us immediately of any unauthorized access to your account.",
            ]}
          />
          <p className="text-base font-inter text-grey-600 ">
            We are not responsible for any loss or damage arising from
            unauthorized account use.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="text-lg tracking-wide lg:text-[1.20rem] text-center lg:text-left  font-inter mb-2 font-medium">
            5. Prohibited Uses
          </h3>
          <p className="text-base font-inter text-grey-600 ">
            You agree not to use our services for:
          </p>

          <ListItem
            items={[
              "Any illegal activities or purposes.",
              "Spamming, phishing, or fraudulent activities.",
              "Violating applicable laws or regulations.",
            ]}
          />
          <p className="text-base font-inter text-grey-600 ">
            We reserve the right to suspend or terminate accounts that violate
            these terms.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="text-lg tracking-wide lg:text-[1.20rem] text-center lg:text-left  font-inter mb-2 font-medium">
            6. Payment Terms
          </h3>
          <p className="text-base font-inter text-grey-600 ">
            Payments for our services are securely processed through third-party
            payment gateways. TrustGate Enterprise does not store or manage
            payment information directly. Please review the terms and conditions
            of the payment provider for further details.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="text-lg tracking-wide lg:text-[1.20rem] text-center lg:text-left  font-inter mb-2 font-medium">
            7. Service Availability
          </h3>
          <p className="text-base font-inter text-grey-600 ">
            We strive to ensure our services are accessible at all times.
            However, we do not guarantee uninterrupted availability and are not
            liable for any service disruptions or downtimes.
          </p>
        </div>
        <div className="mb-10">
          <h3 className="text-lg tracking-wide lg:text-[1.20rem] text-center lg:text-left  font-inter mb-2 font-medium">
            8. Limitation of Liability
          </h3>
          <p className="text-base font-inter text-grey-600 ">
            TrustGate Enterprise is not liable for:
          </p>

          <ListItem
            items={[
              "Indirect, incidental, or consequential damages.",
              "Losses resulting from misuse of our services.",
              "Unauthorized use of purchased virtual phone numbers.",
            ]}
          />
          <p className="text-base font-inter text-grey-600 ">
            Our maximum liability is limited to the amount paid for the service
            in question.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="text-lg tracking-wide lg:text-[1.20rem] text-center lg:text-left  font-inter mb-2 font-medium">
            9. Intellectual Property
          </h3>
          <p className="text-base font-inter text-grey-600 ">
            All content on this website, including text, logos, and designs, is
            the property of TrustGate Enterprise and protected under
            intellectual property laws. Unauthorized use is strictly prohibited.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="text-lg tracking-wide lg:text-[1.20rem] text-center lg:text-left  font-inter mb-2 font-medium">
            10. Modifications to Terms
          </h3>
          <p className="text-base font-inter text-grey-600 ">
            We reserve the right to update these Terms of Use at any time.
            Changes will take effect immediately upon posting on this page. It
            is your responsibility to review the terms periodically to stay
            informed.
          </p>
        </div>
        <div className="mb-10">
          <h3 className="text-lg tracking-wide lg:text-[1.20rem] text-center lg:text-left  font-inter mb-2 font-medium">
            11. Termination
          </h3>
          <p className="text-base font-inter text-grey-600 ">
            We may suspend or terminate your access to our services without
            prior notice if you violate these Terms of Use.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="text-lg tracking-wide lg:text-[1.20rem] text-center lg:text-left  font-inter mb-2 font-medium">
            12. Contact Us
          </h3>
          <p className="text-base font-inter text-grey-600 ">
            If you have questions or require assistance, please contact us:
          </p>
          <ListItem items={["Email: [support@trustgate.site]"]} />
        </div>
      </section>
    </PublicPagesWrapper>
  );
};

export default TermOfUse;

function ListItem({ items }: { items: string[] }) {
  return (
    <ul className="text-base font-inter text-grey-600 list-disc pl-6">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

import PolicyPageLayout, { PolicySection } from "../components/layout/PolicyPageLayout";
import { POLICY_LAST_UPDATED, INSTAGRAM_URL, INSTAGRAM_HANDLE } from "../data/policies";
import { BRAND, WHATSAPP_URL } from "../data";

export default function PrivacyPolicyPage() {
  return (
    <PolicyPageLayout
      title="Privacy Policy"
      lastUpdated={POLICY_LAST_UPDATED}
      testId="privacy-policy-page"
    >
      <PolicySection title="1. Introduction">
        <p>
          {BRAND} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) operates this website and
          processes orders primarily via WhatsApp. This Privacy Policy explains how we collect, use,
          store, and protect your personal information when you visit our site or contact us to place
          an order.
        </p>
      </PolicySection>

      <PolicySection title="2. Information We Collect">
        <ul className="list-disc pl-5 space-y-2 text-white/80">
          <li>
            <strong className="text-white">Contact details:</strong> name, phone number, email (if
            provided), WhatsApp username
          </li>
          <li>
            <strong className="text-white">Order information:</strong> products ordered, sizes,
            preferences, delivery address
          </li>
          <li>
            <strong className="text-white">Payment-related data:</strong> we do not store full card
            details; payments may be processed via third-party providers (e.g. Stripe, bank transfer,
            USDT)
          </li>
          <li>
            <strong className="text-white">Communications:</strong> messages you send us on
            WhatsApp or email
          </li>
          <li>
            <strong className="text-white">Technical data:</strong> IP address, browser type, device
            information, pages visited (via standard analytics or cookies if enabled)
          </li>
        </ul>
      </PolicySection>

      <PolicySection title="3. How We Use Your Information">
        <p>We use your data to:</p>
        <ul className="list-disc pl-5 space-y-2 text-white/80">
          <li>Process and fulfil orders</li>
          <li>Send order updates, QC photos, and shipping notifications</li>
          <li>Respond to enquiries and provide customer support</li>
          <li>Improve our website and services</li>
          <li>Comply with legal obligations</li>
        </ul>
      </PolicySection>

      <PolicySection title="4. Legal Basis">
        <p>
          We process data based on performance of a contract (fulfilling your order), legitimate
          interests (customer service, fraud prevention), and your consent where required (e.g.
          marketing messages).
        </p>
      </PolicySection>

      <PolicySection title="5. Sharing Your Information">
        <p>We may share data with:</p>
        <ul className="list-disc pl-5 space-y-2 text-white/80">
          <li>Shipping and logistics partners (name, address, contact for delivery)</li>
          <li>Payment processors (transaction data only)</li>
          <li>Service providers (hosting, analytics) under confidentiality agreements</li>
        </ul>
        <p>We do not sell your personal information to third parties.</p>
      </PolicySection>

      <PolicySection title="6. Data Retention">
        <p>
          We retain order and communication records for as long as needed to fulfil orders, handle
          warranty and returns claims, and meet legal or tax requirements (typically up to 7 years
          for financial records).
        </p>
      </PolicySection>

      <PolicySection title="7. Security">
        <p>
          We use reasonable technical and organisational measures to protect your data. No method of
          transmission over the internet is 100% secure.
        </p>
      </PolicySection>

      <PolicySection title="8. Your Rights">
        <p>
          Depending on your location, you may have the right to access, correct, delete, or restrict
          use of your personal data, and to object to certain processing. Contact us via WhatsApp to
          exercise these rights.
        </p>
      </PolicySection>

      <PolicySection title="9. Cookies">
        <p>
          Our website may use essential cookies for functionality and optional analytics cookies. You
          can control cookies through your browser settings.
        </p>
      </PolicySection>

      <PolicySection title="10. International Transfers">
        <p>
          If you order from outside our operating country, your data may be transferred
          internationally for fulfilment and support.
        </p>
      </PolicySection>

      <PolicySection title="11. Children">
        <p>
          Our services are not directed at anyone under 18. We do not knowingly collect data from
          minors.
        </p>
      </PolicySection>

      <PolicySection title="12. Changes">
        <p>
          We may update this policy from time to time. The &ldquo;Last updated&rdquo; date at the top
          will reflect changes.
        </p>
      </PolicySection>

      <PolicySection title="13. Contact">
        <p>
          {BRAND} —{" "}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="text-[#FFEB3B] hover:underline"
          >
            WhatsApp
          </a>
          {" · "}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="text-[#FFEB3B] hover:underline"
          >
            Instagram {INSTAGRAM_HANDLE}
          </a>
        </p>
      </PolicySection>
    </PolicyPageLayout>
  );
}

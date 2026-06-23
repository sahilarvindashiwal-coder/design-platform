import PolicyPageLayout, { PolicySection } from "../components/layout/PolicyPageLayout";
import { POLICY_LAST_UPDATED, INSTAGRAM_URL, INSTAGRAM_HANDLE } from "../data/policies";
import { BRAND, WHATSAPP_URL } from "../data";

export default function TermsPage() {
  return (
    <PolicyPageLayout
      title="Terms & Conditions"
      lastUpdated={POLICY_LAST_UPDATED}
      testId="terms-page"
    >
      <PolicySection title="1. Agreement">
        <p>
          By using this website or placing an order via WhatsApp, you agree to these Terms &amp;
          Conditions. If you do not agree, please do not use our services.
        </p>
      </PolicySection>

      <PolicySection title="2. About Us">
        <p>
          {BRAND} sells luxury-inspired fashion accessories including bags, watches, footwear, and
          eyewear. Orders are placed and confirmed through WhatsApp communication with our team.
        </p>
      </PolicySection>

      <PolicySection title="3. Product Descriptions">
        <p>
          We aim to describe products accurately using real QC photographs where possible. Minor
          variations in materials, colour, or finishing may occur due to manufacturing batches.
          Product images on the site are representative; the item you receive is subject to pre-ship
          QC approval.
        </p>
      </PolicySection>

      <PolicySection title="4. Pricing & Payment">
        <ul className="list-disc pl-5 space-y-2 text-white/80">
          <li>Prices are quoted in the currency stated at the time of order</li>
          <li>A final price is confirmed on WhatsApp before payment</li>
          <li>Payment must be received before production, QC, or shipping begins</li>
          <li>
            Accepted methods: bank transfer, USDT, and card via secure payment link (as offered at
            time of order)
          </li>
          <li>
            We reserve the right to cancel orders where payment is not received or is disputed
          </li>
        </ul>
      </PolicySection>

      <PolicySection title="5. Order Process">
        <ol className="list-decimal pl-5 space-y-2 text-white/80">
          <li>Enquire via WhatsApp or the website</li>
          <li>Receive availability and price confirmation</li>
          <li>Pay via agreed method</li>
          <li>Receive QC photos for approval (where applicable)</li>
          <li>Shipment after approval</li>
        </ol>
        <p>
          An order is confirmed only when we acknowledge payment and order details in writing.
        </p>
      </PolicySection>

      <PolicySection title="6. Shipping & Delivery">
        <ul className="list-disc pl-5 space-y-2 text-white/80">
          <li>We ship worldwide to supported destinations</li>
          <li>
            Delivery times are estimates (typically 7–14 business days after dispatch; international
            customs may cause delays)
          </li>
          <li>
            Risk of loss passes to you upon delivery to the carrier unless otherwise required by law
          </li>
          <li>
            You are responsible for import duties, taxes, and customs clearance in your country
          </li>
          <li>
            Provide accurate shipping details; we are not liable for failed delivery due to incorrect
            addresses
          </li>
        </ul>
      </PolicySection>

      <PolicySection title="7. QC Approval">
        <p>
          Where pre-ship QC photos are provided, you must approve or raise concerns within{" "}
          <strong className="text-white">48 hours</strong>. Silence after 48 hours may be treated as
          approval to ship.
        </p>
      </PolicySection>

      <PolicySection title="8. Warranty">
        <p>
          Products include a <strong className="text-white">1-year warranty</strong> against
          manufacturing defects under normal use. Warranty does not cover wear and tear, misuse,
          unauthorised repair, or damage after delivery. Claims require photo or video evidence and
          original order reference.
        </p>
      </PolicySection>

      <PolicySection title="9. Intellectual Property">
        <p>
          All website content (text, images, branding) is owned by {BRAND} or used under licence. You
          may not copy or reproduce site content without permission.
        </p>
      </PolicySection>

      <PolicySection title="10. Limitation of Liability">
        <p>
          To the fullest extent permitted by law, {BRAND} is not liable for indirect, incidental, or
          consequential damages. Our total liability for any claim relating to an order is limited to
          the amount you paid for that order.
        </p>
      </PolicySection>

      <PolicySection title="11. Prohibited Use">
        <p>
          You agree not to use our services for unlawful purposes, fraud, or abuse of our team or
          systems.
        </p>
      </PolicySection>

      <PolicySection title="12. Governing Law">
        <p>
          These terms are governed by the laws of Australia. Disputes shall be subject to the courts
          of Australia unless mandatory consumer laws in your country provide otherwise.
        </p>
      </PolicySection>

      <PolicySection title="13. Changes">
        <p>
          We may update these terms at any time. Continued use of the site after changes constitutes
          acceptance.
        </p>
      </PolicySection>

      <PolicySection title="14. Contact">
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

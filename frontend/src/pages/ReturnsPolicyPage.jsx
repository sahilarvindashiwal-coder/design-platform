import PolicyPageLayout, { PolicySection } from "../components/layout/PolicyPageLayout";
import { POLICY_LAST_UPDATED, INSTAGRAM_URL, INSTAGRAM_HANDLE } from "../data/policies";
import { BRAND, WHATSAPP_URL } from "../data";

export default function ReturnsPolicyPage() {
  return (
    <PolicyPageLayout
      title="Returns & Refunds"
      lastUpdated={POLICY_LAST_UPDATED}
      testId="returns-policy-page"
    >
      <PolicySection title="1. Overview">
        <p>
          We want you to be satisfied with your purchase. This policy explains when returns and
          refunds are available.
        </p>
      </PolicySection>

      <PolicySection title="2. 40-Day Return Window">
        <p>
          You may request a return within <strong className="text-white">40 days</strong> of
          confirmed delivery only if:
        </p>
        <p className="font-semibold text-white mt-4">(a) The product is unused</p>
        <ul className="list-disc pl-5 space-y-2 text-white/80">
          <li>Unworn, unwashed, and in the same condition as received</li>
          <li>All original tags, accessories, packaging, and protective materials included</li>
          <li>No signs of wear, alteration, scuffs, odours, or personalisation</li>
        </ul>
        <p className="font-semibold text-white mt-4">(b) A manufacturing defect is found</p>
        <ul className="list-disc pl-5 space-y-2 text-white/80">
          <li>A defect present at the time of delivery (not caused by use, accident, or improper care)</li>
          <li>You must provide clear photo or video evidence within the 40-day window</li>
        </ul>
        <p className="mt-4">
          Returns requested after 40 days, or for used items (except valid manufacturing defects
          reported with evidence within 40 days), are not eligible for refund.
        </p>
      </PolicySection>

      <PolicySection title="3. Non-Returnable Items">
        <p>The following are generally not eligible for return or refund:</p>
        <ul className="list-disc pl-5 space-y-2 text-white/80">
          <li>Items marked as used, worn, or altered</li>
          <li>Items missing tags, packaging, or components</li>
          <li>Custom or made-to-order pieces (unless defective)</li>
          <li>Items damaged after delivery through misuse or improper storage</li>
          <li>
            Orders where QC was approved and the item matches approved photos (unless a hidden
            manufacturing defect is proven)
          </li>
        </ul>
      </PolicySection>

      <PolicySection title="4. How to Request a Return">
        <p>
          Contact us on <strong className="text-white">WhatsApp</strong> within 40 days of delivery
          with:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-white/80">
          <li>Order reference or date</li>
          <li>Product name</li>
          <li>Reason for return (unused or defect)</li>
          <li>Clear photos or video of the item and packaging</li>
        </ul>
        <p className="mt-4">
          We will respond within <strong className="text-white">3–5 business days</strong> with
          instructions. Do not ship items back without our written approval and return address.
        </p>
      </PolicySection>

      <PolicySection title="5. Return Shipping">
        <ul className="list-disc pl-5 space-y-2 text-white/80">
          <li>
            <strong className="text-white">Change-of-mind / unused returns (approved):</strong>{" "}
            customer pays return shipping unless we state otherwise
          </li>
          <li>
            <strong className="text-white">Confirmed manufacturing defect:</strong> we may provide a
            prepaid return label or reimburse reasonable return shipping (at our discretion)
          </li>
          <li>
            Use tracked, insured shipping. We are not responsible for items lost in return transit
          </li>
        </ul>
      </PolicySection>

      <PolicySection title="6. Inspection">
        <p>
          Returned items are inspected upon receipt. Refunds are processed only after inspection
          confirms eligibility.
        </p>
      </PolicySection>

      <PolicySection title="7. Refunds">
        <ul className="list-disc pl-5 space-y-2 text-white/80">
          <li>
            Approved refunds are issued to the original payment method within{" "}
            <strong className="text-white">7–14 business days</strong> of inspection approval
          </li>
          <li>
            Shipping fees on the original order are non-refundable unless the return is due to our
            error or a confirmed defect
          </li>
          <li>Currency conversion or payment processor fees may not be refundable</li>
        </ul>
      </PolicySection>

      <PolicySection title="8. Exchanges">
        <p>
          We may offer an exchange (same or different item) instead of a refund where stock allows.
          Price differences may apply.
        </p>
      </PolicySection>

      <PolicySection title="9. Defective Items">
        <p>
          For valid manufacturing defects within the warranty period, we may offer repair,
          replacement, or refund at our discretion after reviewing evidence.
        </p>
      </PolicySection>

      <PolicySection title="10. Lost or Damaged in Transit">
        <p>
          If your parcel arrives damaged or is lost by the carrier, contact us within{" "}
          <strong className="text-white">7 days</strong> of the expected delivery date with photos
          of outer packaging and contents. We will work with the carrier and may reship or refund as
          appropriate.
        </p>
      </PolicySection>

      <PolicySection title="11. Chargebacks">
        <p>
          Please contact us before initiating a payment dispute. Unauthorised chargebacks on valid
          orders may result in account restriction.
        </p>
      </PolicySection>

      <PolicySection title="12. Contact">
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

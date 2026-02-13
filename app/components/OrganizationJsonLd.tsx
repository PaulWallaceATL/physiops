import { SITE_URL, DEFAULT_TITLE, DEFAULT_DESCRIPTION } from "@/app/lib/site";

const schema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Physio PS",
  url: SITE_URL,
  description: DEFAULT_DESCRIPTION,
  logo: `${SITE_URL}/icon?width=32&height=32`,
  sameAs: [],
};

export default function OrganizationJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

import { Helmet } from "react-helmet-async";

export default function SEO({
  title,
  description,
  keywords,
  canonicalUrl,
  ogType = "website",
  ogImage = "/favicon.jpeg",
  noindex = false,
  structuredData,
}) {
  const siteName = "Tombo Ati Al Mukarramah";
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  
  // Set basis URL canonical (bisa diubah jika custom domain sudah terpasang)
  const baseCanonical = "https://RadizJoster-web.github.io/tombo-ati";
  const canonical = canonicalUrl ? `${baseCanonical}${canonicalUrl}` : baseCanonical;

  // Ubah relative path image ke absolute path untuk OG tags jika diperlukan
  const absoluteOgImage = ogImage.startsWith("/") 
    ? `${baseCanonical}${ogImage}` 
    : ogImage;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="Muhammad Yandi bin Jajang Jumena" />

      {/* Robots meta tag */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}

      {/* Canonical Link */}
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteOgImage} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteOgImage} />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}

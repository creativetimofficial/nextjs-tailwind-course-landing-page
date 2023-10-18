import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Layout } from "@/components";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NextJS Tailwind Course Landing Page",
  description:
    "Introducing Tailwind Course Landing Page, a versatile and engaging landing page template designed using Tailwind CSS and Material Tailwind.",
  keywords:
    "course landing page, course landing page template, course template, online course presentation, educational landing page, tailwind, tailwind css, tailwind template, course promotion, e-learning, online education, visual presentation, tailwind css, material tailwind, free template, educator, institution showcase, online course business, course branding, digital presentation, course builder, responsive design, course showcase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html: `.async-hide { opacity: 0 !important} `,
          }}
        ></style>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(a,s,y,n,c,h,i,d,e){s.className+=' '+y;h.start=1*new Date;h.end=i=function(){s.className=s.className.replace(RegExp(' ?'+y),'')};(a[n]=a[n]||[]).hide=h;setTimeout(function(){i();h.end=null},c);h.timeout=c;})(window,document.documentElement,'async-hide','dataLayer',4000,{'GTM-K9BGS8K':true});`,
          }}
        ></script>
        {/* Analytics-Optimize Snippet */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');ga('create', 'UA-46172202-22', 'auto', {allowLinker: true});ga('set', 'anonymizeIp', true);ga('require', 'GTM-K9BGS8K');ga('require', 'displayfeatures');ga('require', 'linker');ga('linker:autoLink', ["2checkout.com","avangate.com"]);`,
          }}
        ></script>
        {/* end Analytics-Optimize Snippet */}
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-NKDMSK6');`,
          }}
        ></script>
        {/* End Google Tag Manager */}
        <link
          rel="canonical"
          href="https://www.creative-tim.com/product/nextjs-tailwind-course-landing-page"
        />

        <meta
          itemProp="name"
          content="NextJS Tailwind Course Landing Page by Creative Tim"
        />
        <meta
          itemProp="description"
          content="Introducing Tailwind Course Landing Page, a versatile and engaging landing page template designed using Tailwind CSS and Material Tailwind."
        />

        <meta
          itemProp="image"
          content="https://s3.amazonaws.com/creativetim_bucket/products/744/original/material-tailwind-react-courses-template-thumbnail.jpg"
        />

        {/* Twitter Card data */}
        <meta name="twitter:card" content="product" />
        <meta name="twitter:site" content="@creativetim" />
        <meta
          name="twitter:title"
          content="NextJS Tailwind Course Landing Page by Creative Tim"
        />

        <meta
          name="twitter:description"
          content="Introducing Tailwind Course Landing Page, a versatile and engaging landing page template designed using Tailwind CSS and Material Tailwind."
        />
        <meta name="twitter:creator" content="@creativetim" />
        <meta
          name="twitter:image"
          content="https://s3.amazonaws.com/creativetim_bucket/products/744/original/material-tailwind-react-courses-template-thumbnail.jpg"
        />

        {/* Open Graph data */}
        <meta property="fb:app_id" content="655968634437471" />
        <meta
          property="og:title"
          content="NextJS Tailwind Course Landing Page by Creative Tim"
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="http://demos.creative-tim.com/nextjs-tailwind-course-landing-page"
        />
        <meta
          property="og:image"
          content="https://s3.amazonaws.com/creativetim_bucket/products/744/original/material-tailwind-react-courses-template-thumbnail.jpg"
        />
        <meta
          property="og:description"
          content="Introducing Tailwind Course Landing Page, a versatile and engaging landing page template designed using Tailwind CSS and Material Tailwind."
        />
        <meta property="og:site_name" content="Creative Tim" />

        <script
          defer
          data-site="www.creative-tim.com"
          src="https://api.nepcha.com/js/nepcha-analytics.js"
        ></script>
        <link
          rel="shortcut icon"
          href="/nextjs-tailwind-course-landing-page/favicon.png"
          type="image/png"
        />
      </head>
      <body className={roboto.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NKDMSK6"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}

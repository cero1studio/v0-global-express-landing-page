import Script from 'next/script'
import {
  GA_MEASUREMENT_ID,
  GTM_ID,
  GOOGLE_ADS_ID,
  GOOGLE_ADS_CONVERSION_SEND_TO,
} from '@/lib/site-config'

const gtmId = GTM_ID.trim() || null
const gaId = GA_MEASUREMENT_ID.trim() || null
const adsSendTo = GOOGLE_ADS_CONVERSION_SEND_TO.trim()
const adsIdExplicit = GOOGLE_ADS_ID.trim()
const adsId =
  adsIdExplicit || (adsSendTo.includes('/') ? adsSendTo.split('/')[0] : null)

const gtagLoaderId = !gtmId ? adsId || gaId || null : null

export function GoogleTags() {
  return (
    <>
      {gtmId ? (
        <>
          <Script id="gtm-base" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`}
          </Script>
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}" height="0" width="0" style="display:none;visibility:hidden" title="Google Tag Manager"></iframe>`,
            }}
          />
        </>
      ) : null}

      {gtmId ? null : gtagLoaderId ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gtagLoaderId}`}
            strategy="beforeInteractive"
          />
          <Script id="gtag-config" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              ${adsId ? `gtag('config', '${adsId}', { allow_enhanced_conversions: true });` : ''}
              ${gaId ? `gtag('config', '${gaId}', { send_page_view: true, allow_google_signals: true });` : ''}
            `}
          </Script>
        </>
      ) : null}
    </>
  )
}

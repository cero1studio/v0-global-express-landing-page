(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/repos/GER-filial/v0-global-express-landing-page/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/repos/GER-filial/v0-global-express-landing-page/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/repos/GER-filial/v0-global-express-landing-page/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/repos/GER-filial/v0-global-express-landing-page/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/repos/GER-filial/v0-global-express-landing-page/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/repos/GER-filial/v0-global-express-landing-page/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/repos/GER-filial/v0-global-express-landing-page/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/repos/GER-filial/v0-global-express-landing-page/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 dark:bg-destructive/60", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-full gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-full px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8',
            'icon-lg': 'size-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/repos/GER-filial/v0-global-express-landing-page/lib/site-config.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Configuración fija para export estático (`output: 'export'`).
 * Edita aquí los IDs; no depende de variables de entorno en el build.
 */ /** URL canónica del sitio (sin barra final) */ __turbopack_context__.s([
    "GA_MEASUREMENT_ID",
    ()=>GA_MEASUREMENT_ID,
    "GOOGLE_ADS_CONVERSION_SEND_TO",
    ()=>GOOGLE_ADS_CONVERSION_SEND_TO,
    "GOOGLE_ADS_ID",
    ()=>GOOGLE_ADS_ID,
    "GTM_ID",
    ()=>GTM_ID,
    "SITE_URL",
    ()=>SITE_URL
]);
const SITE_URL = 'https://globalexpressrecruiting.com';
const GA_MEASUREMENT_ID = 'G-42QRG2806R';
const GTM_ID = '';
const GOOGLE_ADS_ID = '';
const GOOGLE_ADS_CONVERSION_SEND_TO = '';
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/repos/GER-filial/v0-global-express-landing-page/components/gracias-analytics.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GraciasAnalytics",
    ()=>GraciasAnalytics
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/repos/GER-filial/v0-global-express-landing-page/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$lib$2f$site$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/repos/GER-filial/v0-global-express-landing-page/lib/site-config.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const adsConversionSendTo = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$lib$2f$site$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GOOGLE_ADS_CONVERSION_SEND_TO"].trim();
function GraciasAnalytics() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GraciasAnalytics.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const w = window;
            w.dataLayer = w.dataLayer || [];
            w.dataLayer.push({
                event: 'form_lead_complete',
                page_path: '/gracias'
            });
            if (adsConversionSendTo) {
                w.gtag?.('event', 'conversion', {
                    send_to: adsConversionSendTo
                });
            }
        }
    }["GraciasAnalytics.useEffect"], []);
    return null;
}
_s(GraciasAnalytics, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = GraciasAnalytics;
var _c;
__turbopack_context__.k.register(_c, "GraciasAnalytics");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/gracias/gracias-view.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GraciasView",
    ()=>GraciasView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/repos/GER-filial/v0-global-express-landing-page/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/repos/GER-filial/v0-global-express-landing-page/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/repos/GER-filial/v0-global-express-landing-page/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/repos/GER-filial/v0-global-express-landing-page/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$components$2f$gracias$2d$analytics$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/repos/GER-filial/v0-global-express-landing-page/components/gracias-analytics.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function primerNombre(completo) {
    const p = completo.trim().split(/\s+/)[0];
    if (!p) return '';
    return p.charAt(0).toLocaleUpperCase('es') + p.slice(1).toLocaleLowerCase('es');
}
function GraciasView() {
    _s();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const nombreCompleto = searchParams.get('nombre')?.trim() ?? '';
    const telefono = searchParams.get('telefono')?.trim() ?? '';
    const saludo = primerNombre(nombreCompleto);
    const personalizado = Boolean(saludo || telefono);
    const titulo = saludo ? `¡Gracias, ${saludo}!` : '¡Gracias! Hemos recibido su información';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-background flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$components$2f$gracias$2d$analytics$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GraciasAnalytics"], {}, void 0, false, {
                fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/gracias/gracias-view.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "border-b border-border bg-white shadow-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "inline-block",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/images/design-mode/GlobalExpressRecruiting_Color.png",
                            alt: "Global Express Recruiting",
                            className: "h-10 sm:h-12 w-auto",
                            width: 200,
                            height: 48
                        }, void 0, false, {
                            fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/gracias/gracias-view.tsx",
                            lineNumber: 31,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/gracias/gracias-view.tsx",
                        lineNumber: 30,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/gracias/gracias-view.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/gracias/gracias-view.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 flex items-center justify-center px-4 py-12 sm:py-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-lg w-full text-center space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto w-20 h-20 rounded-full bg-green-500 flex items-center justify-center shadow-lg",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-10 h-10 text-white",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                "aria-hidden": true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2.5,
                                    d: "M5 13l4 4L19 7"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/gracias/gracias-view.tsx",
                                    lineNumber: 52,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/gracias/gracias-view.tsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/gracias/gracias-view.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-2xl sm:text-3xl font-bold text-primary font-oswald",
                            children: titulo
                        }, void 0, false, {
                            fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/gracias/gracias-view.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this),
                        personalizado ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-muted-foreground text-sm sm:text-base leading-relaxed space-y-3 text-left sm:text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        "Hemos registrado su solicitud correctamente. Un asesor de",
                                        ' ',
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-foreground font-medium",
                                            children: "Global Express Recruiting"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/gracias/gracias-view.tsx",
                                            lineNumber: 65,
                                            columnNumber: 17
                                        }, this),
                                        " se comunicará con usted pronto para continuar con su proceso migratorio."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/gracias/gracias-view.tsx",
                                    lineNumber: 63,
                                    columnNumber: 15
                                }, this),
                                telefono ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "rounded-2xl bg-white border border-border px-4 py-3 text-foreground",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "block text-xs uppercase tracking-wide text-muted-foreground mb-1",
                                            children: "Le escribirán o llamarán a"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/gracias/gracias-view.tsx",
                                            lineNumber: 70,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-oswald text-lg font-semibold text-primary",
                                            children: telefono
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/gracias/gracias-view.tsx",
                                            lineNumber: 73,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/gracias/gracias-view.tsx",
                                    lineNumber: 69,
                                    columnNumber: 17
                                }, this) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/gracias/gracias-view.tsx",
                            lineNumber: 62,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground text-sm sm:text-base leading-relaxed",
                            children: "Un asesor de Global Express Recruiting se pondrá en contacto con usted pronto para continuar con su proceso migratorio."
                        }, void 0, false, {
                            fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/gracias/gracias-view.tsx",
                            lineNumber: 78,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-2 flex flex-col sm:flex-row gap-3 justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                asChild: true,
                                variant: "outline",
                                size: "lg",
                                className: "rounded-full !bg-white text-primary !border-2 !border-primary font-bold shadow-sm hover:!bg-primary/5 hover:text-primary",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    children: "Volver al inicio"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/gracias/gracias-view.tsx",
                                    lineNumber: 90,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/gracias/gracias-view.tsx",
                                lineNumber: 84,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/gracias/gracias-view.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/gracias/gracias-view.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/gracias/gracias-view.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/gracias/gracias-view.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_s(GraciasView, "a+DZx9DY26Zf8FVy1bxe3vp9l1w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = GraciasView;
var _c;
__turbopack_context__.k.register(_c, "GraciasView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_repos_GER-filial_v0-global-express-landing-page_b94ed38d._.js.map
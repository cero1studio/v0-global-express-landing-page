(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/repos/GER-filial/v0-global-express-landing-page/lib/google-enhanced-conversions.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Clave temporal para pasar email/teléfono a /gracias (conversiones avanzadas). Se borra al leer. */ __turbopack_context__.s([
    "GE_LEAD_EC_KEY",
    ()=>GE_LEAD_EC_KEY,
    "normalizeEmailForHash",
    ()=>normalizeEmailForHash,
    "sha256HexUtf8",
    ()=>sha256HexUtf8,
    "toPhoneE164",
    ()=>toPhoneE164
]);
const GE_LEAD_EC_KEY = '__ge_lead_ec_v1';
async function sha256HexUtf8(value) {
    const data = new TextEncoder().encode(value);
    const buf = await crypto.subtle.digest('SHA-256', data);
    return Array.from(new Uint8Array(buf)).map((b)=>b.toString(16).padStart(2, '0')).join('');
}
function normalizeEmailForHash(email) {
    return email.trim().toLowerCase();
}
function toPhoneE164(countryCode, phoneDigits) {
    const code = countryCode.replace(/\D/g, '');
    const num = phoneDigits.replace(/\D/g, '');
    if (!code || !num) return '';
    return `+${code}${num}`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
"[project]/Documents/repos/GER-filial/v0-global-express-landing-page/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/repos/GER-filial/v0-global-express-landing-page/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/repos/GER-filial/v0-global-express-landing-page/lib/utils.ts [app-client] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm', 'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]', 'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Input;
;
var _c;
__turbopack_context__.k.register(_c, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/repos/GER-filial/v0-global-express-landing-page/components/ui/checkbox.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Checkbox",
    ()=>Checkbox
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/repos/GER-filial/v0-global-express-landing-page/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/repos/GER-filial/v0-global-express-landing-page/node_modules/@radix-ui/react-checkbox/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/Documents/repos/GER-filial/v0-global-express-landing-page/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/repos/GER-filial/v0-global-express-landing-page/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
function Checkbox({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "checkbox",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50', className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Indicator"], {
            "data-slot": "checkbox-indicator",
            className: "flex items-center justify-center text-current transition-none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
                className: "size-3.5"
            }, void 0, false, {
                fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/components/ui/checkbox.tsx",
                lineNumber: 26,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/components/ui/checkbox.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/components/ui/checkbox.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = Checkbox;
;
var _c;
__turbopack_context__.k.register(_c, "Checkbox");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GlobalExpressRecruitingPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/repos/GER-filial/v0-global-express-landing-page/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/repos/GER-filial/v0-global-express-landing-page/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/repos/GER-filial/v0-global-express-landing-page/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$lib$2f$google$2d$enhanced$2d$conversions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/repos/GER-filial/v0-global-express-landing-page/lib/google-enhanced-conversions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/Documents/repos/GER-filial/v0-global-express-landing-page/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/Documents/repos/GER-filial/v0-global-express-landing-page/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Documents/repos/GER-filial/v0-global-express-landing-page/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/Documents/repos/GER-filial/v0-global-express-landing-page/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/Documents/repos/GER-filial/v0-global-express-landing-page/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/Documents/repos/GER-filial/v0-global-express-landing-page/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Quote$3e$__ = __turbopack_context__.i("[project]/Documents/repos/GER-filial/v0-global-express-landing-page/node_modules/lucide-react/dist/esm/icons/quote.js [app-client] (ecmascript) <export default as Quote>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/repos/GER-filial/v0-global-express-landing-page/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/repos/GER-filial/v0-global-express-landing-page/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/repos/GER-filial/v0-global-express-landing-page/components/ui/checkbox.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
// URL del Google Apps Script - Configurada y lista para usar
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyHdXW8v9_DZ5uq-Vf-E-w_NnMTFlQVXZYoeZcyoFdaRuj39USCMdboXtuezflP13SPjg/exec';
function GlobalExpressRecruitingPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [openFaqIndex, setOpenFaqIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentBanner, setCurrentBanner] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [currentMediaSlide, setCurrentMediaSlide] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isVideoModalOpen, setIsVideoModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [countryCode, setCountryCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('+57');
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [submitStatus, setSubmitStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('idle');
    const [submitMessage, setSubmitMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        phone: '',
        email: '',
        city: '',
        canCover: '',
        understandsCost: false,
        acceptsPrivacy: false
    });
    // Prevenir scroll cuando el modal está abierto
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GlobalExpressRecruitingPage.useEffect": ()=>{
            if (isModalOpen || isVideoModalOpen) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'unset';
            }
            // Cleanup
            return ({
                "GlobalExpressRecruitingPage.useEffect": ()=>{
                    document.body.style.overflow = 'unset';
                }
            })["GlobalExpressRecruitingPage.useEffect"];
        }
    }["GlobalExpressRecruitingPage.useEffect"], [
        isModalOpen,
        isVideoModalOpen
    ]);
    const scrollToSection = (id)=>{
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth'
            });
            setMobileMenuOpen(false);
        }
    };
    const heroBanners = [
        {
            title: "SU CAMINO LEGAL Y SEGURO PARA VIVIR EN ESTADOS UNIDOS",
            subtitle: "Seguridad, estabilidad y respaldo legal para su nuevo comienzo.",
            image: "/happy-family-together-smiling.jpg",
            alt: "Familia tradicional con mascota"
        },
        {
            title: "CONSTRUYAN JUNTOS SU FUTURO EN ESTADOS UNIDOS",
            subtitle: "Oportunidades profesionales para parejas que buscan crecer en Estados Unidos.",
            image: "/professional-couple-smiling-together-planning-futu.jpg",
            alt: "Pareja sin hijos"
        },
        {
            title: "UN MEJOR FUTURO PARA USTED Y SU FAMILIA",
            subtitle: "Brindamos apoyo integral a padres y madres solteros con hijos.",
            image: "/single-parent-with-child-smiling-hopeful.jpg",
            alt: "Soltero(a) con hijo(a)"
        }
    ];
    const mediaTestimonials = [
        {
            quote: "Nota destacada sobre oportunidades laborales para familias colombianas que buscan radicarse en los Estados Unidos a través de programas migratorios legales.",
            logo: "https://globalexpresscol.com/wp-content/uploads/2025/09/Semana_Colombia_logo.svg.svg",
            url: "https://www.semana.com/hablan-las-marcas/articulo/le-gustaria-vivir-en-estados-unidos-esta-compania-ofrece-asesoria-para-ser-reclutado-por-empresas-americanas/202300/"
        },
        {
            quote: "Entrevista sobre nuestro liderazgo en reclutamiento internacional y apoyo en la reducción del déficit laboral en los Estados Unidos, con enfoque en familias colombianas que inician su proceso migratorio.",
            logo: "https://globalexpresscol.com/wp-content/uploads/2025/09/Logo_oficial_de_Blu_Radio.svg",
            url: "https://www.bluradio.com/sociedad/estilo-de-vida/global-express-recruiting-la-compania-que-gestiona-su-residencia-permanente-en-usa-cm25"
        },
        {
            quote: "Nota especial sobre alternativas de migración legal para profesionales y empresarios que buscan radicarse en los Estados Unidos a través del visado EB-3.",
            logo: "https://globalexpresscol.com/wp-content/uploads/2025/09/Group-2686.svg",
            url: "https://www.semana.com/hablan-las-marcas/articulo/le-gustaria-vivir-en-estados-unidos-esta-compania-ofrece-asesoria-para-ser-reclutado-por-empresas-americanas/202300/"
        },
        {
            quote: "Reporte sobre el impacto del programa EB-3 en Colombia, destacando cómo Global Express Recruiting facilita el acceso legal a empleo y residencia permanente en EE. UU. para perfiles calificados.",
            logo: "https://globalexpresscol.com/wp-content/uploads/2025/09/Group-2687.svg",
            url: "https://www.infobae.com/colombia/2023/12/01/colombiana-explico-una-visa-simple-para-trabajar-legal-en-estados-unidos/"
        },
        {
            quote: "Análisis sobre los errores más comunes en entrevistas consulares y cómo Global Express Recruiting orienta a los aplicantes del programa EB-3 para afrontarlas con preparación y respaldo legal.",
            logo: "https://globalexpresscol.com/wp-content/uploads/2025/09/LA-FM-1.svg",
            url: "https://www.lafm.com.co/estilo-de-vida/los-errores-que-nunca-debe-cometer-durante-la-entrevista-para-solicitar-una-visa"
        },
        {
            quote: "Análisis sobre cómo la visa EB-3 fortalece la migración laboral legal y brinda oportunidades para trabajadores latinoamericanos en Estados Unidos.",
            logo: "https://globalexpresscol.com/wp-content/uploads/2025/08/EL-TIEMPO-1.png",
            url: "https://www.eltiempo.com/economia/finanzas-personales/la-visa-para-trabajadores-que-fortalece-la-migracion-legal-por-vias-laborales-a-estados-unidos-3474991"
        },
        {
            quote: "Nuestra sede principal en EE. UU. fue consultada para mostrar cómo conectamos Latinoamérica y EE. UU., transformando vidas de cientos de familias.",
            logo: "https://globalexpresscol.com/wp-content/uploads/2025/08/USA-TODAY-1.png",
            url: "https://www.usatoday.com/story/special/contributor-content/2025/07/25/global-express-recruitings-mission-bridging-borders-to-transform-lives/85379361007/"
        },
        {
            quote: "Recomendaciones de Global Express Recruiting sobre errores frecuentes al solicitar visas de trabajo, claves para aumentar las posibilidades de aprobación.",
            logo: "https://globalexpresscol.com/wp-content/uploads/2025/08/Capa-3.png",
            url: "https://www.lafm.com.co/estilo-de-vida/estos-son-los-errores-que-nunca-debe-cometer-al-pedir-una-visa-de-trabajo-a-eeuu"
        },
        {
            quote: "Análisis de cómo la visa EB-3 brinda a familias colombianas la oportunidad de regularizarse y trabajar legalmente en Estados Unidos.",
            logo: "https://globalexpresscol.com/wp-content/uploads/2025/08/YAHOO-NEWS-1.svg",
            url: "https://es-us.noticias.yahoo.com/alternativa-colombianos-b%C3%BAsqueda-empleo-residencia-070000774.html"
        },
        {
            quote: "Visado EB-3 se destaca como vía segura frente a políticas migratorias restrictivas, ofreciendo alternativas laborales para familias colombianas.",
            logo: "https://globalexpresscol.com/wp-content/uploads/2025/08/Group-2703.png",
            url: "https://www.pulzo.com/mundo/estados-unidos/visa-que-esquiva-politicas-donald-trump-cual-es-como-pide-PP4604830#google_vignette"
        },
        {
            quote: "Cobertura sobre programas EB-3 como opción de migración legal para colombianos, facilitando empleo formal y residencia permanente en Estados Unidos.",
            logo: "https://globalexpresscol.com/wp-content/uploads/2025/08/LOGOS_VALORA_ANALITIK-03-1.svg",
            url: "https://www.valoraanalitik.com/alternativa-colombianos-empleo-ee-uu"
        },
        {
            quote: "Reportaje sobre cómo las visas EB-3 abren camino legal hacia la Green Card para trabajadores y sus familias en Estados Unidos.",
            logo: "https://globalexpresscol.com/wp-content/uploads/2025/08/Red_Noticias2019-1.svg",
            url: "https://redmas.com.co/mundo/Relevan-la-via-legal-que-abre-camino-para-la-green-card-en-Estados-Unidos-usted-y-su-familia-pueden-aplicar-desde-ya-20250621-0004.html"
        },
        {
            quote: "El endurecimiento de políticas migratorias refuerza la importancia de las vías laborales EB-3 para migrar legalmente a Estados Unidos.",
            logo: "https://globalexpresscol.com/wp-content/uploads/2025/08/Capa-1.jpg",
            url: "https://www.kienyke.com/colombia/la-alternativa-de-visado-que-cobra-fuerza-tras-duras-politicas-de-trump"
        },
        {
            quote: "La migración laboral EB-3 sigue siendo una oportunidad viable, pese a restricciones fronterizas, brindando opciones legales a latinoamericanos.",
            logo: "https://globalexpresscol.com/wp-content/uploads/2025/08/Capa-1-6.svg",
            url: "https://technocio.com/politica-migratoria-de-trump-endurece-el-ingreso-a-ee-uu-pero-fortalece-la-migracion-laboral-legal"
        },
        {
            quote: "Opinión experta sobre política migratoria y cómo la visa EB-3 fortalece el acceso legal a empleo en EE.UU. para profesionales colombianos.",
            logo: "https://globalexpresscol.com/wp-content/uploads/2025/08/Capa-1-1.png",
            url: "https://www.acis.org.co/blog/noticias-2/politica-migratoria-de-trump-endurece-el-ingreso-a-ee-uu-pero-fortalece-la-migracion-laboral-legal-1040"
        },
        {
            quote: "Alternativas legales EB-3 para colombianos que buscan empleo y residencia en EE.UU., destacando la importancia de la migración laboral ordenada.",
            logo: "https://globalexpresscol.com/wp-content/uploads/2025/08/PULSO-2-1.jpg",
            url: "https://www.pulzo.com/mundo/estados-unidos/alternativa-colombianos-busqueda-empleo-residencia-eeuu-PP4612152A"
        },
        {
            quote: "Forbes México Forbes destacó cómo Global Express Recruiting impulsa la migración laboral legal, fortaleciendo la fuerza laboral en EE. UU. con talento latinoamericano.",
            logo: "https://globalexpresscol.com/wp-content/uploads/2025/09/logo_forbes_mexico-1.png",
            url: "https://forbes.com.mx/patrocinado-impulsar-la-inmigracion-legal-para-fortalecer-la-fuerza-laboral-centrado-en-personas/"
        },
        {
            quote: "Reportaje sobre cómo la alternativa EB-3 gana fuerza en medio de políticas migratorias más estrictas en Estados Unidos.",
            logo: "https://globalexpresscol.com/wp-content/uploads/2025/08/La_Patilla-1.png",
            url: "https://lapatilla.com/2025/06/29/la-alternativa-de-visado-que-cobra-fuerza-tras-politicas-migratorias-de-trump"
        }
    ];
    const faqs = [
        {
            question: '¿Cuánto dura el proceso?',
            answer: 'Los tiempos varían según la categoría del patrocinio y el caso particular; típicamente el proceso puede tardar entre 24 y 36 meses. En la consulta inicial le daremos un estimado según su perfil.'
        },
        {
            question: '¿Mi familia puede acompañarme?',
            answer: 'Sí. En las categorías basadas en empleo, la familia nuclear puede incluirse en el proceso (Esposa (o) e hijos menores de 18 años). Le explicaremos opciones según su caso en su asesoría.'
        },
        {
            question: '¿Necesito nivel de inglés avanzado?',
            answer: 'Depende del puesto. Muchas posiciones requieren un nivel básico intermedio; otras, técnico-idiomático más alto. Evaluamos su caso para recomendarle estrategias.'
        }
    ];
    const nextBanner = ()=>{
        setCurrentBanner((prev)=>(prev + 1) % heroBanners.length);
    };
    const prevBanner = ()=>{
        setCurrentBanner((prev)=>(prev - 1 + heroBanners.length) % heroBanners.length);
    };
    const nextMediaSlide = ()=>{
        setCurrentMediaSlide((prev)=>(prev + 1) % mediaTestimonials.length);
    };
    const prevMediaSlide = ()=>{
        setCurrentMediaSlide((prev)=>(prev - 1 + mediaTestimonials.length) % mediaTestimonials.length);
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        // Validación básica
        if (!formData.name.trim()) {
            setSubmitStatus('error');
            setSubmitMessage('Por favor ingrese su nombre completo');
            return;
        }
        if (!formData.phone.trim()) {
            setSubmitStatus('error');
            setSubmitMessage('Por favor ingrese su número de teléfono');
            return;
        }
        if (!formData.email.trim() || !formData.email.includes('@')) {
            setSubmitStatus('error');
            setSubmitMessage('Por favor ingrese un email válido');
            return;
        }
        if (!formData.acceptsPrivacy) {
            setSubmitStatus('error');
            setSubmitMessage('Debe aceptar la política de privacidad para continuar');
            return;
        }
        setIsSubmitting(true);
        setSubmitStatus('idle');
        setSubmitMessage('');
        try {
            const payload = {
                name: formData.name.trim(),
                countryCode: countryCode,
                phone: formData.phone.trim(),
                email: formData.email.trim(),
                city: formData.city.trim(),
                canCover: formData.canCover,
                understandsCost: formData.understandsCost,
                acceptsPrivacy: formData.acceptsPrivacy
            };
            // Enviar usando fetch con método que funcione mejor con Google Apps Script
            const response = await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
            // Con no-cors no podemos leer la respuesta, pero esperamos un momento
            // y asumimos éxito si no hay error
            await new Promise((resolve)=>setTimeout(resolve, 1500));
            const nombreParam = formData.name.trim();
            const telefonoParam = `${countryCode} ${formData.phone.trim()}`.trim();
            const graciasQuery = new URLSearchParams();
            if (nombreParam) graciasQuery.set('nombre', nombreParam);
            if (formData.phone.trim()) graciasQuery.set('telefono', telefonoParam);
            const graciasUrl = graciasQuery.toString() ? `/gracias?${graciasQuery.toString()}` : '/gracias';
            try {
                const phoneE164 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$lib$2f$google$2d$enhanced$2d$conversions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPhoneE164"])(countryCode, formData.phone.trim());
                sessionStorage.setItem(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$lib$2f$google$2d$enhanced$2d$conversions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GE_LEAD_EC_KEY"], JSON.stringify({
                    email: formData.email.trim(),
                    phoneE164
                }));
            } catch  {
            /* private mode / storage lleno */ }
            setIsSubmitting(false);
            setIsModalOpen(false);
            setSubmitStatus('idle');
            setSubmitMessage('');
            setFormData({
                name: '',
                phone: '',
                email: '',
                city: '',
                canCover: '',
                understandsCost: false,
                acceptsPrivacy: false
            });
            setCountryCode('+57');
            router.push(graciasUrl);
        } catch (error) {
            console.error('Error al enviar formulario:', error);
            setSubmitStatus('error');
            setSubmitMessage('Hubo un error al enviar el formulario. Por favor verifique su conexión e intente nuevamente. Si el problema persiste, contacte al administrador.');
            setIsSubmitting(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "sticky top-0 z-50 bg-white shadow-sm",
                role: "banner",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex h-16 sm:h-20 items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-shrink-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/images/design-mode/GlobalExpressRecruiting_Color.png",
                                        alt: "Global Express Recruiting - Asesoría migratoria legal para visas EB-3 y residencia permanente en Estados Unidos",
                                        className: "h-8 sm:h-12 w-auto",
                                        width: 200,
                                        height: 60,
                                        loading: "eager",
                                        fetchPriority: "high"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                        lineNumber: 313,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                    lineNumber: 312,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                    className: "hidden md:flex items-center space-x-8",
                                    role: "navigation",
                                    "aria-label": "Navegación principal",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>scrollToSection('proceso'),
                                            className: "text-gray-700 hover:text-primary transition-colors font-medium",
                                            children: "Proceso"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                            lineNumber: 326,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>scrollToSection('testimonios'),
                                            className: "text-gray-700 hover:text-primary transition-colors font-medium",
                                            children: "Testimonios"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                            lineNumber: 329,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>scrollToSection('preguntas'),
                                            className: "text-gray-700 hover:text-primary transition-colors font-medium",
                                            children: "Preguntas"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                            lineNumber: 332,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            onClick: ()=>setIsModalOpen(true),
                                            className: "bg-primary hover:bg-primary/90 text-white rounded-full",
                                            children: "Contáctenos"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                            lineNumber: 335,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                    lineNumber: 325,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setMobileMenuOpen(!mobileMenuOpen),
                                    className: "md:hidden p-2",
                                    "aria-label": "Toggle menu",
                                    children: mobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "h-6 w-6"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                        lineNumber: 346,
                                        columnNumber: 33
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                        className: "h-6 w-6"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                        lineNumber: 346,
                                        columnNumber: 61
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                    lineNumber: 341,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                            lineNumber: 311,
                            columnNumber: 11
                        }, this),
                        mobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "md:hidden pb-4 space-y-2",
                            role: "navigation",
                            "aria-label": "Menú móvil",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>scrollToSection('proceso'),
                                    className: "block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-full",
                                    children: "Proceso"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                    lineNumber: 353,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>scrollToSection('testimonios'),
                                    className: "block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-full",
                                    children: "Testimonios"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                    lineNumber: 356,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>scrollToSection('preguntas'),
                                    className: "block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-full",
                                    children: "Preguntas"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                    lineNumber: 359,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: ()=>setIsModalOpen(true),
                                    className: "w-full bg-primary hover:bg-primary/90 text-white rounded-full",
                                    children: "Contáctenos"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                    lineNumber: 362,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                            lineNumber: 352,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                    lineNumber: 310,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                lineNumber: 309,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsModalOpen(true),
                className: "fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-3 sm:p-4 shadow-2xl transition-all hover:scale-110",
                "aria-label": "Contactar por WhatsApp",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "w-6 h-6 sm:w-8 sm:h-8",
                    fill: "currentColor",
                    viewBox: "0 0 24 24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
                    }, void 0, false, {
                        fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                        lineNumber: 376,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                    lineNumber: 375,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                lineNumber: 370,
                columnNumber: 7
            }, this),
            isVideoModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setIsVideoModalOpen(false),
                        className: "absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors z-10",
                        "aria-label": "Cerrar video",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            className: "h-8 w-8 text-white"
                        }, void 0, false, {
                            fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                            lineNumber: 388,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                        lineNumber: 383,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full max-w-6xl aspect-video",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                            width: "100%",
                            height: "100%",
                            src: "https://www.youtube.com/embed/DeDXVvaExiM?autoplay=1",
                            title: "YouTube video player",
                            frameBorder: "0",
                            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                            allowFullScreen: true
                        }, void 0, false, {
                            fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                            lineNumber: 391,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                        lineNumber: 390,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                lineNumber: 382,
                columnNumber: 9
            }, this),
            isModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/50 backdrop-blur-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-3xl shadow-2xl p-5 sm:p-6 lg:p-8 border-t-4 border-accent max-w-lg w-full max-h-[92vh] overflow-y-auto relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setIsModalOpen(false),
                            className: "absolute top-2 right-2 sm:top-4 sm:right-4 p-1.5 sm:p-2 hover:bg-gray-100 rounded-full transition-colors z-10",
                            "aria-label": "Cerrar",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-5 w-5 sm:h-6 sm:w-6 text-gray-500"
                            }, void 0, false, {
                                fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                lineNumber: 412,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                            lineNumber: 407,
                            columnNumber: 13
                        }, this),
                        submitStatus === 'idle' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl sm:text-2xl font-bold text-primary mb-1.5 sm:mb-2 font-oswald pr-8",
                                    children: "Busquemos su sponsor internacional"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                    lineNumber: 417,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs sm:text-sm text-gray-600 mb-4 sm:mb-5 leading-snug",
                                    children: "¡Responda las siguientes preguntas y un consultor lo contactará pronto!"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                    lineNumber: 420,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true),
                        submitStatus === 'error' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4 p-6 bg-red-50 border-2 border-red-200 rounded-2xl text-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-16 h-16 rounded-full bg-red-500 flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-8 h-8 text-white",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 3,
                                                d: "M6 18L18 6M6 6l12 12"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                                lineNumber: 431,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                            lineNumber: 430,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                        lineNumber: 429,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-lg font-bold text-red-800 mb-2",
                                                children: "Error al enviar"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                                lineNumber: 435,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-red-700 leading-relaxed",
                                                children: submitMessage || 'Hubo un problema. Por favor intente nuevamente.'
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                                lineNumber: 436,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                        lineNumber: 434,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: ()=>{
                                            setSubmitStatus('idle');
                                            setSubmitMessage('');
                                        },
                                        className: "bg-primary hover:bg-primary/90 text-white font-bold text-sm px-6 py-3 rounded-full",
                                        children: "Intentar nuevamente"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                        lineNumber: 438,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                lineNumber: 428,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                            lineNumber: 427,
                            columnNumber: 15
                        }, this),
                        submitStatus === 'idle' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSubmit,
                            className: "space-y-2.5 sm:space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    placeholder: "¿Cómo se llama (nombre y apellidos)?",
                                    value: formData.name,
                                    onChange: (e)=>setFormData({
                                            ...formData,
                                            name: e.target.value
                                        }),
                                    className: "w-full rounded-full text-sm h-11 sm:h-12",
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                    lineNumber: 453,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: countryCode,
                                            onChange: (e)=>setCountryCode(e.target.value),
                                            className: "px-3 py-2 border rounded-full bg-white w-[90px] sm:w-28 text-sm h-11 sm:h-12 flex items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "+57",
                                                    children: "🇨🇴 +57"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                                    lineNumber: 467,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "+1",
                                                    children: "🇺🇸 +1"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                                    lineNumber: 468,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "+52",
                                                    children: "🇲🇽 +52"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                                    lineNumber: 469,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                            lineNumber: 462,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            type: "tel",
                                            placeholder: "¿Cuál es su número?",
                                            value: formData.phone,
                                            onChange: (e)=>setFormData({
                                                    ...formData,
                                                    phone: e.target.value
                                                }),
                                            className: "flex-1 rounded-full text-sm h-11 sm:h-12",
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                            lineNumber: 471,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                    lineNumber: 461,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    type: "email",
                                    placeholder: "¿Cuál es su correo electrónico?",
                                    value: formData.email,
                                    onChange: (e)=>setFormData({
                                            ...formData,
                                            email: e.target.value
                                        }),
                                    className: "w-full rounded-full text-sm h-11 sm:h-12",
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                    lineNumber: 481,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    placeholder: "¿En qué ciudad vives?",
                                    value: formData.city,
                                    onChange: (e)=>setFormData({
                                            ...formData,
                                            city: e.target.value
                                        }),
                                    className: "w-full rounded-full text-sm h-11 sm:h-12"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                    lineNumber: 490,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    className: "w-full px-3 sm:px-4 py-2 border rounded-full bg-white text-sm h-11 sm:h-12",
                                    value: formData.canCover,
                                    onChange: (e)=>setFormData({
                                            ...formData,
                                            canCover: e.target.value
                                        }),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: "¿Puede cubrir los costos del programa?"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                            lineNumber: 502,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "si",
                                            children: "Sí"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                            lineNumber: 503,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "no",
                                            children: "No"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                            lineNumber: 504,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "parcialmente",
                                            children: "Parcialmente"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                            lineNumber: 505,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                    lineNumber: 497,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2.5 pt-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start space-x-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Checkbox"], {
                                                    id: "cost-modal",
                                                    checked: formData.understandsCost,
                                                    onCheckedChange: (checked)=>setFormData({
                                                            ...formData,
                                                            understandsCost: checked
                                                        }),
                                                    className: "rounded-full mt-0.5 flex-shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                                    lineNumber: 510,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "cost-modal",
                                                    className: "text-xs sm:text-sm text-gray-700 leading-snug cursor-pointer",
                                                    children: "Entiendo que la inversión mínima es de 23.990 Dólares"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                                    lineNumber: 516,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                            lineNumber: 509,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start space-x-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Checkbox"], {
                                                    id: "privacy-modal",
                                                    checked: formData.acceptsPrivacy,
                                                    onCheckedChange: (checked)=>setFormData({
                                                            ...formData,
                                                            acceptsPrivacy: checked
                                                        }),
                                                    className: "rounded-full mt-0.5 flex-shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                                    lineNumber: 522,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "privacy-modal",
                                                    className: "text-xs sm:text-sm text-gray-700 leading-snug cursor-pointer",
                                                    children: "He leído y aceptado la política de privacidad"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                                    lineNumber: 528,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                            lineNumber: 521,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                    lineNumber: 508,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    type: "submit",
                                    size: "lg",
                                    className: "w-full bg-accent text-primary hover:bg-accent/90 font-bold text-sm sm:text-base py-5 sm:py-6 rounded-full mt-4 sm:mt-5 disabled:opacity-50 disabled:cursor-not-allowed",
                                    disabled: isSubmitting || !formData.acceptsPrivacy,
                                    children: isSubmitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center justify-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "animate-spin h-5 w-5",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        className: "opacity-25",
                                                        cx: "12",
                                                        cy: "12",
                                                        r: "10",
                                                        stroke: "currentColor",
                                                        strokeWidth: "4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                                        lineNumber: 543,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        className: "opacity-75",
                                                        fill: "currentColor",
                                                        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                                        lineNumber: 544,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                                lineNumber: 542,
                                                columnNumber: 21
                                            }, this),
                                            "ENVIANDO..."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                        lineNumber: 541,
                                        columnNumber: 19
                                    }, this) : 'APLICAR AHORA'
                                }, void 0, false, {
                                    fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                    lineNumber: 534,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                            lineNumber: 452,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                    lineNumber: 406,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                lineNumber: 405,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                role: "main",
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "hero",
                        className: "relative overflow-hidden bg-white",
                        "aria-label": "Hero - Su camino legal a Estados Unidos",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative h-[600px] sm:h-screen sm:min-h-[600px] sm:max-h-[900px]",
                            children: [
                                heroBanners.map((banner, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `absolute inset-0 transition-opacity duration-700 ${currentBanner === index ? 'opacity-100' : 'opacity-0 pointer-events-none'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: banner.image || "/placeholder.svg",
                                                        alt: `${banner.alt} - ${banner.title} - Global Express Recruiting ayuda a familias a migrar legalmente a Estados Unidos`,
                                                        className: "w-full h-full object-cover",
                                                        loading: index === 0 ? "eager" : "lazy",
                                                        fetchPriority: index === 0 ? "high" : "auto",
                                                        width: 1920,
                                                        height: 1080
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                                        lineNumber: 567,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 hero-gradient-overlay"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                                        lineNumber: 576,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                                lineNumber: 566,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative h-full flex items-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "max-w-3xl",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-4 sm:space-y-6 text-white",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "inline-block",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "bg-white/95 border-l-4 border-primary text-gray-900 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-r-xl shadow-xl backdrop-blur-sm",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-2 sm:gap-2.5",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "relative flex h-2 w-2 sm:h-2.5 sm:w-2.5",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                                                                            lineNumber: 587,
                                                                                            columnNumber: 31
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-primary"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                                                                            lineNumber: 588,
                                                                                            columnNumber: 31
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                                                                    lineNumber: 586,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "font-bold text-[10px] sm:text-xs uppercase tracking-wide",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "inline sm:hidden",
                                                                                            children: "Últimas vacantes disponibles"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                                                                            lineNumber: 591,
                                                                                            columnNumber: 31
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "hidden sm:inline",
                                                                                            children: "Próximos a cierre de ciclo de reclutamiento"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                                                                            lineNumber: 592,
                                                                                            columnNumber: 31
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                                                                    lineNumber: 590,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                                                            lineNumber: 585,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                                                        lineNumber: 584,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                                                    lineNumber: 583,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                                    className: "text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-oswald",
                                                                    children: banner.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                                                    lineNumber: 598,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-base sm:text-xl lg:text-2xl leading-relaxed",
                                                                    children: banner.subtitle
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                                                    lineNumber: 602,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                    size: "lg",
                                                                    onClick: ()=>setIsModalOpen(true),
                                                                    className: "bg-accent text-primary hover:bg-accent/90 font-bold text-sm sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-full",
                                                                    children: "Solicitar asesoría"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                                                    lineNumber: 606,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                                            lineNumber: 582,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                                        lineNumber: 581,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                                    lineNumber: 580,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                                lineNumber: 579,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                        lineNumber: 560,
                                        columnNumber: 13
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 sm:gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: prevBanner,
                                            className: "p-2 sm:p-3 rounded-full bg-white/90 hover:bg-white transition-colors shadow-lg",
                                            "aria-label": "Banner anterior",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                                className: "h-4 w-4 sm:h-6 sm:w-6 text-primary"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                                lineNumber: 626,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                            lineNumber: 621,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2 sm:gap-3",
                                            children: heroBanners.map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setCurrentBanner(index),
                                                    className: `h-2 sm:h-3 rounded-full transition-all ${currentBanner === index ? 'bg-white w-8 sm:w-12' : 'bg-white/50 hover:bg-white/75 w-2 sm:w-3'}`,
                                                    "aria-label": `Ir al banner ${index + 1}`
                                                }, index, false, {
                                                    fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                                    lineNumber: 631,
                                                    columnNumber: 17
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                            lineNumber: 629,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: nextBanner,
                                            className: "p-2 sm:p-3 rounded-full bg-white/90 hover:bg-white transition-colors shadow-lg",
                                            "aria-label": "Siguiente banner",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                className: "h-4 w-4 sm:h-6 sm:w-6 text-primary"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                                lineNumber: 649,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                            lineNumber: 644,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                    lineNumber: 620,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                            lineNumber: 558,
                            columnNumber: 9
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                        lineNumber: 557,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-12 sm:py-16 lg:py-20 bg-background relative",
                        "aria-labelledby": "medios-heading",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 left-0 right-0 h-1 decorative-gradient-horizontal"
                            }, void 0, false, {
                                fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                lineNumber: 656,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        id: "medios-heading",
                                        className: "text-2xl sm:text-3xl lg:text-4xl font-bold text-primary text-center mb-8 sm:mb-12 font-oswald px-4",
                                        children: "Reconocidos por los principales medios"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                        lineNumber: 660,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8",
                                                children: [
                                                    0,
                                                    1,
                                                    2
                                                ].map((offset)=>{
                                                    const index = (currentMediaSlide + offset) % mediaTestimonials.length;
                                                    const testimonial = mediaTestimonials[index];
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: testimonial.url,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer nofollow",
                                                        className: `bg-white rounded-3xl shadow-lg p-6 sm:p-8 min-h-[320px] sm:min-h-[380px] flex flex-col hover:shadow-xl transition-shadow cursor-pointer ${offset > 0 ? 'hidden sm:flex' : ''} ${offset > 1 ? 'hidden lg:flex' : ''}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mb-3 sm:mb-4",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Quote$3e$__["Quote"], {
                                                                    className: "w-7 h-7 sm:w-9 sm:h-9 text-primary scale-x-[-1]",
                                                                    strokeWidth: 1.5,
                                                                    "aria-hidden": "true"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                                                    lineNumber: 680,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                                                lineNumber: 679,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm sm:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6 flex-1",
                                                                children: testimonial.quote
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                                                lineNumber: 687,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "pt-3 sm:pt-4 border-t flex items-center justify-center",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    src: testimonial.logo || "/placeholder.svg",
                                                                    alt: `Logo del medio de comunicación que ha cubierto Global Express Recruiting - ${testimonial.quote.substring(0, 50)}...`,
                                                                    className: "max-h-12 sm:max-h-16 max-w-full object-contain",
                                                                    width: 200,
                                                                    height: 80,
                                                                    loading: "lazy"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                                                    lineNumber: 692,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                                                lineNumber: 691,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, index, true, {
                                                        fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                                        lineNumber: 670,
                                                        columnNumber: 19
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                                lineNumber: 665,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-center gap-3 sm:gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: prevMediaSlide,
                                                        className: "p-2 sm:p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors",
                                                        "aria-label": "Testimonio anterior",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                                            className: "h-5 w-5 sm:h-5 sm:w-5 text-primary"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                                            lineNumber: 712,
                                                            columnNumber: 17
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                                        lineNumber: 707,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-1.5 sm:gap-2",
                                                        children: mediaTestimonials.map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>setCurrentMediaSlide(index),
                                                                className: `h-2 rounded-full transition-all ${currentMediaSlide === index ? 'bg-primary w-6 sm:w-8' : 'bg-gray-300 hover:bg-gray-400 w-2'}`,
                                                                "aria-label": `Ir al testimonio ${index + 1}`
                                                            }, index, false, {
                                                                fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                                                lineNumber: 717,
                                                                columnNumber: 19
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                                        lineNumber: 715,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: nextMediaSlide,
                                                        className: "p-2 sm:p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors",
                                                        "aria-label": "Siguiente testimonio",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                            className: "h-5 w-5 sm:h-5 sm:w-5 text-primary"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                                            lineNumber: 735,
                                                            columnNumber: 17
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                                        lineNumber: 730,
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                                lineNumber: 706,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                        lineNumber: 664,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                lineNumber: 658,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                        lineNumber: 655,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "proceso",
                        className: "py-12 sm:py-16 lg:py-24 bg-white relative",
                        "aria-labelledby": "proceso-heading",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute right-0 top-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl"
                            }, void 0, false, {
                                fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                lineNumber: 743,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        id: "proceso-heading",
                                        className: "text-2xl sm:text-3xl lg:text-5xl font-bold text-primary text-center mb-8 sm:mb-12 font-oswald px-4",
                                        children: "¿Por qué confiar en Global Express Recruiting?"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                        lineNumber: 746,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                                className: "bg-white rounded-3xl shadow-lg p-5 sm:p-6 hover:shadow-xl transition-shadow border-t-4 border-accent",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg sm:text-xl font-bold text-primary mb-2 sm:mb-3 font-oswald",
                                                        children: "Transparencia y ética"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                                        lineNumber: 752,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed",
                                                        children: "Le mostramos requisitos, costos y tiempos desde el primer contacto para que tome decisiones informadas."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                                        lineNumber: 755,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-primary font-bold text-xs sm:text-sm",
                                                        children: "Asesoría inicial sin costo"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                                        lineNumber: 758,
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                                lineNumber: 751,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                                className: "bg-white rounded-3xl shadow-lg p-5 sm:p-6 hover:shadow-xl transition-shadow border-t-4 border-primary",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg sm:text-xl font-bold text-primary mb-2 sm:mb-3 font-oswald",
                                                        children: "Sponsor"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                                        lineNumber: 764,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed",
                                                        children: "Acceso a empleadores en EE. UU. con contratos y procesos formales."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                                        lineNumber: 767,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-primary font-bold text-xs sm:text-sm",
                                                        children: "Matching con sponsor"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                                        lineNumber: 770,
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                                lineNumber: 763,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                                className: "bg-white rounded-3xl shadow-lg p-5 sm:p-6 hover:shadow-xl transition-shadow border-t-4 border-accent",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg sm:text-xl font-bold text-primary mb-2 sm:mb-3 font-oswald",
                                                        children: "Acompañamiento integral"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                                        lineNumber: 776,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed",
                                                        children: "Sólidos procesos de reclutamiento y adaptación para usted y su familia."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                                        lineNumber: 779,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-primary font-bold text-xs sm:text-sm",
                                                        children: "Preparación migratoria"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                                        lineNumber: 782,
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                                lineNumber: 775,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                                className: "bg-white rounded-3xl shadow-lg p-5 sm:p-6 hover:shadow-xl transition-shadow border-t-4 border-primary",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg sm:text-xl font-bold text-primary mb-2 sm:mb-3 font-oswald",
                                                        children: "Casos de éxito"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                                        lineNumber: 788,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed",
                                                        children: "Historias comprobables de familias que hoy viven y trabajan legalmente en EE. UU."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                                        lineNumber: 791,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-primary font-bold text-xs sm:text-sm",
                                                        children: "Nuevo comienzo en EE. UU."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                                        lineNumber: 794,
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                                lineNumber: 787,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                        lineNumber: 750,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                lineNumber: 745,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                        lineNumber: 742,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "testimonios",
                        className: "py-12 sm:py-16 lg:py-24 bg-primary text-white relative overflow-hidden",
                        "aria-labelledby": "testimonios-heading",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute right-0 top-0 w-96 h-96 border-2 border-accent/20 rounded-full -translate-y-1/2 translate-x-1/2"
                            }, void 0, false, {
                                fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                lineNumber: 803,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute left-0 bottom-0 w-64 h-64 border-2 border-accent/20 rounded-full translate-y-1/2 -translate-x-1/2"
                            }, void 0, false, {
                                fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                lineNumber: 804,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-center mb-6 sm:mb-8",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "/images/png-20blanco.png",
                                            alt: "Global Express Recruiting - Casos de éxito de familias que migraron legalmente a Estados Unidos",
                                            className: "h-12 sm:h-16 w-auto opacity-80",
                                            width: 200,
                                            height: 80,
                                            loading: "lazy"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                            lineNumber: 808,
                                            columnNumber: 13
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                        lineNumber: 807,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        id: "testimonios-heading",
                                        className: "text-2xl sm:text-3xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 font-oswald text-white px-4",
                                        children: "Casos de éxito destacados"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                        lineNumber: 818,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white/10 backdrop-blur-sm rounded-3xl p-6 sm:p-8 lg:p-12",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid lg:grid-cols-2 gap-6 sm:gap-8 items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setIsVideoModalOpen(true),
                                                    className: "relative rounded-3xl overflow-hidden bg-gray-800 aspect-video group cursor-pointer",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: "/images/design-mode/maxresdefault(1).jpg",
                                                            alt: "Video testimonio de Mauricio - Caso de éxito de migración legal a Estados Unidos con Global Express Recruiting",
                                                            className: "w-full h-full object-cover",
                                                            width: 1280,
                                                            height: 720,
                                                            loading: "lazy"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                                            lineNumber: 828,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-16 h-16 sm:w-20 sm:h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                                    className: "h-8 w-8 sm:h-10 sm:w-10 text-primary ml-1",
                                                                    fill: "currentColor"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                                                    lineNumber: 838,
                                                                    columnNumber: 21
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                                                lineNumber: 837,
                                                                columnNumber: 19
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                                            lineNumber: 836,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                                    lineNumber: 824,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-3 sm:space-y-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-base sm:text-xl lg:text-2xl leading-relaxed text-white",
                                                        children: "Mauricio ya inició su camino hacia una vida y un trabajo legal en EE.UU. Descubra cómo él y su familia lo lograron."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                                        lineNumber: 844,
                                                        columnNumber: 17
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                                    lineNumber: 843,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                            lineNumber: 823,
                                            columnNumber: 13
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                        lineNumber: 822,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                lineNumber: 806,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                        lineNumber: 802,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "preguntas",
                        className: "py-12 sm:py-16 lg:py-24 bg-background relative",
                        "aria-labelledby": "preguntas-heading",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    id: "preguntas-heading",
                                    className: "text-2xl sm:text-3xl lg:text-5xl font-bold text-primary text-center mb-8 sm:mb-12 font-oswald px-4",
                                    children: "Preguntas frecuentes"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                    lineNumber: 856,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3 sm:space-y-4",
                                    itemScope: true,
                                    itemType: "https://schema.org/FAQPage",
                                    children: faqs.map((faq, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                            className: "bg-white rounded-3xl shadow-md overflow-hidden",
                                            itemScope: true,
                                            itemType: "https://schema.org/Question",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setOpenFaqIndex(openFaqIndex === index ? null : index),
                                                    className: "w-full flex items-center justify-between p-4 sm:p-6 text-left hover:bg-gray-50 transition-colors",
                                                    "aria-expanded": openFaqIndex === index,
                                                    "aria-controls": `faq-answer-${index}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-base sm:text-lg font-bold text-primary pr-3 sm:pr-4 font-oswald",
                                                            itemProp: "name",
                                                            children: faq.question
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                                            lineNumber: 869,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                            className: `h-5 w-5 text-primary flex-shrink-0 transition-transform ${openFaqIndex === index ? 'rotate-180' : ''}`,
                                                            "aria-hidden": "true"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                                            lineNumber: 872,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                                    lineNumber: 863,
                                                    columnNumber: 17
                                                }, this),
                                                openFaqIndex === index && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    id: `faq-answer-${index}`,
                                                    className: "px-4 sm:px-6 pb-4 sm:pb-6 text-sm sm:text-base text-gray-600 leading-relaxed",
                                                    itemScope: true,
                                                    itemType: "https://schema.org/Answer",
                                                    itemProp: "acceptedAnswer",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        itemProp: "text",
                                                        children: faq.answer
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                                        lineNumber: 887,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                                    lineNumber: 880,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                            lineNumber: 862,
                                            columnNumber: 15
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                    lineNumber: 860,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                            lineNumber: 855,
                            columnNumber: 9
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                        lineNumber: 854,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-16 lg:py-24 bg-primary relative overflow-hidden",
                        "aria-labelledby": "cta-heading",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 left-0 w-full h-1 bg-accent"
                            }, void 0, false, {
                                fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                lineNumber: 897,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-accent p-8 lg:p-12 text-center shadow-2xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            id: "cta-heading",
                                            className: "text-3xl lg:text-4xl font-bold text-primary mb-6 font-oswald",
                                            children: "Acceda a una reunión virtual"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                            lineNumber: 901,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-lg text-primary/90 mb-8 leading-relaxed max-w-2xl mx-auto",
                                            children: "En este espacio obtendrá claridad sobre su proceso migratorio, oportunidades laborales vigentes y la tranquilidad de información segura para su familia."
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                            lineNumber: 904,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            size: "lg",
                                            onClick: ()=>setIsModalOpen(true),
                                            className: "bg-primary hover:bg-primary/90 text-white font-bold text-lg px-12 py-6 rounded-full",
                                            children: "Quiero agendar"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                            lineNumber: 907,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                    lineNumber: 900,
                                    columnNumber: 11
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                lineNumber: 899,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                        lineNumber: 895,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                lineNumber: 556,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "bg-white py-8 sm:py-12 border-t",
                role: "contentinfo",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "/images/design-mode/a013fe21-a543-4dac-a60e-d377f4fe38fb-e1705677295501-768x307.jpeg",
                                            alt: "Oficina de Global Express Recruiting en Sunrise, Florida, Estados Unidos - 7771 Oakland Park Blvd",
                                            className: "w-full h-40 sm:h-48 object-cover",
                                            width: 768,
                                            height: 307,
                                            loading: "lazy"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                            lineNumber: 918,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4 sm:p-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg sm:text-xl font-bold text-primary mb-2 font-oswald",
                                                    children: "Oficina Estados Unidos"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                                    lineNumber: 927,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("address", {
                                                    className: "text-sm sm:text-base text-gray-700 not-italic",
                                                    children: "7771 Oakland Park Blvd Sunrise, FL 33351"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                                    lineNumber: 928,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                            lineNumber: 926,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                    lineNumber: 917,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "/images/design-mode/admin-ajax.png",
                                            alt: "Oficina de Global Express Recruiting en Bogotá, Colombia - Edificio Paralelo 108",
                                            className: "w-full h-40 sm:h-48 object-cover",
                                            width: 768,
                                            height: 307,
                                            loading: "lazy"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                            lineNumber: 933,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4 sm:p-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg sm:text-xl font-bold text-primary mb-2 font-oswald",
                                                    children: "Oficina Colombia"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                                    lineNumber: 942,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("address", {
                                                    className: "text-sm sm:text-base text-gray-700 not-italic",
                                                    children: "Edificio Paralelo 108 Av. Carrera 45 #108-27 Torre 2"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                                    lineNumber: 943,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                            lineNumber: 941,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                    lineNumber: 932,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                            lineNumber: 916,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap justify-center items-center gap-6 sm:gap-8 mb-6 sm:mb-8 pb-6 sm:pb-8 border-b",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/images/design-mode/image-3-1.png",
                                    alt: "Global Express Recruiting - Certificación BBB Accredited Business - Negocio acreditado",
                                    className: "h-16 sm:h-20 w-auto",
                                    width: 120,
                                    height: 80,
                                    loading: "lazy"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                    lineNumber: 949,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/images/design-mode/image-2-1.png",
                                    alt: "Global Express Recruiting - Certificación NTAS No Current Advisories - Sin advertencias actuales",
                                    className: "h-16 sm:h-20 w-auto",
                                    width: 120,
                                    height: 80,
                                    loading: "lazy"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                    lineNumber: 957,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                            lineNumber: 948,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center space-y-3 sm:space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm sm:text-base text-gray-600 font-medium",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://globalexpresscol.com/wp-content/uploads/2025/06/TERMINOS-Y-CONDICIONES-TRATAMIENTO-DE-DATOS.pdf",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "text-primary hover:underline",
                                        children: "Términos y condiciones - Políticas de privacidad"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                        lineNumber: 969,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                    lineNumber: 968,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2 text-sm sm:text-base text-gray-600",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "break-all",
                                            children: [
                                                "Correo: ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "mailto:coordinacion@globalexpressrecruiting.com.co",
                                                    className: "text-primary hover:underline",
                                                    children: "coordinacion@globalexpressrecruiting.com.co"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                                    lineNumber: 980,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                            lineNumber: 979,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "Teléfono: ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "tel:+573018109450",
                                                    className: "text-primary hover:underline",
                                                    children: "+57 301 8109450"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                                    lineNumber: 985,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                            lineNumber: 984,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                    lineNumber: 978,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                            lineNumber: 967,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 sm:mt-8 text-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/images/design-mode/GlobalExpressRecruiting_Color.png",
                                alt: "Global Express Recruiting - Logo - Asesoría migratoria legal para visas EB-3 y residencia permanente en Estados Unidos",
                                className: "h-8 sm:h-10 w-auto mx-auto opacity-50",
                                width: 200,
                                height: 60,
                                loading: "lazy"
                            }, void 0, false, {
                                fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                                lineNumber: 993,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                            lineNumber: 992,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                    lineNumber: 915,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
                lineNumber: 914,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/repos/GER-filial/v0-global-express-landing-page/app/page.tsx",
        lineNumber: 307,
        columnNumber: 5
    }, this);
}
_s(GlobalExpressRecruitingPage, "IdOQLgcdyuOVIOBjewOGkZ5+38g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$GER$2d$filial$2f$v0$2d$global$2d$express$2d$landing$2d$page$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = GlobalExpressRecruitingPage;
var _c;
__turbopack_context__.k.register(_c, "GlobalExpressRecruitingPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_repos_GER-filial_v0-global-express-landing-page_c71695e8._.js.map
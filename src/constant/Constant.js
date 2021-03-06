const Constant = {
    COMPRESSION: {
        maxSizeMB: 0.3,
        maxWidthOrHeight: 1000,
        useWebWorker: true,
        maxIteration: 10,
    },
    // eslint-disable-next-line no-control-regex
    EMAIL_REGEX: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)])/,
    PHONE_REGEX: /^09\d{9}$/,
    PERSIAN_REGEX: /^[\u0621-\u0628\u062A-\u063A\u0641-\u0642\u0644-\u0648\u064E-\u0651\u0655\u067E\u0686\u0698\u0020\u2000-\u200F\u2028-\u202F\u06A9\u06AF\u06BE\u06CC\u0629\u0643\u0649-\u064B\u064D\u06D5\s]+$/,
    ENGLISH_REGEX: /^[a-zA-Z\s]+$/,
    ENGLISH_AND_NUMBERS_REGEX: /^[a-zA-Z0-9\s]+$/,
    SUBJECT_CHOICES: {
        "پکیج شرکتی ساده": "order_simple_company",
        "پکیج شرکتی پیشرفته": "order_advance_company",
        "پکیج فروشگاهی ساده": "order_simple_sale",
        "پکیج فروشگاهی پیشرفته": "order_advance_sale",
        "پکیج سفارشی": "custom_package",
        "گزارش مشکل": "bug_report",
        "انتقاد و پیشنهاد": "comment",
        "همکاری با ما": "collaboration",
        "سایر": "other",
    },
}

export default Constant
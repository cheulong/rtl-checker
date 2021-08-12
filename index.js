//List of LangCodes and Languages that use Right to Left Text
const rtlLanguageList = {
  ar: 'Arabic',
  arc: 'Aramaic',
  dv: 'Divehi',
  fa: 'Persian',
  ha: 'Hausa',
  he: 'Hebrew',
  khw: 'Khowar',
  ks: 'Kashmiri',
  ku: 'Kurdish',
  ps: 'Pashto',
  ur: 'Urdu',
  yi: 'Yiddish',
};

/**
 * @param {string} langCode The string
 */
const isRTL = (langCode) => rtlLanguageList.hasOwnProperty(langCode);

const listRTLLangCodes = () => Object.keys(rtlLanguageList);

const listRTLLanguages = () => Object.values(rtlLanguageList);

const listRTLLangCodesAndCountries = () => rtlLanguageList;

module.exports = {
  isRTL: isRTL,
  listRTLLangCodes: listRTLLangCodes,
  listRTLLanguages: listRTLLanguages,
  listRTLLangCodesAndCountries: listRTLLangCodesAndCountries,
};

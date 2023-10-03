import { getTranslationCommonLocales } from './TranslationsServices';

export async function getTranslationsCommon(req, res) {
  const translations = await getTranslationCommonLocales();
  if (translations) {
    return res.status(200).json({ translations });
  } else return null;
}

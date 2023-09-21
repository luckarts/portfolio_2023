// @ts-nocheck
/**
 *
 * HomePage
 *
 */
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <div className="h-auto text-white py-24 px-10 object-fill">
      <p className="md:w-1/2 m-auto flex justify-center">{t('welcome')}</p>
    </div>
  );
}

'use client';

import React from 'react';
import { I18nextProvider } from 'react-i18next';
import initTranslations from '@/app/i18n';
import { createInstance, i18n, Resource } from 'i18next';

interface TranslationsProviderProps {
    children: React.ReactNode;
    locale: string;
    namespaces: string[];
    resources?: Resource;
}

export default function TranslationsProvider({
    children,
    locale,
    namespaces,
    resources
}: TranslationsProviderProps) {
    const [instance, setInstance] = React.useState<i18n | null>(null);

    React.useEffect(() => {
        const i18nInstance = createInstance();
        initTranslations(locale, namespaces, i18nInstance, resources)
            .then(() => setInstance(i18nInstance));
    }, [locale, namespaces, resources]);

    if (!instance) {
        return null; // or a loading spinner
    }

    return <I18nextProvider i18n={instance}>{children}</I18nextProvider>;
}
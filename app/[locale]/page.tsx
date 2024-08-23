import FeatureComponent from '@/components/features/FeatureComponent'
import TranslationsProvider from './TranslationsProvider';
import initTranslations from '../i18n'

const i18nNamespaces = ['common'];

interface HomeProps {
  params: {
    locale: string;
  };
}


export default async function Home({ params: { locale } }: HomeProps) {
  const { resources } = await initTranslations(locale, i18nNamespaces)

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <main>
        <h1>Welcome to My Next.js App</h1>
        <FeatureComponent />
      </main>
    </TranslationsProvider>
  )
}
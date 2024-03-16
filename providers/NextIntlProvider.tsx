import { NextIntlClientProvider, useMessages } from "next-intl"
import { PropsWithChildren } from "react"

export const NextIntlProvider = ({
  children,
  params: { locale },
}: PropsWithChildren & { params: any }) => {
  const messages = useMessages()
  console.log({ messages })

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  )
}

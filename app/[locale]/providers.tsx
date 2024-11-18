'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'

const theme = extendTheme({
    fonts: {
        heading: 'var(--font-lato)',
        body: 'var(--font-lato)',
    },
})

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <CacheProvider>
            <ChakraProvider theme={theme}>
                <AnimatePresence mode='wait'>
                    {children}
                </AnimatePresence>
            </ChakraProvider>
        </CacheProvider>
    )
}
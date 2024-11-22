'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'

const theme = extendTheme({
    fonts: {
        heading: 'var(--font-playfair)',
        body: 'var(--font-poppins)',
        playfair: 'var(--font-playfair)',
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
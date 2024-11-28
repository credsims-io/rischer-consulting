"use client"

import { Box } from '@chakra-ui/react'
import Image from 'next/image'
import { useState } from 'react'

interface AnimatedImageProps {
    src: string
    alt: string
    priority?: boolean
}

export default function AnimatedImage({ src, alt, priority = false }: AnimatedImageProps) {
    const [isLoading, setIsLoading] = useState(true)

    return (
        <Box
            position="absolute"
            inset={0}
            opacity={isLoading ? 0 : 1}
            transition="opacity 0.5s ease-in-out"
        >
            <Image
                src={src}
                alt={alt}
                fill
                priority={priority}
                style={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                }}
                onLoadingComplete={() => setIsLoading(false)}
            />
        </Box>
    )
}
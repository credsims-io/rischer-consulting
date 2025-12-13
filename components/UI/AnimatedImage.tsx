"use client"

import { Box } from '@chakra-ui/react'
import Image from 'next/image'
import { useState, useEffect } from 'react'

interface AnimatedImageProps {
    src: string
    alt: string
    priority?: boolean
}

export default function AnimatedImage({ src, alt, priority = false }: AnimatedImageProps) {
    const [isLoading, setIsLoading] = useState(true)
    const [shouldAnimate, setShouldAnimate] = useState(true)

    useEffect(() => {
        // Check if this image has been loaded before
        const hasLoaded = localStorage.getItem(`image-${src}`)
        if (hasLoaded) {
            setIsLoading(false)
            setShouldAnimate(false)
        }
    }, [src])

    const handleLoadComplete = () => {
        // Store that this image has been loaded
        localStorage.setItem(`image-${src}`, 'true')
        setIsLoading(false)
    }

    return (
        <Box
            position="absolute"
            inset={0}
            opacity={isLoading ? 0 : 1}
            transition={shouldAnimate ? "opacity 0.5s ease-in-out" : "none"}
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
                onLoadingComplete={handleLoadComplete}
            />
        </Box>
    )
}
"use client"

import { Box } from '@chakra-ui/react'
import Image from 'next/image'
import { useState, useEffect } from 'react'

interface CapabilitiesImageProps {
    src: string
    alt: string
    priority?: boolean
}

export default function CapabilitiesImage({ src, alt, priority = false }: CapabilitiesImageProps) {
    const [isLoading, setIsLoading] = useState(true)
    const [shouldAnimate, setShouldAnimate] = useState(true)

    useEffect(() => {
        const hasLoaded = localStorage.getItem(`image-${src}`)
        if (hasLoaded) {
            setIsLoading(false)
            setShouldAnimate(false)
        }
    }, [src])

    const handleLoadComplete = () => {
        localStorage.setItem(`image-${src}`, 'true')
        setIsLoading(false)
    }

    return (
        <Box
            position="relative"
            width="100%"
            paddingTop="141.4%" // This creates a 1414:1000 aspect ratio based on the image dimensions
            opacity={isLoading ? 0 : 1}
            transition={shouldAnimate ? "opacity 0.5s ease-in-out" : "none"}
        >
            <Image
                src={src}
                alt={alt}
                fill
                priority={priority}
                style={{
                    objectFit: 'contain',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                }}
                onLoadingComplete={handleLoadComplete}
            />
        </Box>
    )
}
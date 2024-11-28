"use client"

import { Box } from '@chakra-ui/react'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { CSSProperties } from 'react'

interface AnimatedNavLogoProps {
    src: string
    alt: string
    priority?: boolean
    className?: string
    style?: CSSProperties
}

export default function AnimatedNavLogo({ src, alt, priority = false, className, style }: AnimatedNavLogoProps) {
    const [isLoading, setIsLoading] = useState(true)
    const [shouldAnimate, setShouldAnimate] = useState(true)

    useEffect(() => {
        // Check if this logo has been loaded before
        const hasLoaded = localStorage.getItem(`logo-${src}`)
        if (hasLoaded) {
            setIsLoading(false)
            setShouldAnimate(false)
        }
    }, [src])

    const handleLoadComplete = () => {
        // Store that this logo has been loaded
        localStorage.setItem(`logo-${src}`, 'true')
        setIsLoading(false)
    }

    return (
        <Box
            position="relative"
            width="100%"
            height="100%"
            opacity={isLoading ? 0 : 1}
            transition={shouldAnimate ? "opacity 0.5s ease-in-out" : "none"}
            className={className}
            style={style}
        >
            <Image
                src={src}
                alt={alt}
                width={500}
                height={500}
                priority={priority}
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                }}
                onLoadingComplete={handleLoadComplete}
            />
        </Box>
    )
}
"use client"

import { Box, Flex } from '@chakra-ui/react'
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import AnimatedImage from '@/components/UI/AnimatedImage';

export default function PictureTopbar() {
    const pathname = usePathname();
    const [shouldShow, setShouldShow] = useState(false);

    useEffect(() => {
        setShouldShow(pathname !== '/');
    }, [pathname]);

    if (!pathname || !shouldShow) return null;

    return (
        <Flex
            paddingX={{ base: 2, md: 4 }}
            paddingY={4}
        >
            <Box
                width="100%"
                position="relative"
                height={{ base: "123px", md: "277px", xl: "350px" }}
                rounded={{ base: "16px", md: "24px" }}
                overflow="hidden"
                backgroundColor="gray.100"
            >
                <AnimatedImage
                    src="/images/topimage.png"
                    alt="Top banner image"
                    priority
                />
                <Box
                    position="absolute"
                    width="100%"
                    height="100%"
                    background="linear-gradient(90deg, #667085 -49.93%, rgba(102, 112, 133, 0.00) 372.85%)"
                    borderRadius="inherit"
                    left="0"
                    top="0"
                />
            </Box>
        </Flex>
    )
}

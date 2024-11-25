"use client"

import { Flex } from '@chakra-ui/react'
import { usePathname } from 'next/navigation';

export default function PictureTopbar() {

    const pathname = usePathname();

    if (pathname === '/') return null;

    return (
        <Flex
            paddingX={{ base: 2, md: 4 }}
            paddingY={4}
        >
            <Flex
                width="100%"
                backgroundImage="url('/images/topimage.png')"
                backgroundSize="cover"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                align={{ base: "start", md: "center" }}
                paddingX={{ base: "10px", md: "60px", lg: "115px", xl: "15%", "2xl": "20%" }}
                height={{ base: "123px", md: "277px", xl: "350px" }}
                rounded={{ base: "16px", md: "24px" }}
                position="relative"
            >
                <Flex
                    position="absolute"
                    width="100%"
                    height="100%"
                    background="linear-gradient(90deg, #667085 -49.93%, rgba(102, 112, 133, 0.00) 372.85%)"
                    borderRadius="inherit"
                    left="0"
                    top="0"
                >
                </Flex>
            </Flex>
        </Flex>
    )
}

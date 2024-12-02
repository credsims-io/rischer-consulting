"use client"

import { Flex, Text } from "@chakra-ui/react";
import Script from "next/script";

export default function ContactPage() {
    return (
        <Flex
            direction="column"
            paddingX={{ base: "10px", md: "80px", lg: "115px", xl: "10%", "2xl": "15%" }}
            paddingY={{ base: 8, md: 4 }}
            gap={{ base: 8, md: "80px" }}
            mb={6}
        >
            <Flex direction="column" gap={6}>
                <Text
                    as="h2"
                    fontSize={{ base: "32px", lg: "64px" }}
                    color="#121212"
                    fontWeight="500"
                    className='font-playfair'
                >
                    Contact Us
                </Text>
                <Text
                    maxW="800px"
                    color="#667085"
                    fontSize={{ lg: "24px" }}
                    lineHeight={{ base: "24px", md: "32px" }}
                >
                    Thank you for your interest in Rischer Consulting. We look forward to providing you with the services you deserve.
                </Text>
            </Flex>

            {/* Dubsado Form */}
            <Script
                src="https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.5.14/iframeResizer.min.js"
                strategy="beforeInteractive"
                onLoad={() => {
                    setTimeout(() => {
                        // @ts-ignore
                        iFrameResize({
                            checkOrigin: false,
                            heightCalculationMethod: "taggedElement",
                            minHeight: 1750,
                            scrolling: false,
                            sizeHeight: true
                        });
                    }, 30);
                }}
            />
            <iframe
                src="https://hello.dubsado.com/public/form/view/667917c95e7fc2003a36b979"
                frameBorder="0"
                style={{
                    width: '1px',
                    minWidth: '100%',
                    minHeight: '1750px'
                }}
            />
        </Flex>
    );
}
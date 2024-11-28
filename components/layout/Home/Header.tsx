import { Box, Button, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import AnimatedImage from '@/components/UI/AnimatedImage';

export default function Header() {
    return (
        <Box
            position="relative"
            height={{ base: "560px", md: "642px" }}
            rounded={{ base: "16px", md: "24px" }}
            overflow="hidden"
            backgroundColor="#00000000"
        >
            <AnimatedImage
                src="/images/header_img.png"
                alt="Header background"
                priority
            />
            <Flex
                position="relative"
                height="100%"
                align={{ base: "start", md: "center" }}
                paddingX={{ base: "10px", md: "60px", lg: "115px", xl: "15%", "2xl": "20%" }}
            >
                <Flex direction="column" zIndex={2}>
                    <Text
                        maxWidth="640px"
                        color="#FFFFFF"
                        fontSize={{ base: "40px", md: "72px" }}
                        fontWeight="500"
                        letterSpacing={{ base: "1.2px", md: "2.16px" }}
                        mt={{ base: 12, md: 0 }}
                        className='font-playfair'
                    >
                        Consulting with Integrity
                    </Text>
                    <Text
                        fontSize={{ base: "16px", md: "24px" }}
                        color="#FFFFFF"
                        fontWeight="500"
                        mt={4}
                    >
                        Professional services that will allow for growth and success.
                    </Text>
                    <Flex mt={8} align='center' gap={4}>
                        <Button
                            bg="#F49953"
                            paddingX={{ base: 4, md: 6 }}
                            paddingY={{ base: 2, md: 3 }}
                            color="#FFFFFF"
                            rounded="4px"
                            fontWeight="700"
                            as="a"
                            href="/courses"
                            size={{ base: "md", md: "lg" }}
                        >
                            Courses and E-books
                        </Button>
                        <Button
                            bg="transparent"
                            border="1px solid #FFFFFF"
                            paddingX={{ base: 4, md: 6 }}
                            paddingY={{ base: 2, md: 3 }}
                            color="#FFFFFF"
                            rounded="4px"
                            fontWeight="700"
                            as="a"
                            href="/contact"
                            size={{ base: "md", md: "lg" }}
                        >
                            Contact Us
                        </Button>
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    )
}

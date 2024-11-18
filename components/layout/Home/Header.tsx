import { Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'

export default function Header() {
    return (
        <Flex
            backgroundImage="url('/images/header_img.png')"
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            align={{ base: "start", md: "center" }}
            paddingX={{ base: "10px", md: "115px" }}
            height={{ base: "560px", md: "642px" }}
            rounded={{ base: "16px", md: "24px" }}
            position="relative"
        >
            <Flex
                position="absolute"
                width="100%"
                height="100%"
                background="linear-gradient(90deg, #879037 34.86%, rgba(135, 144, 55, 0.00) 222.85%)"
                borderRadius="inherit"
                left="0"
                top="0"
            >
            </Flex>
            <Flex direction="column" zIndex={2}>
                <Text
                    maxWidth="640px"
                    color="#FFFFFF"
                    fontSize={{ base: "40px", md: "72px" }}
                    fontWeight="500"
                    letterSpacing={{ base: "1.2px", md: "2.16px" }}
                    mt={{ base: 12, md: 0 }}
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
                    >
                        Contact Us
                    </Button>
                </Flex>
            </Flex>
        </Flex>
    )
}

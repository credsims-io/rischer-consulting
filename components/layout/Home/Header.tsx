import { Box, Button, Flex, SimpleGrid, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import AnimatedImage from '@/components/UI/AnimatedImage';

const heroStats = [
    { value: "$29M+", label: "Grants stewarded since 2015" },
    { value: "3×", label: "ROI for clients 1+ year" },
    { value: "100K+", label: "Professionals trained" },
    { value: "25+", label: "Years Fortune 500 strategy" },
];

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
            <Box
                position="absolute"
                inset={0}
                bgGradient="linear(135deg, rgba(6,18,41,0.78) 5%, rgba(33,63,95,0.55) 50%, rgba(87,46,92,0.35) 100%)"
                zIndex={1}
            />
            <Box
                position="absolute"
                top="-120px"
                right="-80px"
                width="420px"
                height="420px"
                bg="radial-gradient(circle, rgba(255,170,109,0.5) 0%, rgba(255,170,109,0) 70%)"
                filter="blur(10px)"
                zIndex={1}
            />
            <Box
                position="absolute"
                bottom="-140px"
                left="-60px"
                width="360px"
                height="360px"
                bg="radial-gradient(circle, rgba(166,212,255,0.4) 0%, rgba(166,212,255,0) 65%)"
                filter="blur(8px)"
                zIndex={1}
            />
            <Flex
                position="relative"
                height="100%"
                align={{ base: "start", md: "center" }}
                px={{ base: "10px", md: "80px", lg: "115px", xl: "128px", "2xl": "10%" }}
                zIndex={2}
            >
                <Flex direction="column" zIndex={2} maxW="720px" gap={6}>
                    <Flex
                        align="center"
                        gap={3}
                        bg="rgba(255,255,255,0.12)"
                        border="1px solid rgba(255,255,255,0.2)"
                        px={4}
                        py={2}
                        rounded="full"
                        width="fit-content"
                        fontSize={{ base: "12px", md: "14px" }}
                        letterSpacing="0.1em"
                        textTransform="uppercase"
                    >
                        <Box width="8px" height="8px" bg="#F49953" rounded="full" />
                        <Text color="#F5F7FF">World Cup 2026 Readiness</Text>
                    </Flex>
                    <Text
                        maxWidth="640px"
                        color="#FFFFFF"
                        fontSize={{ base: "32px", md: "56px" }}
                        fontWeight="500"
                        letterSpacing={{ base: "0.5px", md: "1px" }}
                        mt={{ base: 12, md: 0 }}
                        lineHeight={{ base: "1.2", md: "1.15" }}
                        className='font-playfair'
                    >
                        Federally-credentialed grant strategy and organizational capacity for social-impact organizations.
                    </Text>
                    <Text
                        fontSize={{ base: "16px", md: "20px" }}
                        color="#E4E7EC"
                        fontWeight="400"
                        mt={2}
                        maxW="600px"
                    >
                        $29M+ stewarded across education, workforce, international development, nonprofit — and now extending into community health.
                    </Text>
                    <Text fontSize={{ base: "12px", md: "14px" }} color="rgba(255,255,255,0.75)" letterSpacing="0.05em">
                        Certified M/WBE · EDWOSB · HUB &nbsp;·&nbsp; Federal Grant Peer Reviewer, U.S. DOE &amp; U.S. DOL
                    </Text>
                    <Flex mt={6} align='center' gap={4} wrap="wrap">
                        <Button
                            bg="#F49953"
                            paddingX={{ base: 4, md: 6 }}
                            paddingY={{ base: 2, md: 3 }}
                            color="#FFFFFF"
                            rounded="4px"
                            fontWeight="700"
                            as="a"
                            href="https://portal.rischerconsulting.com/public/appointment-scheduler/67c873f6bb8b19003a64d1d4/schedule"
                            target="_blank"
                            rel="noopener noreferrer"
                            size={{ base: "md", md: "lg" }}
                        >
                            Schedule a Capabilities Conversation
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
                            href="/assets/capabilities_statement.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            size={{ base: "md", md: "lg" }}
                        >
                            Download Capabilities One-Pager
                        </Button>
                    </Flex>
                    <SimpleGrid columns={{ base: 1, sm: heroStats.length }} spacing={{ base: 4, sm: 6 }}>
                        {heroStats.map((stat) => (
                            <Box
                                key={stat.label}
                                bg="rgba(255,255,255,0.08)"
                                border="1px solid rgba(255,255,255,0.18)"
                                rounded="12px"
                                px={5}
                                py={4}
                            >
                                <Text fontSize="28px" fontWeight="600" color="#FFFFFF">
                                    {stat.value}
                                </Text>
                                <Text fontSize="14px" color="#E4E7EC">
                                    {stat.label}
                                </Text>
                            </Box>
                        ))}
                    </SimpleGrid>
                </Flex>
            </Flex>
        </Box>
    )
}

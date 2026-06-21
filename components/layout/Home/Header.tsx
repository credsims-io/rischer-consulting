import { Box, Button, Flex, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import AnimatedImage from '@/components/UI/AnimatedImage';

const heroStats = [
    { value: "$30M+", label: "Grants stewarded since 2015" },
    { value: "3×", label: "ROI for clients 1+ year" },
    { value: "100K+", label: "Professionals trained" },
    { value: "25+", label: "Years Fortune 500 strategy" },
];

export default function Header() {
    return (
        <Box
            position="relative"
            minHeight={{ base: "520px", md: "600px" }}
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
                py={{ base: 10, md: 14 }}
                align="center"
                justify="space-between"
                px={{ base: "10px", md: "80px", lg: "115px", xl: "128px", "2xl": "10%" }}
                gap={{ base: 6, lg: 12 }}
                zIndex={2}
            >
                <Flex direction="column" zIndex={2} maxW={{ base: "100%", md: "560px" }} gap={5} flex="1">
                    <Flex
                        align="center"
                        gap={3}
                        bg="rgba(255,255,255,0.12)"
                        border="1px solid rgba(255,255,255,0.2)"
                        px={4}
                        py={2}
                        rounded="full"
                        width="fit-content"
                        fontSize={{ base: "12px", md: "13px" }}
                        letterSpacing="0.08em"
                        textTransform="uppercase"
                    >
                        <Box width="8px" height="8px" bg="#F49953" rounded="full" />
                        <Text color="#F5F7FF">Certified M/WBE · EDWOSB · HUB · Since 2015</Text>
                    </Flex>
                    <Text
                        maxWidth="640px"
                        color="#FFFFFF"
                        fontSize={{ base: "28px", md: "44px", lg: "52px" }}
                        fontWeight="500"
                        letterSpacing={{ base: "0.5px", md: "1px" }}
                        mt={0}
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
                        $30M+ stewarded across education, workforce, international development, nonprofit — and now extending into community health.
                    </Text>
                    <Text fontSize={{ base: "12px", md: "14px" }} color="rgba(255,255,255,0.75)" letterSpacing="0.05em">
                        Certified M/WBE · EDWOSB · HUB &nbsp;·&nbsp; Federal Grant Peer Reviewer, U.S. DOE &amp; U.S. DOL
                    </Text>
                    <Flex mt={4} align='center' gap={4} wrap="wrap">
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
                </Flex>

                {/* Right: stats 2×2 */}
                <SimpleGrid
                    columns={2}
                    spacing={3}
                    display={{ base: "none", lg: "grid" }}
                    flexShrink={0}
                    width="300px"
                >
                    {heroStats.map((stat) => (
                        <Box
                            key={stat.label}
                            bg="rgba(255,255,255,0.1)"
                            border="1px solid rgba(255,255,255,0.2)"
                            rounded="16px"
                            px={5}
                            py={5}
                            backdropFilter="blur(4px)"
                        >
                            <Text fontSize="30px" fontWeight="700" color="#FFFFFF" lineHeight="1" className="font-playfair">
                                {stat.value}
                            </Text>
                            <Text fontSize="13px" color="#D0D5DD" mt={1} lineHeight="1.3">
                                {stat.label}
                            </Text>
                        </Box>
                    ))}
                </SimpleGrid>
            </Flex>
        </Box>
    )
}

import { Metadata } from "next";
import { Box, Button, Flex, Grid, SimpleGrid, Text } from "@chakra-ui/react";
import ThreeWaysToStart from "@/components/layout/ThreeWaysToStart";

export const metadata: Metadata = {
    title: "Community Health Networks | Rischer Consulting",
    description: "Federal grant strategy and organizational capacity for community health centers navigating the CHCF funding cliff, H.R. 1 Medicaid provisions, and the $50B RHTP opportunity.",
};

const DUBSADO_LINK = "https://portal.rischerconsulting.com/public/appointment-scheduler/67c873f6bb8b19003a64d1d4/schedule";

export default function CommunityHealthPage() {
    return (
        <Flex
            direction="column"
            px={{ base: "10px", md: "80px", lg: "115px", xl: "128px", "2xl": "10%" }}
            paddingY={{ base: 8, md: 4 }}
            gap={{ base: 10, md: "80px" }}
            mb={6}
        >
            {/* Hero */}
            <Flex direction="column" gap={4} maxW="840px">
                <Box
                    display="inline-block"
                    px={3}
                    py={1}
                    bg="#F49953"
                    color="#FFFFFF"
                    fontSize="12px"
                    fontWeight="700"
                    rounded="4px"
                    letterSpacing="0.1em"
                    width="fit-content"
                >
                    EMERGING PRACTICE
                </Box>
                <Text
                    as="h1"
                    fontSize={{ base: "36px", lg: "60px" }}
                    color="#121212"
                    fontWeight="500"
                    className="font-playfair"
                    lineHeight="1.15"
                >
                    Community Health Networks
                </Text>
                <Text color="#667085" fontSize={{ base: "17px", md: "20px" }} lineHeight="1.7">
                    Rischer Consulting is bringing federal grant rigor, equity-centered strategy, and 10+ years of multi-sector experience to community health networks — a sector navigating the most volatile funding environment in 30 years.
                </Text>
                <Button
                    as="a"
                    href={DUBSADO_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    bg="#F49953"
                    color="#FFFFFF"
                    fontWeight="700"
                    size="lg"
                    rounded="8px"
                    width={{ base: "100%", md: "fit-content" }}
                    _hover={{ opacity: 0.9 }}
                >
                    Schedule a Capabilities Conversation
                </Button>
            </Flex>

            {/* Why Now — Regulatory Context */}
            <Box bg="#121212" rounded="24px" p={{ base: 8, md: 12 }}>
                <Text fontSize="12px" color="#F49953" fontWeight="700" letterSpacing="0.15em" textTransform="uppercase" mb={4}>
                    The Funding Environment
                </Text>
                <Text
                    as="h2"
                    fontSize={{ base: "24px", md: "36px" }}
                    fontWeight="500"
                    className="font-playfair"
                    color="#FFFFFF"
                    mb={6}
                    maxW="600px"
                >
                    Why community health organizations can't afford to wait
                </Text>
                <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={4}>
                    {[
                        {
                            headline: "CHCF Funding Cliff",
                            detail: "The California Health Care Foundation's primary grant cycle ends December 2026. Organizations without diversified funding entering this cliff face critical operational risk.",
                        },
                        {
                            headline: "H.R. 1 Medicaid Provisions",
                            detail: "New compliance demands from H.R. 1's Medicaid provisions require community health centers to build documentation and reporting capacity they may not currently have.",
                        },
                        {
                            headline: "$50B RHTP Opportunity",
                            detail: "The Rural Health Transformation Program creates the largest federal grant opportunity for prepared community health organizations in a generation. The window favors those ready now.",
                        },
                        {
                            headline: "−2.1% Sector Margin",
                            detail: "With average sector margins at −2.1%, capacity building is no longer optional. Organizations that build grant infrastructure now will outlast those that don't.",
                        },
                    ].map((item) => (
                        <Box key={item.headline} border="1px solid rgba(255,255,255,0.12)" rounded="12px" p={5} bg="rgba(255,255,255,0.04)">
                            <Text fontWeight="700" color="#F49953" fontSize="15px" mb={2}>{item.headline}</Text>
                            <Text color="#D0D5DD" fontSize="14px" lineHeight="1.65">{item.detail}</Text>
                        </Box>
                    ))}
                </Grid>
            </Box>

            {/* What We Do */}
            <Flex direction="column" gap={6}>
                <Text as="h2" fontSize={{ base: "28px", md: "40px" }} fontWeight="500" className="font-playfair" color="#121212">
                    What We Do for Community Health Organizations
                </Text>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                    <Flex direction="column" gap={4}>
                        <Text color="#475467" fontSize={{ base: "16px", md: "18px" }} lineHeight="1.7">
                            Rischer Consulting applies the same federal grant methodology that has secured $30M+ across sectors to the unique funding landscape of community health centers. We understand the compliance demands, the equity-reporting expectations, and the multi-funder coordination that CHCs face in ways that generalist grant writers don't.
                        </Text>
                        <Text color="#475467" fontSize={{ base: "16px", md: "18px" }} lineHeight="1.7">
                            Our principal is a Federal Grant Peer Reviewer for both the U.S. Department of Education and U.S. Department of Labor — which means we write to reviewer standards, not just funder guidelines. This inside-out perspective is what separates competitive submissions from also-rans.
                        </Text>
                    </Flex>
                    <Flex direction="column" gap={3}>
                        {[
                            "Funding landscape assessment and grant calendar strategy",
                            "Federal health grant applications (HRSA, HHS, CDC)",
                            "Foundation and CHCF proposal development",
                            "Logic model development and needs assessment",
                            "Compliance documentation and post-award management",
                            "Medicaid-related reporting and H.R. 1 compliance prep",
                            "Capacity-building partnership (multi-quarter retainer)",
                        ].map((item) => (
                            <Flex key={item} align="flex-start" gap={3}>
                                <Box mt="6px" width="6px" height="6px" minW="6px" bg="#F49953" rounded="full" />
                                <Text fontSize="15px" color="#475467">{item}</Text>
                            </Flex>
                        ))}
                    </Flex>
                </SimpleGrid>
            </Flex>

            {/* CTA */}
            <Box border="1px solid #EAECF0" rounded="24px" p={{ base: 8, md: 12 }} bg="#FEF4EC" textAlign={{ base: "left", md: "center" }}>
                <Text fontSize={{ base: "22px", md: "32px" }} fontWeight="500" className="font-playfair" color="#121212" mb={3} maxW="560px" mx={{ md: "auto" }}>
                    Is your organization prepared for the funding environment ahead?
                </Text>
                <Text color="#667085" fontSize={{ base: "15px", md: "17px" }} mb={6} maxW="500px" mx={{ md: "auto" }} lineHeight="1.65">
                    We offer a Funding Readiness Assessment specifically for community health organizations — no obligation, clear deliverables.
                </Text>
                <Button
                    as="a"
                    href={DUBSADO_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    bg="#F49953"
                    color="#FFFFFF"
                    fontWeight="700"
                    size="lg"
                    rounded="8px"
                    _hover={{ opacity: 0.9 }}
                >
                    Schedule a CHN Capabilities Conversation
                </Button>
            </Box>

            {/* ThreeWaysToStart */}
            <ThreeWaysToStart />
        </Flex>
    );
}

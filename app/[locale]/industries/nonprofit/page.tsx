import { Metadata } from "next";
import { Box, Button, Flex, Grid, SimpleGrid, Text } from "@chakra-ui/react";
import ThreeWaysToStart from "@/components/layout/ThreeWaysToStart";

export const metadata: Metadata = {
    title: "Nonprofit & Capacity Building | Rischer Consulting",
    description: "Grant strategy and organizational capacity for nonprofits, faith-based organizations, and community development corporations ready to build sustainable funding systems.",
};

const DUBSADO_LINK = "https://portal.rischerconsulting.com/public/appointment-scheduler/67c873f6bb8b19003a64d1d4/schedule";

export default function NonprofitPage() {
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
                    bg="#879037"
                    color="#FFFFFF"
                    fontSize="12px"
                    fontWeight="700"
                    rounded="4px"
                    letterSpacing="0.1em"
                    width="fit-content"
                >
                    NONPROFIT & CAPACITY BUILDING
                </Box>
                <Text
                    as="h1"
                    fontSize={{ base: "36px", lg: "60px" }}
                    color="#121212"
                    fontWeight="500"
                    className="font-playfair"
                    lineHeight="1.15"
                >
                    Building the systems that sustain your mission
                </Text>
                <Text color="#667085" fontSize={{ base: "17px", md: "20px" }} lineHeight="1.7">
                    Nonprofits, faith-based organizations, and community development corporations don't just need grant writers — they need partners who build the organizational infrastructure that makes every future grant more competitive than the last.
                </Text>
            </Flex>

            {/* What We Do */}
            <Flex direction="column" gap={6}>
                <Text as="h2" fontSize={{ base: "28px", md: "40px" }} fontWeight="500" className="font-playfair" color="#121212">
                    What We Do
                </Text>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                    <Flex direction="column" gap={4}>
                        <Text color="#475467" fontSize={{ base: "16px", md: "18px" }} lineHeight="1.7">
                            The nonprofit sector is Rischer Consulting's founding home. Since 2015, we've partnered with faith-based organizations, CBOs, community development corporations, and emerging nonprofits to help them move from reactive grant-chasing to proactive funding strategy.
                        </Text>
                        <Text color="#475467" fontSize={{ base: "16px", md: "18px" }} lineHeight="1.7">
                            Our capacity-building approach goes beyond a single grant win. We build the logic models, data-tracking systems, compliance documentation, and leadership capacity that position organizations to win — and sustain — competitive funding year after year.
                        </Text>
                    </Flex>
                    <Flex direction="column" gap={3}>
                        {[
                            "Organizational funding readiness assessment",
                            "Foundation and corporate grant proposals",
                            "Faith-based organization grant strategy and writing",
                            "Nonprofit start-up and capacity-building grants",
                            "Operations and general support grant applications",
                            "Logic model and theory-of-change development",
                            "Board development and leadership coaching",
                            "Multi-year strategic planning facilitation",
                        ].map((item) => (
                            <Flex key={item} align="flex-start" gap={3}>
                                <Box mt="6px" width="6px" height="6px" minW="6px" bg="#879037" rounded="full" />
                                <Text fontSize="15px" color="#475467">{item}</Text>
                            </Flex>
                        ))}
                    </Flex>
                </SimpleGrid>
            </Flex>

            {/* Impact */}
            <Flex direction="column" gap={6}>
                <Text as="h2" fontSize={{ base: "28px", md: "40px" }} fontWeight="500" className="font-playfair" color="#121212">
                    Sector Impact
                </Text>
                <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={5}>
                    <Box bg="#FEF4EC" rounded="20px" p={6} textAlign="center">
                        <Text fontSize="40px" fontWeight="700" color="#879037" className="font-playfair">$1.1M+</Text>
                        <Text fontSize="14px" color="#667085" mt={1}>Operations &amp; capacity grants secured</Text>
                    </Box>
                    <Box bg="#FEF4EC" rounded="20px" p={6} textAlign="center">
                        <Text fontSize="40px" fontWeight="700" color="#879037" className="font-playfair">3×</Text>
                        <Text fontSize="14px" color="#667085" mt={1}>Average ROI for retainer clients</Text>
                    </Box>
                    <Box bg="#FEF4EC" rounded="20px" p={6} textAlign="center">
                        <Text fontSize="40px" fontWeight="700" color="#879037" className="font-playfair">10+</Text>
                        <Text fontSize="14px" color="#667085" mt={1}>Years building nonprofit capacity</Text>
                    </Box>
                </Grid>
            </Flex>

            {/* CTA */}
            <Box border="1px solid #EAECF0" rounded="24px" p={{ base: 8, md: 12 }} bg="#FEF4EC">
                <Text fontSize={{ base: "22px", md: "32px" }} fontWeight="500" className="font-playfair" color="#121212" mb={3} maxW="560px">
                    Ready to build a funding system that lasts?
                </Text>
                <Text color="#667085" fontSize={{ base: "15px", md: "17px" }} mb={6} maxW="500px" lineHeight="1.65">
                    Start with a Funding Readiness Audit — a 3–4 week engagement that gives you a clear picture of where you stand and what it will take to win your next grant.
                </Text>
                <Button
                    as="a"
                    href={DUBSADO_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    bg="#879037"
                    color="#FFFFFF"
                    fontWeight="700"
                    size="lg"
                    rounded="8px"
                    _hover={{ opacity: 0.9 }}
                >
                    Start with a Funding Readiness Audit
                </Button>
            </Box>

            {/* ThreeWaysToStart */}
            <ThreeWaysToStart />
        </Flex>
    );
}

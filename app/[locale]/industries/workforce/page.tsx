import { Metadata } from "next";
import { Box, Button, Flex, Grid, SimpleGrid, Text } from "@chakra-ui/react";
import ThreeWaysToStart from "@/components/layout/ThreeWaysToStart";

export const metadata: Metadata = {
    title: "Workforce Development | Rischer Consulting",
    description: "DOL WIOA, apprenticeship, and workforce equity grants for community colleges, workforce boards, and community-based organizations.",
};

const DUBSADO_LINK = "https://portal.rischerconsulting.com/public/appointment-scheduler/67c873f6bb8b19003a64d1d4/schedule";

export default function WorkforcePage() {
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
                    bg="#121212"
                    color="#FFFFFF"
                    fontSize="12px"
                    fontWeight="700"
                    rounded="4px"
                    letterSpacing="0.1em"
                    width="fit-content"
                >
                    WORKFORCE DEVELOPMENT
                </Box>
                <Text
                    as="h1"
                    fontSize={{ base: "36px", lg: "60px" }}
                    color="#121212"
                    fontWeight="500"
                    className="font-playfair"
                    lineHeight="1.15"
                >
                    Funding the workforce of tomorrow
                </Text>
                <Text color="#667085" fontSize={{ base: "17px", md: "20px" }} lineHeight="1.7">
                    Rischer Consulting has deep roots in workforce development grant writing — from WIOA-funded programs to registered apprenticeships to sector-based training initiatives. Our principal is a U.S. Department of Labor Federal Grant Peer Reviewer.
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
                            Workforce development is one of the most well-funded areas of federal grant investment — and one of the most competitive. Rischer Consulting has served workforce boards, community colleges, faith-based workforce initiatives, and community-based organizations since 2015, building a track record across WIOA, apprenticeship, and sector-based grant programs.
                        </Text>
                        <Text color="#475467" fontSize={{ base: "16px", md: "18px" }} lineHeight="1.7">
                            Because our principal reviews DOL grant applications as a Federal Peer Reviewer, our workforce proposals are written to the reviewer standards that separate funded applications from honorable mentions. We don't guess what reviewers want — we know.
                        </Text>
                    </Flex>
                    <Flex direction="column" gap={3}>
                        {[
                            "WIOA Title I Adult, Dislocated Worker, and Youth grants",
                            "DOL Registered Apprenticeship program grants",
                            "Sector-based workforce training grants (construction, healthcare, tech)",
                            "Community college workforce program development",
                            "Faith-based workforce pipeline initiatives",
                            "Equity workforce grants for underrepresented populations",
                            "State workforce board capacity-building grants",
                            "Employer partnership and co-investment proposals",
                        ].map((item) => (
                            <Flex key={item} align="flex-start" gap={3}>
                                <Box mt="6px" width="6px" height="6px" minW="6px" bg="#121212" rounded="full" />
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
                    <Box bg="#F5F7E9" rounded="20px" p={6} textAlign="center">
                        <Text fontSize="40px" fontWeight="700" color="#121212" className="font-playfair">$988K+</Text>
                        <Text fontSize="14px" color="#667085" mt={1}>Documented workforce grants secured</Text>
                    </Box>
                    <Box bg="#F5F7E9" rounded="20px" p={6} textAlign="center">
                        <Text fontSize="40px" fontWeight="700" color="#121212" className="font-playfair">100K+</Text>
                        <Text fontSize="14px" color="#667085" mt={1}>Professionals trained through client programs</Text>
                    </Box>
                    <Box bg="#F5F7E9" rounded="20px" p={6} textAlign="center">
                        <Text fontSize="40px" fontWeight="700" color="#121212" className="font-playfair">DOL</Text>
                        <Text fontSize="14px" color="#667085" mt={1}>Federal peer reviewer credential</Text>
                    </Box>
                </Grid>
            </Flex>

            {/* CTA */}
            <Box border="1px solid #EAECF0" rounded="24px" p={{ base: 8, md: 12 }} bg="#F5F7E9">
                <Text fontSize={{ base: "22px", md: "32px" }} fontWeight="500" className="font-playfair" color="#121212" mb={3} maxW="560px">
                    Building a workforce program that needs federal backing?
                </Text>
                <Text color="#667085" fontSize={{ base: "15px", md: "17px" }} mb={6} maxW="500px" lineHeight="1.65">
                    WIOA funding cycles move on fixed timelines. Let's assess your eligibility and build a competitive proposal before the announcement window closes.
                </Text>
                <Button
                    as="a"
                    href={DUBSADO_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    bg="#121212"
                    color="#FFFFFF"
                    fontWeight="700"
                    size="lg"
                    rounded="8px"
                    _hover={{ opacity: 0.9 }}
                >
                    Schedule a Funding Readiness Discovery
                </Button>
            </Box>

            {/* ThreeWaysToStart */}
            <ThreeWaysToStart />
        </Flex>
    );
}

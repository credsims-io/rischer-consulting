import { Metadata } from "next";
import { Box, Button, Flex, Grid, SimpleGrid, Text } from "@chakra-ui/react";
import ThreeWaysToStart from "@/components/layout/ThreeWaysToStart";

export const metadata: Metadata = {
    title: "International Development | Rischer Consulting",
    description: "USAID, State Department, and foundation grant strategy for organizations operating in Sub-Saharan Africa and other high-need geographies.",
};

const DUBSADO_LINK = "https://portal.rischerconsulting.com/public/appointment-scheduler/67c873f6bb8b19003a64d1d4/schedule";

export default function InternationalPage() {
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
                    INTERNATIONAL DEVELOPMENT
                </Box>
                <Text
                    as="h1"
                    fontSize={{ base: "36px", lg: "60px" }}
                    color="#121212"
                    fontWeight="500"
                    className="font-playfair"
                    lineHeight="1.15"
                >
                    Global grant strategy with local depth
                </Text>
                <Text color="#667085" fontSize={{ base: "17px", md: "20px" }} lineHeight="1.7">
                    Rischer Consulting brings U.S. federal grant discipline to international development organizations — from USAID and State Department applications to multi-lateral foundation proposals for programs operating across Sub-Saharan Africa and beyond.
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
                            International development organizations face a unique dual challenge: navigating the compliance demands of U.S. federal funders while demonstrating local credibility and contextual relevance in-country. Rischer Consulting bridges that gap.
                        </Text>
                        <Text color="#475467" fontSize={{ base: "16px", md: "18px" }} lineHeight="1.7">
                            Our team has direct experience supporting organizations operating in Nigeria, Sudan, South Sudan, Kenya, and other high-need geographies. We translate community-level impact into the grant language federal and foundation reviewers require — without losing the authenticity that makes your work fundable.
                        </Text>
                    </Flex>
                    <Flex direction="column" gap={3}>
                        {[
                            "USAID cooperative agreement and grant proposals",
                            "U.S. Department of State grant applications",
                            "Multi-lateral foundation proposals (Gates, MacArthur, Ford)",
                            "Diaspora-led organization capacity building",
                            "Sub-Saharan Africa program development grants",
                            "NGO registration, governance, and compliance documentation",
                            "Logic model and M&E framework development",
                            "Post-award reporting and compliance management",
                        ].map((item) => (
                            <Flex key={item} align="flex-start" gap={3}>
                                <Box mt="6px" width="6px" height="6px" minW="6px" bg="#F49953" rounded="full" />
                                <Text fontSize="15px" color="#475467">{item}</Text>
                            </Flex>
                        ))}
                    </Flex>
                </SimpleGrid>
            </Flex>

            {/* Geographies */}
            <Flex direction="column" gap={6}>
                <Text as="h2" fontSize={{ base: "28px", md: "40px" }} fontWeight="500" className="font-playfair" color="#121212">
                    Geographies of Experience
                </Text>
                <Grid templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }} gap={4}>
                    {["Nigeria", "Sudan", "South Sudan", "Kenya", "United States", "Multi-Country", "Sub-Saharan Africa", "Global"].map((geo) => (
                        <Box key={geo} border="1px solid #EAECF0" rounded="12px" p={4} textAlign="center" bg="#FFFFFF">
                            <Text fontWeight="600" color="#121212" fontSize="15px">{geo}</Text>
                        </Box>
                    ))}
                </Grid>
            </Flex>

            {/* CTA */}
            <Box border="1px solid #EAECF0" rounded="24px" p={{ base: 8, md: 12 }} bg="#FEF4EC">
                <Text fontSize={{ base: "22px", md: "32px" }} fontWeight="500" className="font-playfair" color="#121212" mb={3} maxW="560px">
                    Operating internationally and pursuing U.S. funding?
                </Text>
                <Text color="#667085" fontSize={{ base: "15px", md: "17px" }} mb={6} maxW="500px" lineHeight="1.65">
                    USAID and State Department cycles require months of preparation. Let's map your funding landscape and build your proposal infrastructure now.
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
                    Schedule a Capabilities Conversation
                </Button>
            </Box>

            {/* ThreeWaysToStart */}
            <ThreeWaysToStart />
        </Flex>
    );
}

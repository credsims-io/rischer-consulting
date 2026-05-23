import { Metadata } from "next";
import { Box, Button, Flex, Grid, SimpleGrid, Text } from "@chakra-ui/react";
import ThreeWaysToStart from "@/components/layout/ThreeWaysToStart";

export const metadata: Metadata = {
    title: "Coaching & Leadership Development | Rischer Consulting",
    description: "Evidence-based executive coaching and leadership development for nonprofit executives, emerging leaders, and organizational teams.",
    keywords: ["executive coaching", "leadership development", "nonprofit coaching", "organizational coaching"],
};

const DUBSADO_LINK = "https://portal.rischerconsulting.com/public/appointment-scheduler/67c873f6bb8b19003a64d1d4/schedule";

export default function CoachingLeadershipPage() {
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
                    COACHING & LEADERSHIP
                </Box>
                <Text
                    as="h1"
                    fontSize={{ base: "36px", lg: "60px" }}
                    color="#121212"
                    fontWeight="500"
                    className="font-playfair"
                    lineHeight="1.15"
                >
                    Leadership that funds itself
                </Text>
                <Text color="#667085" fontSize={{ base: "17px", md: "20px" }} lineHeight="1.7">
                    Strong organizations win more grants. Rischer Consulting's coaching and leadership development services build the executive capacity and organizational health that make every other investment — including grant strategy — more effective.
                </Text>
            </Flex>

            {/* Who This Is For */}
            <Flex direction="column" gap={6}>
                <Text as="h2" fontSize={{ base: "28px", md: "40px" }} fontWeight="500" className="font-playfair" color="#121212">
                    Who This Is For
                </Text>
                <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={4}>
                    {[
                        { title: "Nonprofit Executives", detail: "CEOs and Executive Directors navigating growth, transition, or a step-change in impact." },
                        { title: "Emerging Leaders", detail: "High-potential directors and managers ready to move into executive roles." },
                        { title: "Solo Entrepreneurs", detail: "Single-operator business owners who need a strategic sounding board and accountability partner." },
                        { title: "Leadership Teams", detail: "Organizations that need to strengthen trust, communication, and collective decision-making." },
                        { title: "Board Leaders", detail: "Boards that want to level up their governance, fundraising engagement, and strategic clarity." },
                        { title: "Faith-Based Leaders", detail: "Pastors, ministry directors, and faith community leaders expanding their organizational impact." },
                    ].map((item) => (
                        <Box key={item.title} border="1px solid #EAECF0" rounded="16px" p={5} bg="#FFFFFF">
                            <Text fontWeight="700" color="#121212" fontSize="16px" mb={2}>{item.title}</Text>
                            <Text color="#667085" fontSize="14px" lineHeight="1.5">{item.detail}</Text>
                        </Box>
                    ))}
                </Grid>
            </Flex>

            {/* What We Do */}
            <Flex direction="column" gap={6}>
                <Text as="h2" fontSize={{ base: "28px", md: "40px" }} fontWeight="500" className="font-playfair" color="#121212">
                    What We Do
                </Text>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                    <Flex direction="column" gap={4}>
                        <Text color="#475467" fontSize={{ base: "16px", md: "18px" }} lineHeight="1.7">
                            Every coaching engagement begins with a comprehensive needs assessment — for the individual and the organization. Our philosophy is grounded in evidence-based positive psychology: a deliberate, results-oriented methodology built on deep respect, honesty, and action steps that produce measurable change.
                        </Text>
                        <Text color="#475467" fontSize={{ base: "16px", md: "18px" }} lineHeight="1.7">
                            We work with leaders at every stage — from emerging managers to solo entrepreneurs to organizational leadership teams. Our approach integrates the latest research in human behavior, neuroscience, adult learning, and organizational dynamics to produce leaders who build stronger teams and healthier organizations.
                        </Text>
                    </Flex>
                    <Flex direction="column" gap={3}>
                        {[
                            "Individual executive coaching (1:1 engagement)",
                            "Solo entrepreneur and business owner coaching",
                            "Organizational leadership team coaching",
                            "Board retreat facilitation and governance development",
                            "Leadership cohort design and facilitation",
                            "360-degree assessment and feedback integration",
                            "Decision-making frameworks for high-stakes situations",
                            "Faith-based organizational leadership consulting",
                        ].map((item) => (
                            <Flex key={item} align="flex-start" gap={3}>
                                <Box mt="6px" width="6px" height="6px" minW="6px" bg="#879037" rounded="full" />
                                <Text fontSize="15px" color="#475467">{item}</Text>
                            </Flex>
                        ))}
                    </Flex>
                </SimpleGrid>
            </Flex>

            {/* Walk Away With */}
            <Flex direction="column" gap={6}>
                <Text as="h2" fontSize={{ base: "28px", md: "40px" }} fontWeight="500" className="font-playfair" color="#121212">
                    Walk Away With
                </Text>
                <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={4}>
                    {[
                        { item: "A personalized leadership development plan", detail: "Goals, milestones, and accountability structures built around your specific context." },
                        { item: "Stronger decision-making under pressure", detail: "Frameworks and practice for navigating complexity, conflict, and high-stakes choices." },
                        { item: "Improved team dynamics", detail: "Practical tools for building trust, managing conflict, and creating a high-performance culture." },
                        { item: "Clearer organizational vision", detail: "A leadership identity and organizational direction your team can rally around." },
                        { item: "Measurable progress metrics", detail: "Defined outcomes that demonstrate return on coaching investment to funders and boards." },
                        { item: "A long-term growth partner", detail: "Most clients continue beyond the initial engagement because the ROI is clear and compounding." },
                    ].map((d) => (
                        <Flex key={d.item} align="flex-start" gap={3} border="1px solid #EAECF0" rounded="12px" p={4} bg="#FFFFFF">
                            <Box mt="6px" width="8px" height="8px" minW="8px" bg="#F49953" rounded="full" />
                            <Box>
                                <Text fontWeight="700" color="#121212" fontSize="15px">{d.item}</Text>
                                <Text color="#667085" fontSize="14px" mt={1}>{d.detail}</Text>
                            </Box>
                        </Flex>
                    ))}
                </Grid>
            </Flex>

            {/* ThreeWaysToStart */}
            <ThreeWaysToStart />

            {/* Final CTA */}
            <Flex direction="column" align="center" textAlign="center" gap={4}>
                <Text fontSize={{ base: "20px", md: "28px" }} fontWeight="500" className="font-playfair" color="#121212" maxW="560px">
                    Ready to invest in the leadership your organization needs?
                </Text>
                <Text color="#667085" fontSize={{ base: "15px", md: "17px" }} maxW="480px" lineHeight="1.65">
                    Day-rate facilitation is also available for board retreats, leadership cohorts, and strategic planning intensives.
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
                    Schedule a Capabilities Conversation
                </Button>
            </Flex>
        </Flex>
    );
}

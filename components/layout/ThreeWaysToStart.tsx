import { Box, Button, Flex, Grid, Text } from "@chakra-ui/react";

const DUBSADO_LINK = "https://portal.rischerconsulting.com/public/appointment-scheduler/67c873f6bb8b19003a64d1d4/schedule";

const tiers = [
    {
        label: "DIAGNOSTIC",
        name: "Funding Readiness Audit",
        price: "$5K–$15K",
        timeline: "3–4 weeks",
        bullets: [
            "Full grant landscape assessment",
            "Organizational readiness scorecard",
            "Funding gap analysis",
            "Prioritized action plan",
        ],
        cta: "Start with a Diagnostic",
        accent: "#F49953",
    },
    {
        label: "PROJECT",
        name: "Grant Writing Engagement",
        price: "$25K–$60K",
        timeline: "8–12 weeks",
        bullets: [
            "Full proposal development",
            "Needs assessment & logic model",
            "Budget narrative & compliance review",
            "Submission & post-award support",
        ],
        cta: "Start a Project",
        accent: "#121212",
        featured: true,
    },
    {
        label: "RETAINER",
        name: "Capacity-Building Partnership",
        price: "$40K–$120K",
        timeline: "Multi-quarter",
        bullets: [
            "Ongoing grant strategy & writing",
            "Leadership development",
            "Strategic planning facilitation",
            "Quarterly impact reporting",
        ],
        cta: "Build a Partnership",
        accent: "#879037",
    },
];

export default function ThreeWaysToStart() {
    return (
        <Flex direction="column" gap={8}>
            <Flex direction="column" gap={2}>
                <Text
                    as="h2"
                    fontSize={{ base: "28px", md: "40px" }}
                    fontWeight="500"
                    className="font-playfair"
                    color="#121212"
                >
                    Three Ways to Start
                </Text>
                <Text color="#667085" fontSize={{ base: "15px", md: "17px" }}>
                    Day-rate facilitation also available for board retreats, leadership cohorts, and strategic planning intensives.
                </Text>
            </Flex>
            <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6}>
                {tiers.map((tier) => (
                    <Box
                        key={tier.label}
                        border={tier.featured ? `2px solid ${tier.accent}` : "1px solid #EAECF0"}
                        rounded="20px"
                        p={6}
                        bg={tier.featured ? "#121212" : "#FFFFFF"}
                        color={tier.featured ? "#FFFFFF" : "#121212"}
                        display="flex"
                        flexDirection="column"
                        gap={4}
                    >
                        <Box>
                            <Box
                                display="inline-block"
                                px={2}
                                py={1}
                                bg={tier.accent}
                                color="#FFFFFF"
                                fontSize="11px"
                                fontWeight="700"
                                rounded="4px"
                                letterSpacing="0.08em"
                                mb={3}
                            >
                                {tier.label}
                            </Box>
                            <Text fontSize={{ base: "20px", md: "22px" }} fontWeight="600" className="font-playfair">
                                {tier.name}
                            </Text>
                            <Flex align="baseline" gap={2} mt={1}>
                                <Text fontSize="24px" fontWeight="700" color={tier.featured ? "#F49953" : tier.accent}>
                                    {tier.price}
                                </Text>
                                <Text fontSize="13px" color={tier.featured ? "#D0D5DD" : "#667085"}>
                                    · {tier.timeline}
                                </Text>
                            </Flex>
                        </Box>
                        <Flex direction="column" gap={2} flex={1}>
                            {tier.bullets.map((b) => (
                                <Flex key={b} align="flex-start" gap={2}>
                                    <Box mt="5px" width="6px" height="6px" minW="6px" bg={tier.featured ? "#F49953" : tier.accent} rounded="full" />
                                    <Text fontSize="14px" color={tier.featured ? "#E4E7EC" : "#475467"}>{b}</Text>
                                </Flex>
                            ))}
                        </Flex>
                        <Button
                            as="a"
                            href={DUBSADO_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            bg={tier.featured ? "#F49953" : tier.accent}
                            color="#FFFFFF"
                            fontWeight="700"
                            rounded="8px"
                            _hover={{ opacity: 0.9 }}
                            mt="auto"
                        >
                            {tier.cta}
                        </Button>
                    </Box>
                ))}
            </Grid>
        </Flex>
    );
}

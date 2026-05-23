import { Metadata } from "next";
import { Box, Button, Flex, Grid, Text } from "@chakra-ui/react";
import ThreeWaysToStart from "@/components/layout/ThreeWaysToStart";

export const metadata: Metadata = {
    title: "The Color of Opportunity™ | Rischer Consulting",
    description: "Rischer Consulting's four-phase grant strategy methodology: Diagnose · Design · Deliver · Document.",
};

const DUBSADO_LINK = "https://portal.rischerconsulting.com/public/appointment-scheduler/67c873f6bb8b19003a64d1d4/schedule";

const phases = [
    {
        step: "01",
        name: "Diagnose",
        color: "#879037",
        description: "We start with a thorough funding landscape assessment and organizational readiness scorecard. This phase identifies your competitive position, uncovers funding gaps, and maps priority funders ranked by fit, deadline, and competitive advantage.",
        deliverables: [
            "Funding landscape assessment",
            "Organizational readiness scorecard",
            "Priority funder map",
            "Funding gap analysis",
        ],
    },
    {
        step: "02",
        name: "Design",
        color: "#F49953",
        description: "We build a customized grant strategy, logic model, and proposal architecture aligned to your mission, budget, and capacity. Every application is structurally sound and competitive before the first word is drafted.",
        deliverables: [
            "Grant strategy roadmap",
            "Logic model and theory of change",
            "Proposal architecture",
            "Budget narrative framework",
        ],
    },
    {
        step: "03",
        name: "Deliver",
        color: "#121212",
        description: "Our team writes, manages, and submits compelling proposals — from federal applications to foundation grants. Every submission is reviewed against the standards our principal uses as a U.S. DOE & DOL Federal Grant Peer Reviewer.",
        deliverables: [
            "Complete proposal development",
            "Federal peer reviewer pre-submission review",
            "Compliance and eligibility verification",
            "Submission and confirmation documentation",
        ],
    },
    {
        step: "04",
        name: "Document",
        color: "#879037",
        description: "We track outcomes, manage compliance, and produce the reporting that positions you for the next round of funding. Each grant cycle becomes an organizational asset rather than a burden.",
        deliverables: [
            "Post-award reporting support",
            "Compliance management and audit prep",
            "Outcome tracking and data documentation",
            "Portfolio narrative for future applications",
        ],
    },
];

export default function ColorOfOpportunityPage() {
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
                    OUR METHODOLOGY
                </Box>
                <Text
                    as="h1"
                    fontSize={{ base: "36px", lg: "60px" }}
                    color="#121212"
                    fontWeight="500"
                    className="font-playfair"
                    lineHeight="1.15"
                >
                    The Color of Opportunity™
                </Text>
                <Text color="#667085" fontSize={{ base: "17px", md: "20px" }} lineHeight="1.7" maxW="680px">
                    A four-phase grant strategy methodology built on the same standards used by federal grant peer reviewers — designed to turn funding potential into funded reality, and funded programs into sustainable organizations.
                </Text>
            </Flex>

            {/* Framework Overview */}
            <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={6}>
                {phases.map((phase) => (
                    <Box
                        key={phase.step}
                        border="1px solid #EAECF0"
                        rounded="20px"
                        p={{ base: 6, md: 8 }}
                        bg="#FFFFFF"
                    >
                        <Flex align="center" gap={3} mb={4}>
                            <Box
                                width="44px"
                                height="44px"
                                bg={phase.color}
                                rounded="12px"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                flexShrink={0}
                            >
                                <Text color="#FFFFFF" fontWeight="800" fontSize="14px">{phase.step}</Text>
                            </Box>
                            <Text fontSize="26px" fontWeight="600" className="font-playfair" color="#121212">
                                {phase.name}
                            </Text>
                        </Flex>
                        <Text color="#475467" fontSize={{ base: "15px", md: "16px" }} lineHeight="1.7" mb={5}>
                            {phase.description}
                        </Text>
                        <Box borderTop="1px solid #EAECF0" pt={4}>
                            <Text fontSize="12px" fontWeight="700" color="#98A2B3" letterSpacing="0.1em" textTransform="uppercase" mb={3}>
                                Key Deliverables
                            </Text>
                            <Flex direction="column" gap={2}>
                                {phase.deliverables.map((d) => (
                                    <Flex key={d} align="flex-start" gap={2}>
                                        <Box mt="6px" width="5px" height="5px" minW="5px" bg={phase.color} rounded="full" />
                                        <Text fontSize="14px" color="#475467">{d}</Text>
                                    </Flex>
                                ))}
                            </Flex>
                        </Box>
                    </Box>
                ))}
            </Grid>

            {/* Why it works */}
            <Box bg="#121212" rounded="24px" p={{ base: 8, md: 12 }}>
                <Text fontSize="12px" color="#F49953" fontWeight="700" letterSpacing="0.15em" textTransform="uppercase" mb={4}>
                    The Difference
                </Text>
                <Text
                    fontSize={{ base: "22px", md: "32px" }}
                    fontWeight="500"
                    className="font-playfair"
                    color="#FFFFFF"
                    mb={4}
                    maxW="640px"
                >
                    Written to federal reviewer standards — because our principal reviews federal grants.
                </Text>
                <Text color="#D0D5DD" fontSize={{ base: "15px", md: "17px" }} lineHeight="1.7" maxW="680px" mb={6}>
                    Shaniqua Rischer serves as a Federal Grant Peer Reviewer for both the U.S. Department of Education and the U.S. Department of Labor. The Color of Opportunity™ methodology was built on that inside knowledge — writing to the criteria reviewers actually score, not just the criteria funders publish.
                </Text>
                <Button
                    as="a"
                    href={DUBSADO_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    bg="#F49953"
                    color="#121212"
                    fontWeight="700"
                    size="lg"
                    rounded="8px"
                    _hover={{ opacity: 0.9 }}
                >
                    Apply This Methodology to Your Grant
                </Button>
            </Box>

            {/* ThreeWaysToStart */}
            <ThreeWaysToStart />
        </Flex>
    );
}

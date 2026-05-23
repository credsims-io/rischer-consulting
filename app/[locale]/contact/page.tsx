"use client"

import { Box, Button, Flex, Grid, Text } from "@chakra-ui/react";

const DUBSADO_LINK = "https://portal.rischerconsulting.com/public/appointment-scheduler/67c873f6bb8b19003a64d1d4/schedule";

const meetingTypes = [
    {
        label: "CAPABILITIES CONVERSATION",
        title: "30-Minute Overview",
        description: "New to Rischer Consulting? Start here. We'll walk through your organization's goals, the services most relevant to your situation, and what a realistic engagement could look like.",
        best: "New clients · First-time inquiries",
        accent: "#879037",
    },
    {
        label: "FUNDING READINESS DISCOVERY",
        title: "60-Minute Deep-Dive",
        description: "For organizations ready to pursue a specific grant or funding goal. We'll assess your competitive position, identify gaps, and outline what it would take to submit a winning proposal.",
        best: "Active grant pursuits · Organizations with a target funder",
        accent: "#121212",
        featured: true,
    },
    {
        label: "PARTNERSHIP & SPEAKING",
        title: "Strategic Conversation",
        description: "Board retreats, leadership cohorts, conference speaking, and multi-year capacity-building partnerships. Day-rate facilitation also available for one-time strategic planning intensives.",
        best: "Boards · Conference organizers · Multi-quarter partnerships",
        accent: "#F49953",
    },
];

const revenueBands = [
    "Under $500K annual budget",
    "$500K – $1M",
    "$1M – $5M",
    "$5M – $15M",
    "$15M – $50M",
    "$50M+",
    "Government / Public sector",
];

export default function ContactPage() {
    return (
        <Flex
            direction="column"
            px={{ base: "10px", md: "80px", lg: "115px", xl: "128px", "2xl": "10%" }}
            paddingY={{ base: 8, md: 4 }}
            gap={{ base: 10, md: "80px" }}
            mb={6}
        >
            {/* Hero */}
            <Flex direction="column" gap={4} maxW="760px">
                <Text
                    as="h1"
                    fontSize={{ base: "36px", lg: "64px" }}
                    color="#121212"
                    fontWeight="500"
                    className="font-playfair"
                >
                    Let&apos;s Talk
                </Text>
                <Text color="#667085" fontSize={{ base: "17px", md: "20px" }} lineHeight="1.7">
                    We manage new inquiries through our secure scheduling portal. Choose the conversation type that best fits your situation — a team member will confirm within one business day.
                </Text>
                <Flex gap={6} wrap="wrap" mt={2}>
                    <Flex align="center" gap={2}>
                        <Box width="8px" height="8px" bg="#F49953" rounded="full" />
                        <Text color="#475467" fontSize="15px">Responds within 1 business day</Text>
                    </Flex>
                    <Flex align="center" gap={2}>
                        <Box width="8px" height="8px" bg="#879037" rounded="full" />
                        <Text color="#475467" fontSize="15px">No obligation</Text>
                    </Flex>
                    <Flex align="center" gap={2}>
                        <Box width="8px" height="8px" bg="#121212" rounded="full" />
                        <Text color="#475467" fontSize="15px">Secure client portal</Text>
                    </Flex>
                </Flex>
            </Flex>

            {/* Context: Revenue Band */}
            <Flex direction="column" gap={4}>
                <Text as="h2" fontSize={{ base: "22px", md: "28px" }} fontWeight="500" className="font-playfair" color="#121212">
                    Not sure which conversation to book?
                </Text>
                <Text color="#667085" fontSize={{ base: "15px", md: "17px" }} lineHeight="1.65" maxW="640px">
                    Use this as a quick guide. Most organizations start with a Capabilities Conversation and move to a Funding Readiness Discovery once they have a specific grant goal in mind.
                </Text>
                <Flex gap={3} wrap="wrap">
                    {revenueBands.map((band) => (
                        <Box
                            key={band}
                            px={3}
                            py={2}
                            border="1px solid #EAECF0"
                            rounded="8px"
                            bg="#FFFFFF"
                            fontSize="13px"
                            color="#475467"
                            fontWeight="500"
                        >
                            {band}
                        </Box>
                    ))}
                </Flex>
                <Text color="#98A2B3" fontSize="13px">
                    All organization sizes welcome. Grant strategy scales to your budget and goals.
                </Text>
            </Flex>

            {/* Meeting Type Cards */}
            <Flex direction="column" gap={6}>
                <Text as="h2" fontSize={{ base: "22px", md: "28px" }} fontWeight="500" className="font-playfair" color="#121212">
                    Choose your conversation
                </Text>
                <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={5}>
                    {meetingTypes.map((meeting) => (
                        <Box
                            key={meeting.label}
                            border={meeting.featured ? `2px solid ${meeting.accent}` : "1px solid #EAECF0"}
                            rounded="20px"
                            p={6}
                            bg={meeting.featured ? "#121212" : "#FFFFFF"}
                            color={meeting.featured ? "#FFFFFF" : "#121212"}
                            display="flex"
                            flexDirection="column"
                            gap={4}
                        >
                            <Box>
                                <Box
                                    display="inline-block"
                                    px={2}
                                    py={1}
                                    bg={meeting.accent}
                                    color="#FFFFFF"
                                    fontSize="10px"
                                    fontWeight="700"
                                    rounded="4px"
                                    letterSpacing="0.08em"
                                    mb={3}
                                >
                                    {meeting.label}
                                </Box>
                                <Text fontSize="20px" fontWeight="600" className="font-playfair" mb={1}>
                                    {meeting.title}
                                </Text>
                                <Text fontSize="12px" color={meeting.featured ? "#F49953" : "#98A2B3"} fontWeight="600" mb={3}>
                                    Best for: {meeting.best}
                                </Text>
                            </Box>
                            <Text fontSize="14px" color={meeting.featured ? "#D0D5DD" : "#475467"} lineHeight="1.65" flex={1}>
                                {meeting.description}
                            </Text>
                            <Button
                                as="a"
                                href={DUBSADO_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                bg={meeting.featured ? "#F49953" : meeting.accent}
                                color="#FFFFFF"
                                fontWeight="700"
                                rounded="8px"
                                _hover={{ opacity: 0.9 }}
                                mt="auto"
                            >
                                Book This Conversation
                            </Button>
                        </Box>
                    ))}
                </Grid>
            </Flex>

            {/* Contact Info */}
            <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={6}>
                <Box border="1px solid #EAECF0" rounded="20px" p={6} bg="#FEF4EC">
                    <Text fontWeight="700" color="#121212" fontSize="17px" mb={2}>Direct Contact</Text>
                    <Text color="#667085" fontSize="15px" lineHeight="1.7">
                        For existing clients, compliance questions, or partnership inquiries outside the standard intake process, reach us at:
                    </Text>
                    <Text color="#121212" fontWeight="600" fontSize="16px" mt={3}>
                        info@rischerconsulting.com
                    </Text>
                </Box>
                <Box border="1px solid #EAECF0" rounded="20px" p={6} bg="#FFFFFF">
                    <Text fontWeight="700" color="#121212" fontSize="17px" mb={2}>Response Commitment</Text>
                    <Flex direction="column" gap={2} mt={1}>
                        {[
                            "New inquiry bookings confirmed within 1 business day",
                            "Capability conversations: 30 minutes, no preparation required",
                            "All conversations are confidential and non-binding",
                            "Follow-up proposal or scope of work provided within 5 business days",
                        ].map((item) => (
                            <Flex key={item} align="flex-start" gap={3}>
                                <Box mt="6px" width="6px" height="6px" minW="6px" bg="#F49953" rounded="full" />
                                <Text fontSize="14px" color="#475467">{item}</Text>
                            </Flex>
                        ))}
                    </Flex>
                </Box>
            </Grid>
        </Flex>
    );
}

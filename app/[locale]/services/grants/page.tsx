import { Metadata } from "next";
import { Box, Button, Flex, Grid, SimpleGrid, Text } from "@chakra-ui/react";
import ThreeWaysToStart from "@/components/layout/ThreeWaysToStart";

export const metadata: Metadata = {
    title: "Grant Writing & Management | Rischer Consulting",
    description: "Federal, state, and foundation grant writing and compliance management for education, workforce, nonprofit, and community health organizations.",
    keywords: ["grant writing", "grant management", "federal grants", "proposal writing", "compliance management"],
};

const DUBSADO_LINK = "https://portal.rischerconsulting.com/public/appointment-scheduler/67c873f6bb8b19003a64d1d4/schedule";

export default function GrantsPage() {
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
                    GRANT WRITING & MANAGEMENT
                </Box>
                <Text
                    as="h1"
                    fontSize={{ base: "36px", lg: "60px" }}
                    color="#121212"
                    fontWeight="500"
                    className="font-playfair"
                    lineHeight="1.15"
                >
                    $30M+ secured. We know what reviewers want.
                </Text>
                <Text color="#667085" fontSize={{ base: "17px", md: "20px" }} lineHeight="1.7">
                    Rischer Consulting's principal is a Federal Grant Peer Reviewer for both the U.S. Department of Education and U.S. Department of Labor. Every proposal we write is reviewed against the same standards federal reviewers apply — because our lead consultant is one.
                </Text>
            </Flex>

            {/* Deadline Callout */}
            <Box
                border="2px solid #F49953"
                rounded="16px"
                p={6}
                bg="#FEF4EC"
            >
                <Flex align="flex-start" gap={4}>
                    <Box width="4px" height="100%" minH="40px" bg="#F49953" rounded="full" flexShrink={0} />
                    <Flex direction="column" gap={2}>
                        <Text fontWeight="700" color="#121212" fontSize="17px">Federal Opportunity Notices move fast</Text>
                        <Text color="#667085" fontSize="15px" lineHeight="1.65">
                            Federal grant deadlines are typically announced 4–8 weeks before submission. By the time a Funding Opportunity Announcement (FOA) is published, organizations without a proposal infrastructure in place have already lost weeks of lead time. <strong>Don't wait for the announcement — build your readiness now.</strong>
                        </Text>
                        <Box mt={2}>
                            <Button
                                as="a"
                                href={DUBSADO_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                bg="#F49953"
                                color="#FFFFFF"
                                fontWeight="700"
                                size="sm"
                                rounded="8px"
                                _hover={{ opacity: 0.9 }}
                            >
                                Start Your Funding Readiness Audit
                            </Button>
                        </Box>
                    </Flex>
                </Flex>
            </Box>

            {/* Who This Is For */}
            <Flex direction="column" gap={6}>
                <Text as="h2" fontSize={{ base: "28px", md: "40px" }} fontWeight="500" className="font-playfair" color="#121212">
                    Who This Is For
                </Text>
                <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={4}>
                    {[
                        { title: "K-12 Districts & Schools", detail: "Title I, Title II, ESSER, 21st CCLC, and competitive DOE programs" },
                        { title: "Workforce Organizations", detail: "WIOA, DOL apprenticeship, and sector-based workforce training grants" },
                        { title: "Nonprofits & CBOs", detail: "Foundation, federal, and state grants for capacity-building and programming" },
                        { title: "Higher Education", detail: "TRIO, GEAR UP, HBCU, HSI, and institutional capacity grants" },
                        { title: "Faith-Based Organizations", detail: "Mission-aligned program grants and start-up funding for community initiatives" },
                        { title: "Community Health Centers", detail: "HRSA, HHS, and foundation grants for health equity programs" },
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
                            Our grant writing practice begins with a thorough assessment — of your organization's readiness, your competitive position, and the funding landscape. We don't write proposals in a vacuum. We build the strategic infrastructure that makes every submission structurally competitive before a single word is drafted.
                        </Text>
                        <Text color="#475467" fontSize={{ base: "16px", md: "18px" }} lineHeight="1.7">
                            From needs assessments and logic models to budget narratives and compliance reviews, Rischer Consulting manages the full proposal lifecycle — from FOA release to post-award audit support. Every engagement includes a review against federal peer reviewer standards.
                        </Text>
                    </Flex>
                    <Flex direction="column" gap={3}>
                        {[
                            "Federal, state, and local grant applications",
                            "Foundation and corporate grant proposals",
                            "Needs assessment and organizational readiness scoring",
                            "Logic model and theory-of-change development",
                            "Budget narrative and compliance review",
                            "Post-award grant management and reporting",
                            "Audit liaison and program compliance support",
                            "Grant training and internal capacity building",
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
                        { item: "A submitted, reviewer-ready proposal", detail: "Written to federal peer reviewer standards, not just funder guidelines." },
                        { item: "A funding landscape map", detail: "Priority funders ranked by fit, deadline, and competitive advantage." },
                        { item: "A reusable organizational narrative", detail: "Needs assessment, logic model, and program description you can adapt for future grants." },
                        { item: "Budget narrative + compliance checklist", detail: "Documented and ready for auditor review from day one of the award." },
                        { item: "Post-award support roadmap", detail: "Reporting schedule, audit prep, and grant management protocols." },
                        { item: "A stronger pipeline", detail: "Each engagement builds institutional knowledge that makes the next proposal faster and more competitive." },
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
                    Ready to pursue your next competitive grant?
                </Text>
                <Text color="#667085" fontSize={{ base: "15px", md: "17px" }} maxW="480px" lineHeight="1.65">
                    Schedule a capabilities conversation to find the right engagement for your organization's timeline and scope.
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

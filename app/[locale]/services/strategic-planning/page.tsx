import { Metadata } from "next";
import { Box, Button, Flex, Grid, SimpleGrid, Text } from "@chakra-ui/react";
import ThreeWaysToStart from "@/components/layout/ThreeWaysToStart";

export const metadata: Metadata = {
    title: "Strategic Planning | Rischer Consulting",
    description: "Strategic planning facilitation, instructional design, and organizational roadmapping for nonprofits, government agencies, and social-sector organizations.",
    keywords: ["strategic planning", "instructional design", "nonprofit strategy", "organizational planning"],
};

const DUBSADO_LINK = "https://portal.rischerconsulting.com/public/appointment-scheduler/67c873f6bb8b19003a64d1d4/schedule";

export default function StrategicPlanningPage() {
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
                    STRATEGIC PLANNING & INSTRUCTIONAL DESIGN
                </Box>
                <Text
                    as="h1"
                    fontSize={{ base: "36px", lg: "60px" }}
                    color="#121212"
                    fontWeight="500"
                    className="font-playfair"
                    lineHeight="1.15"
                >
                    Strategy that funders want to fund
                </Text>
                <Text color="#667085" fontSize={{ base: "17px", md: "20px" }} lineHeight="1.7">
                    Organizations with clear strategic plans are more competitive in every grant market. Rischer Consulting's strategic planning and instructional design services build the organizational clarity and evidence base that make future funding applications inevitable.
                </Text>
            </Flex>

            {/* Who This Is For */}
            <Flex direction="column" gap={6}>
                <Text as="h2" fontSize={{ base: "28px", md: "40px" }} fontWeight="500" className="font-playfair" color="#121212">
                    Who This Is For
                </Text>
                <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={4}>
                    {[
                        { title: "Nonprofits at an Inflection Point", detail: "Organizations ready to grow, pivot, or plan for leadership succession." },
                        { title: "Government Agencies", detail: "Public-sector teams building cross-departmental alignment and strategic roadmaps." },
                        { title: "Schools & Districts", detail: "Educational institutions developing multi-year improvement plans aligned to equity outcomes." },
                        { title: "Workforce Programs", detail: "Organizations designing instructional frameworks for sector-based training curricula." },
                        { title: "Faith-Based Organizations", detail: "Ministries and faith communities building strategic direction for expanded community impact." },
                        { title: "Leadership Teams Pre-Grant", detail: "Organizations that need a strategic plan as a prerequisite for major grant applications." },
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
                            Rischer Consulting approaches strategic planning as a funding-readiness exercise. A well-facilitated strategic plan doesn't just clarify direction — it produces the mission statement, theory of change, program logic, and data infrastructure that underpin every major grant application.
                        </Text>
                        <Text color="#475467" fontSize={{ base: "16px", md: "18px" }} lineHeight="1.7">
                            Our instructional design practice specializes in culturally responsive, equity-centered curricula for workforce development, leadership programs, and educational initiatives. We design with both learner outcomes and grant-reporting requirements in mind from day one.
                        </Text>
                    </Flex>
                    <Flex direction="column" gap={3}>
                        {[
                            "Multi-year strategic plan facilitation",
                            "Mission, vision, and values alignment workshops",
                            "Theory of change and logic model development",
                            "Environmental scan and competitive landscape analysis",
                            "KPI framework and performance measurement design",
                            "Culturally responsive curriculum and instructional design",
                            "Board and leadership retreat facilitation",
                            "Post-plan implementation support and accountability check-ins",
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
                        { item: "A board-approved strategic plan", detail: "3–5 year roadmap with clear goals, strategies, KPIs, and accountability owners." },
                        { item: "A grant-ready theory of change", detail: "Logic model and narrative that meets federal and foundation funder requirements." },
                        { item: "Mission/vision/values documentation", detail: "Articulated organizational identity that anchors every future grant proposal." },
                        { item: "A performance measurement framework", detail: "KPIs, data sources, and reporting schedules your team can execute independently." },
                        { item: "Instructional curriculum (if applicable)", detail: "Culturally responsive, evidence-based training materials ready for funder review." },
                        { item: "A stronger proposal asset library", detail: "Every strategic planning deliverable doubles as a reusable grant writing asset." },
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
                    Ready to build a strategy that funders want to invest in?
                </Text>
                <Text color="#667085" fontSize={{ base: "15px", md: "17px" }} maxW="480px" lineHeight="1.65">
                    Day-rate facilitation available for board retreats, leadership cohorts, and strategic planning intensives.
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

import { Metadata } from "next";
import { Box, Button, Flex, Grid, SimpleGrid, Text } from "@chakra-ui/react";
import ThreeWaysToStart from "@/components/layout/ThreeWaysToStart";

export const metadata: Metadata = {
    title: "Team Training & Development | Rischer Consulting",
    description: "Customizable team training programs that build high-performing, results-driven teams for nonprofits, government agencies, and social-sector organizations.",
    keywords: ["team training", "workforce development", "leadership training", "skill building workshops"],
};

const DUBSADO_LINK = "https://portal.rischerconsulting.com/public/appointment-scheduler/67c873f6bb8b19003a64d1d4/schedule";

export default function TeamTrainingPage() {
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
                    TEAM TRAINING & DEVELOPMENT
                </Box>
                <Text
                    as="h1"
                    fontSize={{ base: "36px", lg: "60px" }}
                    color="#121212"
                    fontWeight="500"
                    className="font-playfair"
                    lineHeight="1.15"
                >
                    100K+ professionals trained. Yours could be next.
                </Text>
                <Text color="#667085" fontSize={{ base: "17px", md: "20px" }} lineHeight="1.7">
                    The heartbeat of any funded organization is its people. Rischer Consulting's team training programs build the skills, trust, and systems that make high-performing teams — and help them sustain their impact through leadership transitions, growth, and change.
                </Text>
            </Flex>

            {/* Who This Is For */}
            <Flex direction="column" gap={6}>
                <Text as="h2" fontSize={{ base: "28px", md: "40px" }} fontWeight="500" className="font-playfair" color="#121212">
                    Who This Is For
                </Text>
                <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={4}>
                    {[
                        { title: "Nonprofit Leadership Teams", detail: "Staff at all levels who need shared frameworks, clear roles, and stronger collaboration." },
                        { title: "Government & Public Sector Teams", detail: "Agencies building internal capacity to meet compliance, equity, and performance mandates." },
                        { title: "Workforce Programs", detail: "Organizations building job-readiness, professional development, and career pathway curricula." },
                        { title: "School & District Staff", detail: "Educators, administrators, and instructional coaches developing culturally responsive skills." },
                        { title: "Board Members", detail: "Governance teams that need practical frameworks for fiduciary responsibility and strategic oversight." },
                        { title: "New Leaders", detail: "Cohorts of emerging managers and directors ready to level up their leadership toolkit." },
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
                            Rischer Consulting offers customizable training programs designed for different leadership levels and team dynamics. Our interactive approach combines skill-building workshops, evidence-based frameworks, and practical application to produce lasting behavioral change — not just one-day inspiration.
                        </Text>
                        <Text color="#475467" fontSize={{ base: "16px", md: "18px" }} lineHeight="1.7">
                            We specialize in training programs that meet grant-funder expectations: documenting participant outcomes, tracking completion rates, and producing the evaluation data required for federal compliance and foundation reporting. Every training engagement is designed to be grantable.
                        </Text>
                    </Flex>
                    <Flex direction="column" gap={3}>
                        {[
                            "Custom skill-building workshops (in-person and virtual)",
                            "The 5 Dysfunctions of a Team facilitation",
                            "Building trust and commitment cohort training",
                            "Critical thinking and GAPS analysis workshops",
                            "Culturally responsive instructional design",
                            "Leadership pipeline and succession planning",
                            "New leader onboarding and transition support",
                            "Grant-aligned training program documentation",
                        ].map((item) => (
                            <Flex key={item} align="flex-start" gap={3}>
                                <Box mt="6px" width="6px" height="6px" minW="6px" bg="#121212" rounded="full" />
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
                        { item: "A custom training curriculum", detail: "Designed for your team's level, context, and goals — not repurposed from an off-the-shelf program." },
                        { item: "Participant outcome documentation", detail: "Pre/post assessments and completion data ready for funder and board reporting." },
                        { item: "Stronger team cohesion", detail: "Shared language, frameworks, and working agreements that stick after the training ends." },
                        { item: "A grantable training design", detail: "Documentation and logic model framing that supports future grant applications for training programs." },
                        { item: "Ongoing learning resources", detail: "Toolkits, workbooks, and reference materials teams can use after the engagement closes." },
                        { item: "Follow-up coaching options", detail: "Graduated support for individuals or teams who need deeper development beyond the workshop." },
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
                    Ready to build a training program that actually changes behavior?
                </Text>
                <Text color="#667085" fontSize={{ base: "15px", md: "17px" }} maxW="480px" lineHeight="1.65">
                    Day-rate facilitation is available for board retreats, leadership cohorts, and strategic planning intensives.
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
                    Schedule a Capabilities Conversation
                </Button>
            </Flex>
        </Flex>
    );
}

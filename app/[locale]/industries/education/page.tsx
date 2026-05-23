import { Metadata } from "next";
import { Box, Button, Flex, Grid, SimpleGrid, Text } from "@chakra-ui/react";
import ThreeWaysToStart from "@/components/layout/ThreeWaysToStart";

export const metadata: Metadata = {
    title: "Education & Youth Development | Rischer Consulting",
    description: "Federal and foundation grant strategy for K-12 districts, higher education institutions, charter networks, and youth-serving organizations.",
};

const DUBSADO_LINK = "https://portal.rischerconsulting.com/public/appointment-scheduler/67c873f6bb8b19003a64d1d4/schedule";

export default function EducationPage() {
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
                    EDUCATION & YOUTH DEVELOPMENT
                </Box>
                <Text
                    as="h1"
                    fontSize={{ base: "36px", lg: "60px" }}
                    color="#121212"
                    fontWeight="500"
                    className="font-playfair"
                    lineHeight="1.15"
                >
                    Grants that move education forward
                </Text>
                <Text color="#667085" fontSize={{ base: "17px", md: "20px" }} lineHeight="1.7">
                    From Title I to GEAR UP to 21st CCLC, Rischer Consulting brings federal-reviewer-level expertise to every education grant engagement. We know what U.S. Department of Education reviewers look for — because our principal is one.
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
                            Education funding is among the most competitive in the federal grant landscape. Rischer Consulting has built its practice on this complexity — specializing in educational programming, workforce pipelines, STEM initiatives, and youth development grants since 2015.
                        </Text>
                        <Text color="#475467" fontSize={{ base: "16px", md: "18px" }} lineHeight="1.7">
                            We serve K-12 districts, charter management organizations, higher education institutions, out-of-school-time programs, and youth-serving nonprofits. Every proposal is reviewed against the standards federal peer reviewers actually apply — not just funder guidelines.
                        </Text>
                    </Flex>
                    <Flex direction="column" gap={3}>
                        {[
                            "Title I, Title II, Title III program grants",
                            "21st Century Community Learning Centers (21st CCLC)",
                            "GEAR UP and TRIO program proposals",
                            "Higher education institutional capacity grants",
                            "Charter school facility and program grants",
                            "STEM education and afterschool program funding",
                            "Youth workforce pipeline and transition grants",
                            "Foundation proposals for educational equity initiatives",
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
                        <Text fontSize="40px" fontWeight="700" color="#879037" className="font-playfair">$1.5M+</Text>
                        <Text fontSize="14px" color="#667085" mt={1}>Documented education grants secured</Text>
                    </Box>
                    <Box bg="#FEF4EC" rounded="20px" p={6} textAlign="center">
                        <Text fontSize="40px" fontWeight="700" color="#879037" className="font-playfair">10+</Text>
                        <Text fontSize="14px" color="#667085" mt={1}>Years in education grant markets</Text>
                    </Box>
                    <Box bg="#FEF4EC" rounded="20px" p={6} textAlign="center">
                        <Text fontSize="40px" fontWeight="700" color="#879037" className="font-playfair">DOE</Text>
                        <Text fontSize="14px" color="#667085" mt={1}>Federal peer reviewer credential</Text>
                    </Box>
                </Grid>
            </Flex>

            {/* CTA */}
            <Box border="1px solid #EAECF0" rounded="24px" p={{ base: 8, md: 12 }} bg="#FEF4EC">
                <Text fontSize={{ base: "22px", md: "32px" }} fontWeight="500" className="font-playfair" color="#121212" mb={3} maxW="560px">
                    Ready to pursue your next education grant?
                </Text>
                <Text color="#667085" fontSize={{ base: "15px", md: "17px" }} mb={6} maxW="500px" lineHeight="1.65">
                    Federal education deadlines move fast. Let's assess your funding landscape and build a competitive proposal before the window closes.
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
                    Schedule a Funding Readiness Discovery
                </Button>
            </Box>

            {/* ThreeWaysToStart */}
            <ThreeWaysToStart />
        </Flex>
    );
}

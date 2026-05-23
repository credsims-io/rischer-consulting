import { Metadata } from "next";
import { Box, Button, Flex, Grid, Text } from "@chakra-ui/react";
import ThreeWaysToStart from "@/components/layout/ThreeWaysToStart";

export const metadata: Metadata = {
    title: "Industries We Serve | Rischer Consulting",
    description: "Grant strategy and organizational capacity across education, workforce development, international development, nonprofit, and community health sectors.",
};

const DUBSADO_LINK = "https://portal.rischerconsulting.com/public/appointment-scheduler/67c873f6bb8b19003a64d1d4/schedule";

const industries = [
    {
        label: "EDUCATION",
        name: "Education & Youth Development",
        description: "Federal and foundation grants for K-12 districts, higher education, charter networks, and youth-serving organizations. From Title I to 21st CCLC to GEAR UP — we know what DOE reviewers look for.",
        href: "/industries/education",
        accent: "#879037",
        grants: "$1.5M+ documented",
    },
    {
        label: "WORKFORCE",
        name: "Workforce Development",
        description: "DOL WIOA, apprenticeship programs, sector-based workforce grants for community colleges, workforce boards, and community-based organizations serving job-seekers.",
        href: "/industries/workforce",
        accent: "#121212",
        grants: "$988K+ documented",
    },
    {
        label: "INTERNATIONAL",
        name: "International Development",
        description: "USAID, State Department, and foundation grants for organizations operating in Sub-Saharan Africa, Latin America, and other high-need geographies. Capacity building for international NGOs and diaspora-led organizations.",
        href: "/industries/international",
        accent: "#F49953",
        grants: "Multi-country portfolio",
    },
    {
        label: "NONPROFIT",
        name: "Nonprofit & Capacity Building",
        description: "Faith-based organizations, community development corporations, and general nonprofits. We help organizations move from grant-dependent to grant-ready — with systems that scale.",
        href: "/industries/nonprofit",
        accent: "#879037",
        grants: "$1.1M+ operations grants",
    },
    {
        label: "EMERGING",
        name: "Community Health Networks",
        description: "Rischer Consulting's newest practice area — bringing federal grant rigor and equity-centered strategy to community health centers navigating the most volatile funding environment in 30 years.",
        href: "/industries/community-health",
        accent: "#121212",
        grants: "$50B RHTP opportunity",
        emerging: true,
    },
];

export default function IndustriesPage() {
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
                    fontSize={{ base: "36px", lg: "60px" }}
                    color="#121212"
                    fontWeight="500"
                    className="font-playfair"
                >
                    Industries We Serve
                </Text>
                <Text color="#667085" fontSize={{ base: "17px", md: "20px" }} lineHeight="1.7">
                    $29M+ in competitive grants stewarded across five sectors since 2015. Every industry we enter, we enter with deep domain knowledge and a federal reviewer's understanding of what wins.
                </Text>
            </Flex>

            {/* Industry Cards */}
            <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={6}>
                {industries.map((ind) => (
                    <Box
                        key={ind.label}
                        border={ind.emerging ? `2px solid ${ind.accent}` : "1px solid #EAECF0"}
                        rounded="20px"
                        p={6}
                        bg={ind.emerging ? "#121212" : "#FFFFFF"}
                        color={ind.emerging ? "#FFFFFF" : "#121212"}
                        display="flex"
                        flexDirection="column"
                        gap={4}
                        _hover={{ shadow: "md" }}
                        transition="box-shadow 0.15s"
                    >
                        <Box>
                            <Box
                                display="inline-block"
                                px={2}
                                py={1}
                                bg={ind.accent}
                                color="#FFFFFF"
                                fontSize="10px"
                                fontWeight="700"
                                rounded="4px"
                                letterSpacing="0.08em"
                                mb={3}
                            >
                                {ind.label}
                            </Box>
                            <Text fontSize="20px" fontWeight="600" className="font-playfair" mb={2}>
                                {ind.name}
                            </Text>
                            <Text fontSize="13px" color={ind.emerging ? "#F49953" : ind.accent} fontWeight="700">
                                {ind.grants}
                            </Text>
                        </Box>
                        <Text fontSize="14px" color={ind.emerging ? "#D0D5DD" : "#475467"} lineHeight="1.65" flex={1}>
                            {ind.description}
                        </Text>
                        <Button
                            as="a"
                            href={ind.href}
                            bg={ind.emerging ? "#F49953" : ind.accent}
                            color="#FFFFFF"
                            fontWeight="700"
                            rounded="8px"
                            size="sm"
                            _hover={{ opacity: 0.9 }}
                            mt="auto"
                        >
                            Learn More
                        </Button>
                    </Box>
                ))}
            </Grid>

            {/* ThreeWaysToStart */}
            <ThreeWaysToStart />
        </Flex>
    );
}

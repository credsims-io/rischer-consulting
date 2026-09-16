import { Metadata } from "next";
import { Box, Button, Flex, Grid, Text } from "@chakra-ui/react";
import ThreeWaysToStart from "@/components/layout/ThreeWaysToStart";

export const metadata: Metadata = {
    title: "The Color of Opportunity™ | Rischer Consulting",
    description: "Rischer Consulting's culturally responsive framework for building businesses and the workforce that powers them — designed for women, women of color, and economically disadvantaged entrepreneurs.",
};

const DUBSADO_LINK = "https://portal.rischerconsulting.com/public/appointment-scheduler/67c873f6bb8b19003a64d1d4/schedule";

const pillars = [
    {
        name: "Business Acumen",
        color: "#879037",
        description: "Real, practical business fundamentals — financial literacy, operations, and growth strategy — taught in a way that's grounded in the lived realities of the entrepreneurs building them.",
    },
    {
        name: "Mentorship",
        color: "#F49953",
        description: "Direct access to experienced guides who share not just advice, but the relationships and know-how that traditional programs rarely extend to entrepreneurs outside the mainstream pipeline.",
    },
    {
        name: "Experiential Learning",
        color: "#121212",
        description: "Learning by doing — hands-on workforce and business-building experiences that build confidence and capability alongside credentials.",
    },
];

const audience = [
    "Women entrepreneurs",
    "Women of color",
    "Economically disadvantaged entrepreneurs",
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
                    bg="#879037"
                    color="#FFFFFF"
                    fontSize="12px"
                    fontWeight="700"
                    rounded="4px"
                    letterSpacing="0.1em"
                    width="fit-content"
                >
                    OUR FRAMEWORK
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
                <Text color="#667085" fontSize={{ base: "20px", md: "24px" }} fontWeight="600" lineHeight="1.5" maxW="760px">
                    Culturally responsive business and workforce development, built for the people traditional models leave out.
                </Text>
                <Text color="#667085" fontSize={{ base: "17px", md: "20px" }} lineHeight="1.7" maxW="720px">
                    The Color of Opportunity™ is Rischer Consulting&apos;s culturally responsive framework for building businesses and the workforce that powers them. Designed for women, women of color, and economically disadvantaged entrepreneurs, it pairs real business acumen with mentorship and experiential learning — so opportunity isn&apos;t determined by race, gender, or zip code.
                </Text>
            </Flex>

            {/* Pillars */}
            <Flex direction="column" gap={8}>
                <Text
                    as="h2"
                    fontSize={{ base: "24px", md: "32px" }}
                    fontWeight="500"
                    className="font-playfair"
                    color="#121212"
                >
                    Built on three pillars
                </Text>
                <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6}>
                    {pillars.map((pillar) => (
                        <Box
                            key={pillar.name}
                            border="1px solid #EAECF0"
                            rounded="20px"
                            p={{ base: 6, md: 8 }}
                            bg="#FFFFFF"
                        >
                            <Box width="44px" height="44px" bg={pillar.color} rounded="12px" mb={4} />
                            <Text fontSize="22px" fontWeight="600" className="font-playfair" color="#121212" mb={3}>
                                {pillar.name}
                            </Text>
                            <Text fontSize={{ base: "15px", md: "16px" }} color="#475467" lineHeight="1.7">
                                {pillar.description}
                            </Text>
                        </Box>
                    ))}
                </Grid>
            </Flex>

            {/* Who it's for */}
            <Box bg="#121212" rounded="24px" p={{ base: 8, md: 12 }}>
                <Text fontSize="12px" color="#F49953" fontWeight="700" letterSpacing="0.15em" textTransform="uppercase" mb={4}>
                    Who It&apos;s For
                </Text>
                <Text
                    fontSize={{ base: "22px", md: "32px" }}
                    fontWeight="500"
                    className="font-playfair"
                    color="#FFFFFF"
                    mb={6}
                    maxW="640px"
                >
                    Opportunity shouldn&apos;t be determined by race, gender, or zip code.
                </Text>
                <Flex gap={3} wrap="wrap" mb={8}>
                    {audience.map((tag) => (
                        <Box
                            key={tag}
                            px={4}
                            py={2}
                            bg="rgba(255,255,255,0.08)"
                            border="1px solid rgba(255,255,255,0.12)"
                            color="#FFFFFF"
                            fontSize="14px"
                            fontWeight="600"
                            rounded="20px"
                        >
                            {tag}
                        </Box>
                    ))}
                </Flex>
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
                    Bring The Color of Opportunity™ to Your Community
                </Button>
            </Box>

            {/* ThreeWaysToStart */}
            <ThreeWaysToStart />
        </Flex>
    );
}

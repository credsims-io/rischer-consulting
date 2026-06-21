import { Metadata } from "next";
import { Box, Button, Flex, Grid, Text } from "@chakra-ui/react";

export const metadata: Metadata = {
    title: "Insights | Rischer Consulting",
    description: "Grant strategy insights, funding landscape analysis, and capacity-building resources from the Rischer Consulting team.",
};

const DUBSADO_LINK = "https://portal.rischerconsulting.com/public/appointment-scheduler/67c873f6bb8b19003a64d1d4/schedule";

const newsletters = [
    { month: "May 2026", url: "https://mailchi.mp/6f6ba73ec487/are-you-grant-ready-for-8339441" },
    { month: "April 2026", url: "https://mailchi.mp/21023b40c3b4/are-you-grant-ready-for-8339001" },
    { month: "March 2026", url: "https://mailchi.mp/b5708dafdcdc/are-you-grant-ready-for-8338621" },
    { month: "February 2026", url: "https://mailchi.mp/26c9dc087ff5/are-you-grant-ready-for-8337937" },
    { month: "January 2026", url: "https://mailchi.mp/a11d4eb68465/are-you-grant-ready-for-8337734" },
    { month: "December 2025", url: "https://mailchi.mp/4beb7e3ff118/are-you-grant-ready-for-8337049" },
    { month: "November 2025", url: "https://mailchi.mp/6fa37438dbc5/are-you-grant-ready-for-8336638" },
];

export default function InsightsPage() {
    return (
        <Flex
            direction="column"
            px={{ base: "10px", md: "80px", lg: "115px", xl: "128px", "2xl": "10%" }}
            paddingY={{ base: 8, md: 4 }}
            gap={{ base: 8, md: "60px" }}
            mb={6}
        >
            <Flex direction="column" gap={4} maxW="760px">
                <Text
                    as="h1"
                    fontSize={{ base: "36px", lg: "60px" }}
                    color="#121212"
                    fontWeight="500"
                    className="font-playfair"
                >
                    Insights
                </Text>
                <Text color="#667085" fontSize={{ base: "17px", md: "20px" }} lineHeight="1.7">
                    Grant strategy perspectives, funding landscape analysis, and capacity-building resources from the Rischer Consulting team.
                </Text>
            </Flex>

            {/* Newsletter Archive */}
            <Flex direction="column" gap={6}>
                <Flex direction="column" gap={1}>
                    <Text fontSize="12px" color="#F49953" fontWeight="700" letterSpacing="0.15em" textTransform="uppercase">
                        Newsletter Archive
                    </Text>
                    <Text fontSize={{ base: "24px", md: "32px" }} fontWeight="500" className="font-playfair" color="#121212">
                        Are You Grant Ready?
                    </Text>
                    <Text color="#667085" fontSize={{ base: "15px", md: "17px" }} lineHeight="1.65" maxW="560px">
                        Monthly insights on grant strategy, sector funding trends, and organizational capacity building — straight from our principal's desk.
                    </Text>
                </Flex>

                <Grid templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={4}>
                    {newsletters.map((item) => (
                        <Box
                            key={item.month}
                            as="a"
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            border="1px solid #EAECF0"
                            rounded="20px"
                            p={6}
                            bg="#FFFFFF"
                            display="flex"
                            flexDirection="column"
                            gap={3}
                            _hover={{ borderColor: "#F49953", shadow: "sm", textDecoration: "none" }}
                            transition="all 0.15s"
                        >
                            <Box
                                display="inline-block"
                                px={2}
                                py={1}
                                bg="#F5F7E9"
                                color="#879037"
                                fontSize="11px"
                                fontWeight="700"
                                rounded="4px"
                                letterSpacing="0.08em"
                                width="fit-content"
                            >
                                NEWSLETTER
                            </Box>
                            <Text fontSize="20px" fontWeight="600" color="#121212" className="font-playfair">
                                {item.month}
                            </Text>
                            <Text fontSize="13px" color="#F49953" fontWeight="700">
                                Read →
                            </Text>
                        </Box>
                    ))}
                </Grid>
            </Flex>

            {/* CTA */}
            <Box border="1px solid #EAECF0" rounded="24px" p={{ base: 8, md: 12 }} bg="#FEF4EC">
                <Text fontSize={{ base: "22px", md: "28px" }} fontWeight="500" className="font-playfair" color="#121212" mb={3}>
                    Ready to put these insights to work?
                </Text>
                <Text color="#667085" fontSize={{ base: "15px", md: "17px" }} lineHeight="1.65" mb={6}>
                    Schedule a capabilities conversation to see how Rischer Consulting can move your organization's funding strategy forward.
                </Text>
                <Button
                    as="a"
                    href={DUBSADO_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    bg="#F49953"
                    color="#FFFFFF"
                    fontWeight="700"
                    rounded="8px"
                    _hover={{ opacity: 0.9 }}
                >
                    Schedule a Conversation
                </Button>
            </Box>
        </Flex>
    );
}

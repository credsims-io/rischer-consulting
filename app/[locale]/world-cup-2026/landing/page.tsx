import { Metadata } from "next";
import NextLink from "next/link";
import {
    Badge,
    Box,
    Button,
    Flex,
    Grid,
    GridItem,
    Stack,
    Text
} from "@chakra-ui/react";

const discoveryLink = "/world-cup-2026/discovery";
const metrics = [
    { label: "People impacted", value: "3M+" },
    { label: "Economic impact forecast", value: "$1B+" },
    { label: "Days until kickoff", value: "5 months" },
];

const preparednessList = [
    "Operational capacity to handle surges without sacrificing quality",
    "Cultural competency to serve diverse international guests authentically",
    "Strategic partnerships driving foot traffic directly to your business",
    "Grant funding secured to finance preparation investments",
    "Teams trained and confident under pressure",
    "Marketing that reaches international audiences before they arrive",
    "Sustainability plans that convert surge demand into long-term growth"
];

const services = [
    { title: "Strategic Assessment & Planning", detail: "Comprehensive capacity analysis and customized roadmap." },
    { title: "Funding & Grant Development", detail: "Secure capital to finance preparation – $28M+ secured since 2015." },
    { title: "Operational Capacity Building", detail: "Systems and processes for high-volume excellence." },
    { title: "Cultural Competency Training", detail: "Authentic service for diverse international visitors." },
    { title: "Marketing & Partnerships", detail: "Strategic positioning and partnerships that drive traffic." },
    { title: "Team Development & Coaching", detail: "Leadership capacity and team certification." },
    { title: "Sustainability Planning", detail: "Convert World Cup surge into years of prosperity." }
];

const tiers = [
    { name: "Foundation Accelerator", audience: "Small businesses & restaurants establishing capacity." },
    { name: "Growth Catalyst", audience: "Established businesses scaling impact and operations." },
    { name: "Impact Transformer", audience: "Maximum World Cup opportunity capture." }
];

const roiStats = [
    { label: "Restaurants", value: "300-500% revenue increase during peak periods" },
    { label: "Retail", value: "200-350% traffic & revenue increases" },
    { label: "Grant Funding", value: "$50K-$250K average secured" },
    { label: "Customer Retention", value: "15-25% convert to repeat customers" },
];

const deadlines = [
    { title: "World Cup kicks off", detail: "June 11, 2026" },
    { title: "Programs begin", detail: "January 15, 2026" },
    { title: "Enrollment closes", detail: "February 28, 2026" },
];

export const metadata: Metadata = {
    title: "FIFA World Cup 2026 Landing | Rischer Consulting",
    description: "Preview the immersive landing experience Rischer Consulting delivers for host cities and partners ahead of the 2026 FIFA World Cup.",
};

export default function LandingConceptPage() {
    return (
        <Flex
            direction="column"
            paddingX={{ base: 2, md: 4 }}
            paddingY={{ base: 8, md: 4 }}
            gap={16}
            mb={6}
        >
            <Flex
                direction="column"
                gap={8}
                px={{ base: "10px", md: "80px", lg: "115px", xl: "128px", "2xl": "10%" }}
            >
                <Box
                    bg="#121212"
                    color="#FFFFFF"
                    rounded="32px"
                    px={{ base: 6, md: 16 }}
                    py={{ base: 10, md: 16 }}
                    position="relative"
                    overflow="hidden"
                >
                    <Box
                        position="absolute"
                        inset="0"
                        bg="radial-gradient(circle at 10% 20%, rgba(244,153,83,0.35), transparent 55%)"
                    />
                    <Stack spacing={6} position="relative">
                        <Box>
                            <Text color="#F2F4FF" textTransform="uppercase" letterSpacing="0.3em" fontSize="sm">
                                FIFA World Cup 2026 · Dallas / Fort Worth
                            </Text>
                            <Text
                                as="h1"
                                fontSize={{ base: "40px", md: "72px" }}
                                fontWeight="500"
                                className="font-playfair"
                                lineHeight="1.1"
                                mt={3}
                            >
                                Is Your Business Ready for $1B+ in Economic Impact?
                            </Text>
                        </Box>
                        <Text fontSize={{ base: "16px", md: "20px" }} color="#EAECF0" maxW="720px">
                            3M+ people impacted. $1B+ economic impact. Millions in revenue potential for prepared businesses. World Cup starts June 11, 2026—just five months away.
                        </Text>
                        <Flex direction={{ base: "column", md: "row" }} gap={4}>
                            <Button
                                as={NextLink}
                                href={discoveryLink}
                                bg="#F49953"
                                color="#121212"
                                fontWeight="700"
                                size="lg"
                                _hover={{ bg: "#f68b3e" }}
                            >
                                Schedule Free Discovery Call
                            </Button>
                            <Button
                                as="a"
                                href="/assets/rischer-fifa-landing.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                variant="outline"
                                borderColor="rgba(255,255,255,0.24)"
                                color="#FFFFFF"
                                size="lg"
                                _hover={{ bg: "rgba(255,255,255,0.06)" }}
                            >
                                Download Concept Deck
                            </Button>
                        </Flex>
                        <Flex gap={6} wrap="wrap">
                            {metrics.map((metric) => (
                                <Box key={metric.label}>
                                    <Text fontSize="36px" fontWeight="600">{metric.value}</Text>
                                    <Text color="#D0D5DD">{metric.label}</Text>
                                </Box>
                            ))}
                        </Flex>
                    </Stack>
                </Box>
            </Flex>

            <Flex
                direction="column"
                gap={10}
                px={{ base: "10px", md: "80px", lg: "115px", xl: "128px", "2xl": "10%" }}
            >
                <Text as="h2" fontSize={{ base: "28px", md: "48px" }} fontWeight="500" className="font-playfair" color="#121212">
                    The Reality
                </Text>
                <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={6}>
                    <Box border="1px solid #EAECF0" rounded="20px" p={6} bg="#FFFFFF">
                        <Text fontSize="2xl" fontWeight="600" mb={2}>Most businesses are waiting.</Text>
                        <Text color="#475467">
                            They think they have time. They're wrong. World Cup starts June 11, 2026—just five months away. “Wait and see” is the riskiest strategy.
                        </Text>
                    </Box>
                    <Box border="1px solid #EAECF0" rounded="20px" p={6} bg="#FFFFFF">
                        <Text fontSize="2xl" fontWeight="600" mb={2}>Volume surges require real preparation.</Text>
                        <Text color="#475467">
                            Handling 300-500% volume increases while maintaining quality isn't luck—it's systems, training, capacity building, and strategic positioning.
                        </Text>
                    </Box>
                </Grid>
            </Flex>

            <Flex
                direction="column"
                gap={10}
                px={{ base: "10px", md: "80px", lg: "115px", xl: "128px", "2xl": "10%" }}
            >
                <Text as="h2" fontSize={{ base: "28px", md: "48px" }} fontWeight="500" className="font-playfair" color="#121212">
                    What Prepared Businesses Will Have
                </Text>
                <Stack spacing={4}>
                    {preparednessList.map((item) => (
                        <Flex key={item} align="flex-start" gap={3}>
                            <Badge colorScheme="orange" mt={1}>✓</Badge>
                            <Text color="#475467">{item}</Text>
                        </Flex>
                    ))}
                </Stack>
            </Flex>

            <Flex
                direction={{ base: "column", lg: "row" }}
                gap={10}
                px={{ base: "10px", md: "80px", lg: "115px", xl: "128px", "2xl": "10%" }}
            >
                <Box
                    flex="1"
                    bg="#FEF4EC"
                    rounded="24px"
                    p={{ base: 6, md: 10 }}
                >
                    <Text color="#C27A42" fontWeight="600" mb={3}>
                        Rischer Consulting's World Cup Readiness Services
                    </Text>
                    <Stack spacing={4} color="#475467">
                        {services.map((service) => (
                            <Box key={service.title}>
                                <Text fontWeight="600">{service.title}</Text>
                                <Text>{service.detail}</Text>
                            </Box>
                        ))}
                    </Stack>
                </Box>
                <Box
                    flex="1"
                    border="1px solid #EAECF0"
                    rounded="24px"
                    p={{ base: 6, md: 10 }}
                    bg="#FFFFFF"
                >
                    <Text color="#879037" fontWeight="600" mb={3}>
                        Three Service Tiers. One Goal: Your Success.
                    </Text>
                    <Stack spacing={4} color="#475467">
                        {tiers.map((tier) => (
                            <Box key={tier.name}>
                                <Text fontWeight="600">{tier.name}</Text>
                                <Text>{tier.audience}</Text>
                            </Box>
                        ))}
                    </Stack>
                    <Text mt={6} fontWeight="600">Expected ROI: 10x-15x over 12-18 months.</Text>
                </Box>
            </Flex>

            <Flex
                direction="column"
                gap={8}
                px={{ base: "10px", md: "80px", lg: "115px", xl: "128px", "2xl": "10%" }}
            >
                <Text as="h2" fontSize={{ base: "28px", md: "48px" }} fontWeight="500" className="font-playfair" color="#121212">
                    Expected Impact by the Numbers
                </Text>
                <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={6}>
                    {roiStats.map((stat) => (
                        <Box key={stat.label} border="1px solid #EAECF0" rounded="20px" p={6} bg="#F8F9F0">
                            <Text fontSize="lg" fontWeight="600">{stat.label}</Text>
                            <Text color="#475467">{stat.value}</Text>
                        </Box>
                    ))}
                </Grid>
            </Flex>

            <Flex
                direction={{ base: "column", lg: "row" }}
                gap={10}
                px={{ base: "10px", md: "80px", lg: "115px", xl: "128px", "2xl": "10%" }}
            >
                <Box flex="1" border="1px solid #EAECF0" rounded="24px" p={{ base: 6, md: 10 }} bg="#FFFFFF">
                    <Text color="#879037" fontWeight="600" mb={3}>The Window Is Closing</Text>
                    <Stack spacing={4}>
                        {deadlines.map((deadline) => (
                            <Box key={deadline.title}>
                                <Text fontWeight="600">{deadline.title}</Text>
                                <Text color="#475467">{deadline.detail}</Text>
                            </Box>
                        ))}
                    </Stack>
                    <Text mt={6} color="#475467">
                        After February, there is insufficient time for proper preparation. Time is running out. The businesses that prepare now will thrive. The businesses that wait will watch from the sidelines.
                    </Text>
                </Box>
                <Box flex="1" bg="#121212" color="#FFFFFF" rounded="24px" p={{ base: 6, md: 10 }}>
                    <Text textTransform="uppercase" letterSpacing="0.3em" fontSize="sm">
                        Get Started Now
                    </Text>
                    <Text as="h3" fontSize={{ base: "28px", md: "40px" }} fontWeight="500" className="font-playfair" mt={3} mb={4}>
                        Schedule Your Complimentary 60-Minute Discovery Consultation
                    </Text>
                    <Text color="#EAECF0" mb={6}>
                        We'll assess your readiness, identify opportunities, and create your action plan—no obligation.
                    </Text>
                    <Button
                        as={NextLink}
                        href={discoveryLink}
                        bg="#F49953"
                        color="#121212"
                        fontWeight="700"
                        size="lg"
                        _hover={{ bg: "#f68b3e" }}
                        mb={4}
                    >
                        Schedule Free Discovery Call
                    </Button>
                    <Stack spacing={2} color="#EAECF0">
                        <Text>Phone: <a href="tel:+12148105516">+1 (214) 810-5516</a></Text>
                        <Text>Email: <a href="mailto:info@rischerconsulting.com">info@rischerconsulting.com</a></Text>
                        <Text>Website: <a href="https://www.rischerconsulting.com" target="_blank" rel="noopener noreferrer">www.rischerconsulting.com</a></Text>
                    </Stack>
                </Box>
            </Flex>
        </Flex>
    );
}

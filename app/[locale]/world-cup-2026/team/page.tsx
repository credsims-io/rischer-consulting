import { Metadata } from "next";
import NextLink from "next/link";
import { Box, Button, Flex, Grid, Stack, Text } from "@chakra-ui/react";

const discoveryLink = "/world-cup-2026/discovery";

const strategicCore = [
    {
        name: "Shaniqua Rischer, CEO",
        title: "Program Architect | Grant Funding Expert",
        highlights: [
            "$28M+ secured for clients since 2015",
            "Federal Grant Peer Reviewer (U.S. Dept. of Education & Labor)",
            "Created The Color of Opportunity™ economic model",
            "Global experience: Kenya, Ghana, Gambia, Haiti, Dominican Republic"
        ],
        impact: "Secures funding, builds your strategic roadmap, positions you for government grant opportunities."
    },
    {
        name: "Andrea Wallace, MBA",
        title: "Brand Strategy | Consumer Insights",
        highlights: [
            "25+ years with PepsiCo, Samsung, 7-Eleven, Pizza Hut",
            "Northwestern Kellogg MBA (featured on BusinessWeek cover)",
            "Managed $3.5B portfolio with 12% YOY growth",
            "Multicultural marketing expertise across Hispanic, African, and Asian markets"
        ],
        impact: "Positions your brand, designs omnichannel experiences, analyzes consumer data to maximize revenue."
    }
];

const operationalExcellence = [
    {
        name: "Ivan Wagner",
        title: "Venue Operations | Large-Scale Events",
        highlights: [
            "$19M+ annual revenue oversight",
            "Manages venues serving 125,000+ guests",
            "Formula 1, MotoGP, X Games operational leadership",
            "Oversees DFW World Cup infrastructure (Choctaw Stadium, Comerica Center)"
        ],
        impact: "Ensures flawless venue operations, vendor coordination, and crowd management at scale."
    },
    {
        name: "Christina Estes, M.Ed.",
        title: "Workforce Training | Cultural Competency",
        highlights: [
            "Trained 100,000+ professionals across 1,800+ organizations",
            "$250K+ secured in training grants",
            "Culturally responsive pedagogy specialist",
            "Rapid onboarding systems for surge staffing"
        ],
        impact: "Trains your team to deliver world-class service to international guests."
    },
    {
        name: "Brandie Steadham",
        title: "Event Logistics | Execution",
        highlights: [
            "$2M+ budget management",
            "75,000 attendee operations experience",
            "Fortune 500 partnership coordination",
            "NBA All-Star Weekend, Jazz Fest, national conference leadership"
        ],
        impact: "Coordinates every operational detail from registration to sponsor fulfillment."
    }
];

const audiencePlaybooks = [
    {
        title: "If You're a Restaurant or Hospitality Group",
        bullets: [
            "Shaniqua secures workforce development grants.",
            "Andrea positions your concept for international audiences.",
            "Ivan optimizes your operations.",
            "Christina trains staff on cultural competency and service excellence.",
            "Brandie coordinates reservation systems and crowd flow."
        ]
    },
    {
        title: "If You're a Venue or Event Space",
        bullets: [
            "Shaniqua positions you for economic development funding.",
            "Andrea crafts competitive brand positioning for corporate partnerships.",
            "Ivan optimizes operational capacity and vendor relationships.",
            "Christina develops staff training for international guest services.",
            "Brandie manages event coordination and sponsor fulfillment."
        ]
    },
    {
        title: "If You're a Small Business Looking to Scale",
        bullets: [
            "Shaniqua secures small business grants and development funding.",
            "Andrea defines your value proposition and marketing strategy.",
            "Ivan advises on operational scalability and vendor management.",
            "Christina creates training systems for temporary workforce expansion.",
            "Brandie coordinates activation logistics and crowd management."
        ]
    }
];

const pitfalls = [
    {
        label: "The Problem With DIY",
        points: [
            "Funding applications rejected due to poor strategy.",
            "Brand messaging that doesn't resonate with international audiences.",
            "Operational breakdowns during peak demand.",
            "Undertrained staff delivering poor customer experiences.",
            "Coordination failures between departments."
        ]
    },
    {
        label: "The Problem With Single Consultants",
        points: [
            "Grant writers who don't understand operations.",
            "Marketing strategists who ignore cultural competency.",
            "Operations experts who can't build training systems.",
            "Event coordinators without brand strategy expertise."
        ]
    }
];

const integratedWins = [
    "No gaps between strategy and execution.",
    "No conflicts between funding requirements and operational reality.",
    "No disconnect between brand promise and staff delivery.",
    "No surprises because every angle is covered."
];

export const metadata: Metadata = {
    title: "Meet the FIFA 2026 Team | Rischer Consulting",
    description: "Meet the five consultants behind Rischer Consulting's FIFA World Cup 2026 readiness system.",
};

export default function TeamPage() {
    return (
        <Flex
            direction="column"
            paddingX={{ base: 2, md: 4 }}
            paddingY={{ base: 8, md: 4 }}
            gap={12}
            mb={6}
        >
            <Flex
                direction="column"
                gap={6}
                px={{ base: "10px", md: "80px", lg: "115px", xl: "128px", "2xl": "10%" }}
            >
                <Text
                    as="h1"
                    fontSize={{ base: "32px", md: "64px" }}
                    fontWeight="500"
                    className="font-playfair"
                    color="#121212"
                >
                    Meet Your FIFA World Cup 2026 Readiness Team
                </Text>
                <Text color="#475467" fontSize={{ base: "16px", md: "20px" }}>
                    Five consultants. One integrated system. Zero gaps. Every member of our team solves a critical part of the World Cup readiness puzzle so you can move from funding and positioning straight through to flawless execution.
                </Text>
                <Button
                    as={NextLink}
                    href={discoveryLink}
                    bg="#F49953"
                    color="#FFFFFF"
                    fontWeight="700"
                    width={{ base: "100%", md: "fit-content" }}
                    _hover={{ bg: "#f68b3e" }}
                >
                    Schedule a Discovery Call
                </Button>
            </Flex>

            <Flex
                direction="column"
                gap={10}
                px={{ base: "10px", md: "80px", lg: "115px", xl: "128px", "2xl": "10%" }}
            >
                <Text as="h2" fontSize={{ base: "24px", md: "40px" }} fontWeight="500" className="font-playfair" color="#121212">
                    Variable Reward: Different Paths to Success
                </Text>
                <Box>
                    <Text color="#879037" textTransform="uppercase" letterSpacing="0.2em" fontSize="sm" mb={2}>
                        Strategic Core · The Architects
                    </Text>
                    <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={6}>
                        {strategicCore.map((member) => (
                            <TeamCard key={member.name} {...member} />
                        ))}
                    </Grid>
                </Box>
                <Box>
                    <Text color="#879037" textTransform="uppercase" letterSpacing="0.2em" fontSize="sm" mb={2}>
                        Operational Excellence · The Executors
                    </Text>
                    <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6}>
                        {operationalExcellence.map((member) => (
                            <TeamCard key={member.name} {...member} />
                        ))}
                    </Grid>
                </Box>
            </Flex>

            <Flex
                direction="column"
                gap={8}
                px={{ base: "10px", md: "80px", lg: "115px", xl: "128px", "2xl": "10%" }}
            >
                <Text as="h2" fontSize={{ base: "24px", md: "40px" }} fontWeight="500" className="font-playfair" color="#121212">
                    What This Means For Your Business
                </Text>
                <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6}>
                    {audiencePlaybooks.map((playbook) => (
                        <Box key={playbook.title} border="1px solid #EAECF0" rounded="20px" p={6} bg="#FEF4EC">
                            <Text fontWeight="600" mb={4}>
                                {playbook.title}
                            </Text>
                            <Stack spacing={3} color="#475467">
                                {playbook.bullets.map((bullet) => (
                                    <Text key={bullet}>• {bullet}</Text>
                                ))}
                            </Stack>
                        </Box>
                    ))}
                </Grid>
            </Flex>

            <Flex
                direction={{ base: "column", lg: "row" }}
                gap={8}
                px={{ base: "10px", md: "80px", lg: "115px", xl: "128px", "2xl": "10%" }}
            >
                <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={6} flex="2">
                    {pitfalls.map((pitfall) => (
                        <Box key={pitfall.label} border="1px solid #EAECF0" rounded="20px" p={6} bg="#FFFFFF">
                            <Text fontWeight="600" mb={3}>
                                {pitfall.label}
                            </Text>
                            <Stack spacing={2} color="#475467">
                                {pitfall.points.map((point) => (
                                    <Text key={point}>❌ {point}</Text>
                                ))}
                            </Stack>
                        </Box>
                    ))}
                </Grid>
                <Box flex="1" border="1px solid #EAECF0" rounded="20px" p={6} bg="#121212" color="#FFFFFF">
                    <Text fontWeight="600" mb={3}>
                        Why Our Integrated Team Wins
                    </Text>
                    <Stack spacing={3}>
                        {integratedWins.map((win) => (
                            <Text key={win}>✓ {win}</Text>
                        ))}
                    </Stack>
                    <Text mt={4}>
                        You're not hiring five consultants. You're accessing one complete system.
                    </Text>
                </Box>
            </Flex>

            <Flex
                direction="column"
                align="center"
                textAlign="center"
                gap={4}
                px={{ base: "10px", md: "80px", lg: "115px", xl: "128px", "2xl": "10%" }}
                py={{ base: 8, md: 12 }}
                bg="#F49953"
                rounded="32px"
                color="#FFFFFF"
            >
                <Text fontSize="sm" letterSpacing="0.3em" textTransform="uppercase">
                    Ready to activate this team?
                </Text>
                <Text as="h3" fontSize={{ base: "28px", md: "48px" }} fontWeight="500" className="font-playfair">
                    Schedule your complimentary 60-minute readiness review.
                </Text>
                <Text maxW="720px">
                    We’ll map your World Cup goals to the exact consultants and systems required so you can move fast and stay ahead of June 11, 2026.
                </Text>
                <Button
                    as={NextLink}
                    href={discoveryLink}
                    bg="#121212"
                    color="#FFFFFF"
                    fontWeight="700"
                    px={10}
                    py={3}
                    rounded="full"
                    _hover={{ bg: "#0b0b0b" }}
                >
                    Book the Discovery Call
                </Button>
            </Flex>
        </Flex>
    );
}

type TeamCardProps = {
    name: string;
    title: string;
    highlights: string[];
    impact: string;
};

function TeamCard({ name, title, highlights, impact }: TeamCardProps) {
    return (
        <Box border="1px solid #EAECF0" rounded="24px" p={6} bg="#FFFFFF" height="100%">
            <Text fontWeight="600" fontSize="lg">{name}</Text>
            <Text color="#879037" mb={4}>{title}</Text>
            <Stack spacing={2} color="#475467">
                {highlights.map((highlight) => (
                    <Text key={highlight}>• {highlight}</Text>
                ))}
            </Stack>
            <Box mt={4} p={4} bg="#F8F9F0" rounded="16px">
                <Text fontWeight="600" mb={2}>What this means for you</Text>
                <Text color="#475467">{impact}</Text>
            </Box>
        </Box>
    );
}

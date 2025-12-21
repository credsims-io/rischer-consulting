import { Metadata } from "next";
import NextLink from "next/link";
import { Box, Flex, Grid, Text } from "@chakra-ui/react";

const discoveryLink = "/world-cup-2026/discovery";

const narrativeBlocks = [
    {
        eyebrow: "Opening Statement",
        heading: "“Welcome to the city where the world will cheer together.”",
        body: [
            "We position your host city as the cultural front door of North America 2026, intertwining civic pride, community economic impact, and turnkey fan experiences.",
            "A cinematic hero paragraph brings stadium lights, culinary districts, and legacy investments into the same breath, signaling this isn’t just about a match—it’s a movement."
        ]
    },
    {
        eyebrow: "Transformation Promise",
        heading: "From first whistle to legacy plan.",
        body: [
            "Outline how transportation, safety, hospitality, and volunteer programs will perform in harmony. Each paragraph is short, visual, and rooted in measurable benefits for residents and visitors alike.",
            "Underscore the investment story: how every dollar brought in by the World Cup extends into small business grants, STEM programs, and neighborhood revitalization."
        ]
    },
    {
        eyebrow: "Social Proof Ribbon",
        heading: "“We’d bring Rischer Consulting to every mega-event if we could.”",
        body: [
            "Curated testimonial tiles from previous host committees, tourism bureaus, and Fortune 100 sponsors build instant trust.",
            "Each quote is paired with a stat—funds raised, attendees welcomed, percent of local vendor participation—to anchor emotion with proof."
        ]
    },
    {
        eyebrow: "Experience Modules",
        heading: "Immersive activations layered down the page.",
        body: [
            "Story beats include ‘Arrival Rituals’, ‘City As Stadium’, and ‘Legacy Labs’. We describe how neighborhoods, local artists, and culinary partners turn every day into a festival.",
            "Each module ends with a contextual CTA that scrolls visitors toward the discovery call form."
        ]
    }
];

const callouts = [
    {
        label: "Stakeholder POV",
        text: "Mayors and city managers want to see governance readiness. We speak to safety command centers, multilingual messaging, and cross-border transit plans."
    },
    {
        label: "Sponsor POV",
        text: "Global partners want turnkey experiences that feel hyper-local. We spotlight fan festivals, branded hospitality suites, and CSR platforms inside communities."
    },
    {
        label: "Community POV",
        text: "Residents need reassurance that the Cup fuels opportunity, not disruption. We highlight grant programs, workforce training, and cultural exchanges."
    }
];

export const metadata: Metadata = {
    title: "World Cup 2026 Campaign Copy | Rischer Consulting",
    description: "Editable narrative blocks and messaging paths for host cities preparing for the FIFA World Cup 2026.",
};

export default function CampaignCopyPage() {
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
                gap={4}
                px={{ base: "10px", md: "80px", lg: "115px", xl: "128px", "2xl": "10%" }}
            >
                <Text as="h1" fontSize={{ base: "32px", md: "64px" }} fontWeight="500" className="font-playfair" color="#121212">
                    Narrative Starter Kit
                </Text>
                <Text color="#475467" fontSize={{ base: "16px", md: "20px" }}>
                    Use the following copy blocks as plug-and-play modules on your landing page, proposal decks, and sponsorship outreach. Each paragraph maps back to FIFA 2026 pillars: unity, impact, and legacy.
                </Text>
            </Flex>

            <Flex
                direction="column"
                gap={8}
                px={{ base: "10px", md: "80px", lg: "115px", xl: "128px", "2xl": "10%" }}
            >
                {narrativeBlocks.map((block) => (
                    <Box
                        key={block.heading}
                        border="1px solid #EAECF0"
                        rounded="24px"
                        p={{ base: 6, md: 10 }}
                        bg="#FFFFFF"
                    >
                        <Text color="#C27A42" fontSize="sm" textTransform="uppercase" letterSpacing="0.2em">
                            {block.eyebrow}
                        </Text>
                        <Text as="h2" fontSize={{ base: "24px", md: "36px" }} fontWeight="600" mt={3} mb={4}>
                            {block.heading}
                        </Text>
                        <Flex direction="column" gap={4} color="#475467">
                            {block.body.map((paragraph, index) => (
                                <Text key={index}>{paragraph}</Text>
                            ))}
                        </Flex>
                    </Box>
                ))}
            </Flex>

            <Flex
                direction="column"
                gap={6}
                px={{ base: "10px", md: "80px", lg: "115px", xl: "128px", "2xl": "10%" }}
            >
                <Text as="h2" fontSize={{ base: "24px", md: "40px" }} fontWeight="500" className="font-playfair" color="#121212">
                    Audience Lenses
                </Text>
                <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6}>
                    {callouts.map((callout) => (
                        <Box key={callout.label} bg="#F8F9F0" rounded="20px" p={6} border="1px solid #E6EAE0">
                            <Text color="#879037" fontWeight="600" mb={2}>{callout.label}</Text>
                            <Text color="#475467">{callout.text}</Text>
                        </Box>
                    ))}
                </Grid>
            </Flex>

            <Flex
                direction="column"
                align="center"
                textAlign="center"
                gap={4}
                px={{ base: "10px", md: "80px", lg: "115px", xl: "128px", "2xl": "10%" }}
                py={{ base: 8, md: 12 }}
                bg="#121212"
                rounded="32px"
                color="#FFFFFF"
            >
                <Text fontSize="sm" letterSpacing="0.3em" textTransform="uppercase">
                    Ready to Localize This Copy?
                </Text>
                <Text as="h3" fontSize={{ base: "28px", md: "48px" }} fontWeight="500" className="font-playfair">
                    Let’s tailor the narrative to your bid city, community, and partner targets.
                </Text>
                <Text color="#EAECF0" maxW="720px">
                    In our discovery call we map each paragraph to your political landscape, hospitality readiness, and KPI dashboard so the final message lands with every stakeholder.
                </Text>
                <ButtonLink />
            </Flex>
        </Flex>
    );
}

function ButtonLink() {
    return (
        <Box
            as={NextLink}
            href={discoveryLink}
            bg="#F49953"
            color="#121212"
            fontWeight="700"
            px={10}
            py={3}
            rounded="full"
            _hover={{ bg: "#f68b3e" }}
        >
            Schedule Free Discovery Call
        </Box>
    );
}

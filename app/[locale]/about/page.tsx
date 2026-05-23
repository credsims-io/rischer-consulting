import { Metadata } from "next";
import { Box, Button, Flex, Grid, GridItem, SimpleGrid, Text } from "@chakra-ui/react";
import Image from "next/image";
import Team from "@/components/layout/Team";
import ThreeWaysToStart from "@/components/layout/ThreeWaysToStart";

export const metadata: Metadata = {
    title: "About Us | Rischer Consulting",
    description: "Rischer Consulting is a federally-credentialed, certified M/WBE · EDWOSB · HUB grant-strategy and organizational capacity firm founded in 2015.",
    keywords: ["about us", "grant strategy", "organizational capacity", "M/WBE", "EDWOSB", "HUB", "federal grant peer reviewer"],
};

const DUBSADO_LINK = "https://portal.rischerconsulting.com/public/appointment-scheduler/67c873f6bb8b19003a64d1d4/schedule";

const frameworkSteps = [
    {
        step: "01",
        name: "Diagnose",
        description: "We start with a thorough funding landscape assessment and organizational readiness scorecard — identifying gaps, opportunities, and the competitive position of your organization relative to priority funders.",
    },
    {
        step: "02",
        name: "Design",
        description: "We build a customized grant strategy, logic model, and proposal architecture aligned to your mission, budget, and capacity — ensuring every application is structurally competitive before a single word is written.",
    },
    {
        step: "03",
        name: "Deliver",
        description: "Our team writes, manages, and submits compelling proposals — from federal applications to foundation grants. Every submission is reviewed against the same standards our principal uses as a U.S. DOE & DOL peer reviewer.",
    },
    {
        step: "04",
        name: "Document",
        description: "We track outcomes, manage compliance, and produce the reporting that positions you for the next round of funding — turning each grant cycle into an asset rather than a burden.",
    },
];

export default function AboutPage() {
    return (
        <Flex
            direction="column"
            paddingX={{ base: 2, md: 4 }}
            paddingY={{ base: 8, md: 4 }}
            gap={{ base: 8, md: "80px" }}
            mb={6}
        >
            {/* Hero */}
            <Flex
                direction="column"
                gap={4}
                px={{ base: "10px", md: "80px", lg: "115px", xl: "128px", "2xl": "10%" }}
            >
                <Box
                    display="inline-block"
                    px={3}
                    py={1}
                    bg="#F49953"
                    color="#FFFFFF"
                    fontSize="12px"
                    fontWeight="700"
                    rounded="4px"
                    letterSpacing="0.1em"
                    width="fit-content"
                >
                    FOUNDED 2015
                </Box>
                <Text
                    as="h1"
                    fontSize={{ base: "36px", lg: "64px" }}
                    color="#121212"
                    fontWeight="500"
                    className="font-playfair"
                    maxW="820px"
                >
                    You run the mission. We build the systems that fund it.
                </Text>
                <Text
                    color="#667085"
                    fontSize={{ base: "17px", md: "20px" }}
                    lineHeight="1.7"
                    maxW="720px"
                >
                    Rischer Consulting is a federally-credentialed, certified M/WBE · EDWOSB · HUB grant-strategy and organizational capacity firm. Since 2015 we have stewarded $29M+ in competitive grants for education, workforce, international development, nonprofit, and — now — community health organizations.
                </Text>
            </Flex>

            {/* Why We Exist */}
            <Flex
                direction="column"
                gap={6}
                px={{ base: "10px", md: "80px", lg: "115px", xl: "128px", "2xl": "10%" }}
            >
                <Text
                    as="h2"
                    fontSize={{ base: "28px", md: "40px" }}
                    fontWeight="500"
                    className="font-playfair"
                    color="#121212"
                >
                    Why We Exist
                </Text>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                    <Flex direction="column" gap={4}>
                        <Text color="#475467" fontSize={{ base: "16px", md: "18px" }} lineHeight="1.7">
                            Rischer Consulting was founded on a clear conviction: access to competitive grant funding should not be limited by an organization's size or sophistication. Too many mission-driven organizations close their doors — not because their work lacks value, but because they lack the systems to fund it.
                        </Text>
                        <Text color="#475467" fontSize={{ base: "16px", md: "18px" }} lineHeight="1.7">
                            We bridge that gap. As a federally-credentialed firm, we bring rigor, equity-centered strategy, and 25+ years of cross-sector leadership experience to every engagement. Our clients don't just win grants — they build the organizational capacity to sustain their impact for years to come.
                        </Text>
                    </Flex>
                    <SimpleGrid columns={2} spacing={4}>
                        {[
                            { value: "$29M+", label: "Competitive grants stewarded" },
                            { value: "3×", label: "Average ROI for retainer clients" },
                            { value: "100K+", label: "Professionals trained" },
                            { value: "10+", label: "Years in competitive grant markets" },
                        ].map((stat) => (
                            <Box key={stat.label} bg="#FEF4EC" rounded="16px" p={5} textAlign="center">
                                <Text fontSize={{ base: "28px", md: "36px" }} fontWeight="700" color="#F49953" className="font-playfair">
                                    {stat.value}
                                </Text>
                                <Text fontSize="13px" color="#667085" mt={1} lineHeight="1.4">
                                    {stat.label}
                                </Text>
                            </Box>
                        ))}
                    </SimpleGrid>
                </SimpleGrid>
            </Flex>

            {/* Color of Opportunity™ Framework */}
            <Box bg="#121212" py={{ base: 10, md: 16 }}>
                <Flex
                    direction="column"
                    gap={8}
                    px={{ base: "10px", md: "80px", lg: "115px", xl: "128px", "2xl": "10%" }}
                >
                    <Flex direction="column" gap={2}>
                        <Text fontSize="12px" color="#F49953" fontWeight="700" letterSpacing="0.15em" textTransform="uppercase">
                            Our Framework
                        </Text>
                        <Text
                            as="h2"
                            fontSize={{ base: "28px", md: "40px" }}
                            fontWeight="500"
                            className="font-playfair"
                            color="#FFFFFF"
                        >
                            The Color of Opportunity™
                        </Text>
                        <Text color="#D0D5DD" fontSize={{ base: "15px", md: "17px" }} maxW="640px">
                            A four-phase methodology that turns funding potential into funded reality — built on the same standards used by federal grant peer reviewers.
                        </Text>
                    </Flex>
                    <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }} gap={4}>
                        {frameworkSteps.map((item) => (
                            <Box key={item.step} border="1px solid rgba(255,255,255,0.12)" rounded="16px" p={6} bg="rgba(255,255,255,0.04)">
                                <Text fontSize="12px" color="#F49953" fontWeight="700" letterSpacing="0.12em" mb={2}>
                                    STEP {item.step}
                                </Text>
                                <Text fontSize="22px" fontWeight="600" color="#FFFFFF" className="font-playfair" mb={3}>
                                    {item.name}
                                </Text>
                                <Text fontSize="14px" color="#D0D5DD" lineHeight="1.65">
                                    {item.description}
                                </Text>
                            </Box>
                        ))}
                    </Grid>
                </Flex>
            </Box>

            {/* Who We Are — Shaniqua */}
            <Flex
                direction="column"
                gap={6}
                px={{ base: "10px", md: "80px", lg: "115px", xl: "128px", "2xl": "10%" }}
            >
                <Text
                    as="h2"
                    fontSize={{ base: "28px", md: "40px" }}
                    fontWeight="500"
                    className="font-playfair"
                    color="#121212"
                >
                    Who We Are
                </Text>
                <Flex direction={{ base: "column", md: "row" }} gap={8} align="flex-start">
                    <Box flexShrink={0}>
                        <Image
                            src="/images/shaniqua.png"
                            alt="Shaniqua Rischer, Principal Consultant"
                            width={260}
                            height={300}
                            style={{ borderRadius: "16px", objectFit: "cover" }}
                        />
                    </Box>
                    <Flex direction="column" gap={4}>
                        <Box>
                            <Text fontSize="22px" fontWeight="700" color="#121212">Shaniqua Rischer, M.ChEd.</Text>
                            <Text fontSize="13px" color="#F49953" fontWeight="700" letterSpacing="0.1em" textTransform="uppercase" mt={1}>
                                Principal Consultant & Coach
                            </Text>
                        </Box>
                        <Text color="#475467" fontSize={{ base: "15px", md: "17px" }} lineHeight="1.7">
                            Shaniqua Rischer brings 20+ years of public- and private-sector experience to every client engagement. As a Federal Grant Peer Reviewer for both the U.S. Department of Education and U.S. Department of Labor, she evaluates applications by the same standards federal reviewers apply — giving Rischer Consulting an inside-out understanding of what drives competitive submissions.
                        </Text>
                        <Text color="#475467" fontSize={{ base: "15px", md: "17px" }} lineHeight="1.7">
                            She and her team have stewarded $29M+ in competitive grants since 2015, serving education, workforce, nonprofit, international development, and faith-based organizations. Shaniqua holds a B.A. in Government from UT Austin and an M.A. in Christian Education from Dallas Baptist University. She is also a published author of four books and the founder of At The Cross Global Ministries.
                        </Text>
                        <Flex gap={3} wrap="wrap" mt={1}>
                            {["Federal Grant Peer Reviewer", "U.S. DOE", "U.S. DOL", "Published Author", "Speaker"].map((tag) => (
                                <Box
                                    key={tag}
                                    px={3}
                                    py={1}
                                    bg="#F5F7E9"
                                    color="#121212"
                                    fontSize="12px"
                                    fontWeight="600"
                                    rounded="20px"
                                    border="1px solid #EAECF0"
                                >
                                    {tag}
                                </Box>
                            ))}
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>

            {/* Certifications */}
            <Flex
                direction="column"
                gap={8}
                px={{ base: "10px", md: "80px", lg: "115px", xl: "128px", "2xl": "10%" }}
            >
                <Text
                    as="h2"
                    fontSize={{ base: "28px", md: "40px" }}
                    color="#121212"
                    fontWeight="500"
                    className="font-playfair"
                >
                    Certifications
                </Text>
                <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6}>
                    {[
                        {
                            label: "M/WBE",
                            full: "Minority & Women-Owned Business Enterprise",
                            body: "Certified minority- and women-owned business, enabling clients to meet supplier-diversity requirements on government and corporate contracts.",
                            badge: "/images/badge_mbe.png",
                            badgeSize: 100,
                        },
                        {
                            label: "EDWOSB",
                            full: "Economically Disadvantaged Woman-Owned Small Business",
                            body: "Federal small-business certification that qualifies Rischer Consulting for set-aside contracts and sole-source awards through the U.S. Small Business Administration.",
                            badge: "/images/badge2.png",
                            badgeSize: 96,
                        },
                        {
                            label: "HUB",
                            full: "Historically Underutilized Business",
                            body: "Texas HUB certification recognizing Rischer Consulting's eligibility for state agency procurement preferences and supplier-diversity spend commitments.",
                            badge: null,
                            badgeSize: 96,
                        }
                    ].map((cert) => (
                        <GridItem key={cert.label}>
                            <Box border="1px solid #EAECF0" rounded="20px" p={6} bg="#FEF4EC" height="100%">
                                <Flex align="center" gap={4} mb={4}>
                                    {cert.badge ? (
                                        <Image src={cert.badge} alt={cert.label} width={cert.badgeSize} height={cert.badgeSize} style={{ objectFit: "contain" }} />
                                    ) : (
                                        <Box
                                            width={`${cert.badgeSize}px`}
                                            height={`${cert.badgeSize}px`}
                                            border="2px dashed #EAECF0"
                                            rounded="8px"
                                            display="flex"
                                            alignItems="center"
                                            justifyContent="center"
                                        >
                                            <Text fontSize="10px" color="#98A2B3" textAlign="center" px={1}>Badge<br />coming soon</Text>
                                        </Box>
                                    )}
                                    <Box>
                                        <Box
                                            display="inline-block"
                                            px={3}
                                            py={1}
                                            bg="#F49953"
                                            color="#FFFFFF"
                                            fontSize="13px"
                                            fontWeight="700"
                                            rounded="4px"
                                            mb={2}
                                            letterSpacing="0.05em"
                                        >
                                            {cert.label}
                                        </Box>
                                        <Text fontWeight="600">{cert.full}</Text>
                                    </Box>
                                </Flex>
                                <Text color="#475467" fontSize="15px">{cert.body}</Text>
                            </Box>
                        </GridItem>
                    ))}
                </Grid>
            </Flex>

            {/* Federal Grant Reviewer */}
            <Flex
                direction="column"
                gap={6}
                px={{ base: "10px", md: "80px", lg: "115px", xl: "128px", "2xl": "10%" }}
            >
                <Text
                    as="h2"
                    fontSize={{ base: "28px", md: "40px" }}
                    color="#121212"
                    fontWeight="500"
                    className="font-playfair"
                >
                    Federal Grant Reviewer Credentials
                </Text>
                <Box border="1px solid #EAECF0" rounded="24px" p={{ base: 6, md: 10 }} bg="#FFFFFF">
                    <Text color="#667085" fontSize={{ base: "16px", md: "20px" }} lineHeight="1.7" maxW="760px">
                        Shaniqua Rischer serves as a <strong>Federal Grant Peer Reviewer</strong> for both the{" "}
                        <strong>U.S. Department of Education</strong> and the{" "}
                        <strong>U.S. Department of Labor</strong>. This credential means Rischer Consulting
                        evaluates applications by the same standards federal reviewers apply — giving clients an
                        inside-out understanding of what makes a competitive grant submission. With{" "}
                        <strong>$29M+ secured</strong> for clients since 2015, this review-side expertise is a
                        direct driver of our funding success rate.
                    </Text>
                </Box>
            </Flex>

            {/* Our Team */}
            <Flex
                direction="column"
                gap={6}
                px={{ base: "10px", md: "80px", lg: "115px", xl: "128px", "2xl": "10%" }}
            >
                <Text
                    as="h2"
                    fontSize={{ base: "28px", md: "40px" }}
                    color="#121212"
                    fontWeight="500"
                    className="font-playfair"
                >
                    Our Team
                </Text>
                <Team />
            </Flex>

            {/* Three Ways to Start */}
            <Box px={{ base: "10px", md: "80px", lg: "115px", xl: "128px", "2xl": "10%" }}>
                <ThreeWaysToStart />
            </Box>

            {/* Capabilities CTA */}
            <Flex
                direction="column"
                align="center"
                gap={4}
                px={{ base: "10px", md: "80px", lg: "115px", xl: "128px", "2xl": "10%" }}
                textAlign="center"
            >
                <Text fontSize={{ base: "20px", md: "28px" }} fontWeight="500" className="font-playfair" color="#121212" maxW="600px">
                    Ready to build your funding infrastructure?
                </Text>
                <Text color="#667085" fontSize={{ base: "15px", md: "17px" }} maxW="480px">
                    Schedule a no-obligation capabilities conversation to see how Rischer Consulting can move your organization forward.
                </Text>
                <Flex gap={3} wrap="wrap" justify="center">
                    <Button
                        as="a"
                        href={DUBSADO_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        bg="#F49953"
                        color="#FFFFFF"
                        fontWeight="700"
                        size="lg"
                        rounded="8px"
                        _hover={{ opacity: 0.9 }}
                    >
                        Schedule a Capabilities Conversation
                    </Button>
                    <Button
                        as="a"
                        href="/assets/capabilities_statement.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="outline"
                        borderColor="#121212"
                        color="#121212"
                        fontWeight="700"
                        size="lg"
                        rounded="8px"
                        _hover={{ bg: "#F5F7E9" }}
                    >
                        Download Capabilities One-Pager
                    </Button>
                </Flex>
            </Flex>
        </Flex>
    );
}

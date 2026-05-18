import { Metadata } from "next";
import MissonVision from "@/components/layout/About/MissionVision";
import Quote from "@/components/layout/About/Quote";
import ServicesSection from "@/components/layout/About/ServicesSection";
import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import Image from "next/image";
import Team from "@/components/layout/Team";

export const metadata: Metadata = {
    title: "About Us | Rischer Consulting",
    description: "Learn about Rischer Consulting's mission, vision, and commitment to providing integrity-driven consulting services with stellar results.",
    keywords: ["about us", "consulting mission", "consulting vision", "professional services"],
};

export default function page() {
    return (
        <Flex
            direction="column"
            paddingX={{ base: 2, md: 4 }}
            paddingY={{ base: 8, md: 4 }}
            gap={{ base: 8, md: "80px" }}
            mb={6}
        >
            <Flex
                direction="column"
                align={{ "2xl": "center" }}
                gap={6}
                px={{ base: "10px", md: "80px", lg: "115px", xl: "128px", "2xl": "10%" }}
            >
                <Text
                    as="h2"
                    fontSize={{ base: "32px", lg: "64px" }}
                    color="#121212"
                    fontWeight="500"
                    className="font-playfair"
                >
                    About us
                </Text>
                <Text
                    maxW="800px"
                    color="#667085"
                    fontSize={{ lg: "24px" }}
                    lineHeight={{ base: "24px", md: "32px" }}
                >
                    Rischer Consulting offers integrity-driven services that provide our clients with
                    stellar results.
                </Text>
            </Flex>
            <MissonVision />
            <Quote />
            <ServicesSection />

            <Flex
                direction="column"
                gap={8}
                px={{ base: "10px", md: "80px", lg: "115px", xl: "128px", "2xl": "10%" }}
            >
                <Text
                    as="h2"
                    fontSize={{ base: "32px", lg: "48px" }}
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
                                            <Text fontSize="10px" color="#98A2B3" textAlign="center" px={1}>Badge<br/>coming soon</Text>
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

            <Flex
                direction="column"
                gap={6}
                px={{ base: "10px", md: "80px", lg: "115px", xl: "128px", "2xl": "10%" }}
            >
                <Text
                    as="h2"
                    fontSize={{ base: "32px", lg: "48px" }}
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
                        evaluates applications by the same standards federal reviewers apply—giving clients an
                        inside-out understanding of what makes a competitive grant submission. With{" "}
                        <strong>$29M+ secured</strong> for clients since 2015, this review-side expertise is a
                        direct driver of our funding success rate.
                    </Text>
                </Box>
            </Flex>

            <Flex
                direction="column"
                gap={6}
                px={{ base: "10px", md: "80px", lg: "115px", xl: "128px", "2xl": "10%" }}
            >
                <Text
                    as="h2"
                    fontSize={{ base: "32px", lg: "64px" }}
                    color="#121212"
                    fontWeight="500"
                    className='font-playfair'
                >
                    Our Team
                </Text>
                <Team />
            </Flex>
        </Flex >
    )
}

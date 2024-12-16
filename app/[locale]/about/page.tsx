import { Metadata } from "next";
import MissonVision from "@/components/layout/About/MissionVision";
import Quote from "@/components/layout/About/Quote";
import ServicesSection from "@/components/layout/About/ServicesSection";
import { Flex, Text } from "@chakra-ui/react";
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

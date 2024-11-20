import ClientsGrid from "@/components/layout/Home/ClientsGrid";
import { Flex, Text } from "@chakra-ui/react";

export default function page() {
    return (
        <Flex
            direction="column"
            paddingX={{ base: "10px", md: "60px", lg: "115px" }}
            paddingY={{ base: 8, md: 4 }}
            gap={{ base: 8, md: "80px" }}
            mb={6}
        >
            <Flex
                direction="column"
            >
                <Text
                    as="h2"
                    fontSize={{ base: "32px", lg: "64px" }}
                    color="#121212"
                    fontWeight="500"
                >
                    Commitment to Clients
                </Text>
                <Text
                    maxW="800px"
                    color="#667085"
                    fontSize={{ lg: "24px" }}
                    lineHeight={{ base: "24px", md: "32px" }}
                >
                    Helping Clients Achieve Their Goals and Turn Their Vision Into Reality.
                </Text>
            </Flex>
            <Flex
                direction="column"
            >
                <Text
                    as="h2"
                    fontSize={{ base: "24", lg: "48px" }}
                    color="#121212"
                    fontWeight="500"
                >
                    Our Clients
                </Text>
                <Text
                    maxW="800px"
                    color="#667085"
                    fontSize={{ lg: "24px" }}
                    lineHeight={{ base: "24px", md: "32px" }}
                >
                    Rischer Consulting serves clients in different industries and communities on a global scale with clients throughout the United States and Africa.
                    Our commitment to ensuring each client gets the service and results they deserve is why we become a trusted partner with their business or organization.
                </Text>
            </Flex>

            <ClientsGrid />
        </Flex>
    )
}

import Courses from "@/components/layout/Courses/Courses";
import { Button, Flex, Text } from "@chakra-ui/react";

export default function page() {
    return (
        <Flex
            direction="column"
            px={{ base: "10px", md: "80px", lg: "115px", xl: "128px", "2xl": "10%" }}
            paddingY={{ base: 8, md: 4 }}
            gap={{ base: 8, md: "80px" }}
            mb={6}
        >
            <Flex
                gap={4}
                justify="space-between"
                direction={{ base: "column", md: "row" }}
                align={{ base: "start", md: "center" }}
            >
                <Flex
                    direction="column"
                >
                    <Text
                        as="h2"
                        fontSize={{ base: "32px", lg: "64px" }}
                        color="#121212"
                        fontWeight="500"
                        className='font-playfair'
                    >
                        Online Courses
                    </Text>
                    <Text
                        maxW="800px"
                        color="#667085"
                        fontSize={{ lg: "24px" }}
                        lineHeight={{ base: "24px", md: "32px" }}
                    >
                        We Offer Services With Integrity and That Provide Our Clients With Results.
                    </Text>
                </Flex>
                <Button
                    bg="#F49953"
                    color="#FFFFFF"
                    as="a"
                    href="https://rischerconsultingonlinecourses.thinkific.com/collections"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View All Courses
                </Button>
            </Flex>
            <Flex
                direction="column"
            >
                <Text
                    as="h3"
                    fontSize={{ base: "24", lg: "48px" }}
                    color="#121212"
                    fontWeight="500"
                    className='font-playfair'
                >
                    Virtual Learning
                </Text>
                <Text
                    maxW="800px"
                    color="#667085"
                    fontSize={{ lg: "24px" }}
                    lineHeight={{ base: "24px", md: "32px" }}
                >
                    Online learning offers all the advantages of skill acquisition and equips you with the resources necessary for success. Whether seeking additional income while
                    employed or exploring a new career path, our online courses offer convenience,
                    affordability, and results-driven outcomes.
                </Text>
            </Flex>
            <Courses />
        </Flex>
    )
}

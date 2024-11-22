import { CheckIcon } from "@/public/assets";
import {
    Box,
    SimpleGrid,
    Image,
    Heading,
    Text,
    VStack,
    HStack,
    Button,
    Stack,
    Icon,
    Flex,
} from "@chakra-ui/react";

const courses = [
    {
        title: "Launching For The Greater Good",
        description:
            "Launching for the Greater Good: How to Start a Nonprofit is designed to empower aspiring founders and nonprofit leaders with the essential knowledge, tools, and insights needed to build a sustainable organization and make a meaningful impact in their community.",
        price: "$69.99",
        buttonText: "Register Here",
        imageUrl: "/images/launching.png", // Replace with the correct image path
        url: "https://rischer-consulting.ck.page/products/grant-opportunities"
    },
    {
        title: "Six Tenets to Grant Writing",
        description:
            "This 6-hour course is for aspiring or current startup to midsize nonprofit organizations leaders and grant writers. Learn how to write grants to sustain your nonprofit. My Six Tenets Grant Writing System will give you the tools needed to organize information, define goals, report impact, and find funders.",
        points: [
            "Organize information about your organization and program",
            "Define your goals and how you will measure them",
            "Report your impact",
            "Research the right funders",
            "Win grant money and get FUNDED!",
        ],
        buttonText: "Register Now",
        imageUrl: "/images/tenets.png", // Replace with the correct image path
        url: "https://rischerconsultingonlinecourses.thinkific.com/courses/six-tenets-of-grant-writing"
    },
    {
        title: "Finding Funders",
        description:
            "Researching foundations, state or federal grants can save you time and help you organize your grant application process. Learn how to identify funders whose mission aligns with your organization’s vision.",
        buttonText: "Register Now",
        imageUrl: "/images/funders.png", // Replace with the correct image path
        url: "https://rischerconsultingonlinecourses.thinkific.com/courses/finding-funders"
    },
];

const Courses = () => {
    return (
        <Flex direction="column" gap={{ base: 4, md: 6 }}>
            {courses.map((course, index) => (
                <Box
                    key={index}
                    p={5}
                    gap={{ base: 4, md: 6 }}
                    display={{ base: "flex", lg: "grid" }}
                    flexDirection={{ base: "column", lg: "row" }}
                    gridTemplateColumns={{ lg: "1fr 1fr" }}
                    gridTemplateAreas={{ lg: index % 2 === 1 ? '"image content"' : '"content image"' }}
                    alignItems={{ lg: "center" }}
                >
                    <Flex gridArea="image">
                        <Image src={course.imageUrl} alt={course.title} />
                    </Flex>
                    <VStack align="start" gridArea="content" spacing={4}>
                        <Heading
                            as="h3"
                            fontSize={{ base: "24px", md: "32px" }}
                            color="#101828"
                        >
                            {course.title}
                        </Heading>
                        <Text lineHeight={{ base: "24px", md: "32px" }} fontSize={{ base: "16px", md: "20px" }} color="#667085">
                            {course.description}
                        </Text>
                        {course.points && (
                            <VStack align="start" spacing={2}>
                                {course.points.map((point, idx) => (
                                    <HStack key={idx}>
                                        <CheckIcon />
                                        <Text fontSize={{ base: "14px", md: "18px" }} color="#667085">
                                            {point}
                                        </Text>
                                    </HStack>
                                ))}
                            </VStack>
                        )}

                        <Text fontSize={{ base: "16px", md: "20px" }} color="#879037">
                            DELIVERY MODE - Online
                        </Text>
                        <Button
                            mt={4}
                            bg="#F49953"
                            color="#ffffff"
                            size={{ base: "md", md: "lg" }}
                            alignSelf="start"
                            as="a"
                            href={course.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {course.buttonText}
                        </Button>
                    </VStack>
                </Box>
            ))}
        </Flex>
    );
};

export default Courses;

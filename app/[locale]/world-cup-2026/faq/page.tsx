import { Metadata } from "next";
import NextLink from "next/link";
import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Flex,
    Text
} from "@chakra-ui/react";

const discoveryLink = "/world-cup-2026/discovery";

const faqs = [
    {
        question: "How much does World Cup Readiness preparation cost?",
        answer: [
            "We offer three tiers of service with different investment levels based on your business size and goals. During your complimentary Discovery Consultation, we'll discuss pricing and help you understand the return on investment.",
            "We also identify grant funding opportunities to offset program costs. Historical data shows businesses typically achieve 10x-15x return on their preparation investment over 12-18 months."
        ]
    },
    {
        question: "I'm not sure we need this—can't we just prepare on our own?",
        answer: [
            "You can attempt preparation independently, but most businesses significantly underestimate the complexity and timeline required.",
            "World Cup preparation isn't just about being busy—it's about strategic capacity building, cultural competency, operational optimization, funding acquisition, and positioning.",
            "Based on previous host city data, businesses that work with expert consultants capture significantly more of the opportunity (often 3-5x more revenue) than those who 'wing it.' Additionally, the grant funding we help secure often covers a substantial portion of program costs."
        ]
    },
    {
        question: "What makes Rischer Consulting qualified to provide World Cup preparation services?",
        answer: [
            "Rischer Consulting brings nearly a decade of capacity building expertise, over $25 million in secured funding for clients, federal grant reviewer credentials (U.S. Departments of Education and Labor), strategic planning experience with dozens of organizations, and deep cultural competency as a certified M/WBE, EDWBE, and HUB business.",
            "We've studied successful World Cup preparation models from previous host cities (including Seattle, Kansas City, and international locations) and developed a comprehensive framework specifically tailored for Dallas/Fort Worth businesses.",
            "Our CEO, Shaniqua Rischer, combines grant writing expertise, strategic planning skills, and leadership development experience to provide holistic World Cup readiness support. Additionally, we have a team of qualified experts including Special Event Director and Managers, High Capacity Sport Venue and Restaurant Directors, Business Trainers, and more."
        ]
    },
    {
        question: "Is it too late to start preparing if it's already 2026?",
        answer: [
            "It depends on when in 2026. If it's early January or February 2026, you still have time—but you need to act immediately.",
            "Our programs are designed to begin January 15, 2026, with a compressed 5-month timeline that delivers maximum preparation before World Cup begins June 11.",
            "After February 2026, the timeline becomes extremely compressed and we may not be able to guarantee enrollment. The earlier you start, the better your preparation and the higher your potential return. Don't wait—every week matters."
        ]
    },
    {
        question: "Can you guarantee specific revenue increases or results?",
        answer: [
            "We guarantee our commitment, expertise, and comprehensive support throughout your preparation journey. We cannot guarantee specific revenue increases, as many external factors affect World Cup success (including your location, industry, execution, and market conditions).",
            "However, historical data from previous host cities shows consistent patterns: prepared businesses in high-traffic areas typically see 300-500% revenue increases during peak World Cup periods, and most achieve 10x-15x return on their preparation investment over 12-18 months.",
            "Businesses that complete our program will have the systems, capacity, positioning, and team readiness to maximize their opportunity—the rest depends on execution and external factors."
        ]
    },
    {
        question: "What if I'm not in the restaurant or hospitality industry?",
        answer: [
            "World Cup opportunity extends far beyond restaurants and hotels. Retail shops (especially those selling cultural items, gifts, or authentic products), service providers (transportation, tours, entertainment), beauty and wellness businesses, nonprofits and community organizations, entertainment venues, and many other business types can capture significant World Cup revenue with proper preparation.",
            "During your Discovery Consultation, we'll discuss your specific business type and the opportunities available to you, including strategies tailored to your industry and customer base."
        ]
    },
    {
        question: "What does the Discovery Consultation involve?",
        answer: [
            "The Discovery Consultation is a complimentary 60-minute session where we: (1) Learn about your business, current capacity, and goals; (2) Assess your World Cup readiness and identify critical gaps; (3) Discuss which service tier aligns with your needs and budget; (4) Create a preliminary action plan with key priorities; (5) Answer all your questions about the program, timeline, deliverables, and investment.",
            "There's no obligation—the consultation is designed to help you make an informed decision about whether World Cup Readiness preparation is right for your business. Many businesses find the consultation valuable even if they don't immediately enroll, as it provides clarity on what preparation actually requires."
        ]
    },
    {
        question: "Do you provide services outside of Dallas/Fort Worth?",
        answer: [
            "Our World Cup 2026 services are specifically designed for Dallas/Fort Worth businesses, as that's where the matches will be held in our region. The strategies, partnerships, and positioning are tailored to the Dallas/Fort Worth market.",
            "However, Rischer Consulting provides grant writing, strategic planning, capacity building, and leadership development services nationally for nonprofits and businesses outside the World Cup context. Contact us to discuss your needs."
        ]
    },
    {
        question: "How is the program delivered? Is it all in-person or virtual?",
        answer: [
            "The World Cup Readiness Accelerator uses a hybrid delivery model for maximum flexibility and effectiveness. Initial assessments and periodic check-ins are conducted on-site at your location so we can see your operations firsthand.",
            "Most training modules are delivered virtually via video conference for convenience and efficiency. Workshops are in-person interactive sessions for hands-on practice and team building. Executive coaching sessions can be conducted either in-person or virtually based on your preference.",
            "This hybrid approach ensures you get face-to-face interaction when it matters most while minimizing disruption to your daily operations."
        ]
    },
    {
        question: "Will you help us get grant funding to pay for the program?",
        answer: [
            "Yes! Grant funding development is a core component of all our World Cup Readiness tiers. We identify relevant grant opportunities (federal, state, local, corporate foundations) that can fund your World Cup preparation investments—including equipment upgrades, workforce training, technology improvements, and marketing.",
            "The grant proposals we write target funding for these preparation costs, which can offset a substantial portion of your program investment. Many of our clients secure $50K-$250K in grants during the program period, which more than covers their service fees. Grant funding is strategic—it reduces your out-of-pocket costs while providing capital for the investments needed to maximize your World Cup opportunity."
        ]
    },
    {
        question: "What happens if we enroll but then face unexpected challenges or need to pause?",
        answer: [
            "We understand that businesses face unexpected challenges. While our programs are designed with specific timelines to ensure World Cup readiness, we build flexibility into the delivery.",
            "If you face temporary challenges, we can adjust scheduling, prioritize critical components, and work with you to keep preparation on track. However, given the firm June 11, 2026 World Cup start date, significant delays or pauses may compromise your readiness.",
            "We'll have an honest conversation during enrollment about your capacity and commitment to ensure the program is a good fit. Our goal is your success, and we're committed to problem-solving together when challenges arise."
        ]
    },
    {
        question: "Can we start with one service tier and upgrade later?",
        answer: [
            "Yes, you can upgrade between tiers during the program if your needs or capacity changes. For example, you might start with Foundation Accelerator and upgrade to Growth Catalyst as you see results and want to expand team certification or coaching hours.",
            "However, given the compressed 5-month timeline, earlier decisions are better—upgrading mid-program may mean missing some components or compressed delivery. We'll discuss tier selection carefully during your Discovery Consultation to help you choose the best fit from the start, but upgrades are possible if circumstances change."
        ]
    },
    {
        question: "What makes this different from general business consulting?",
        answer: [
            "World Cup Readiness is not general business consulting. This is highly specialized preparation for a specific, time-bound event with unique dynamics.",
            "It combines: (1) Operational capacity building for extreme volume surges (300-500% increases); (2) Cultural competency training for diverse international visitors; (3) Grant funding acquisition for preparation investments; (4) Strategic partnerships specific to World Cup positioning; (5) Marketing to international audiences arriving for a major event; (6) Team training for high-pressure, high-visibility service.",
            "General consultants lack this specialized focus. World Cup preparation requires expertise in rapid scaling, cross-cultural service, event-driven economics, and the specific dynamics of mega-events. Rischer Consulting's framework is built specifically for World Cup 2026 readiness."
        ]
    },
    {
        question: "What if World Cup doesn't generate as much business as projected?",
        answer: [
            "Projections for World Cup 2026 are based on actual data from previous host cities, FIFA studies, and regional economic impact analyses—not speculation. The 650,000+ visitor projection and $400M-$600M economic impact are conservative estimates from credible sources.",
            "The capacity building, systems, and team development you gain through World Cup preparation have value beyond World Cup.",
            "Even in a worst-case scenario where World Cup traffic is lower than projected, you'll have improved operations, trained staff, better customer service capabilities, grant funding secured, strategic partnerships established, and leadership capacity enhanced. These benefits drive long-term business success regardless of World Cup outcomes."
        ]
    }
];

export const metadata: Metadata = {
    title: "World Cup 2026 FAQ | Rischer Consulting",
    description: "Answers to the most common questions host cities and partners ask before launching their World Cup 2026 digital hub.",
};

export default function FaqPage() {
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
                    FAQ · World Cup 2026 Digital Hub
                </Text>
                <Text color="#475467" fontSize={{ base: "16px", md: "20px" }}>
                    We gathered the questions coming from mayors, tourism leaders, and sponsorship partners as they prepare for FIFA World Cup North America 2026.
                </Text>
            </Flex>

            <Flex
                px={{ base: "10px", md: "80px", lg: "115px", xl: "128px", "2xl": "10%" }}
            >
                <Accordion allowMultiple width="100%">
                    {faqs.map((faq) => (
                        <AccordionItem key={faq.question} border="1px solid #EAECF0" rounded="20px" mb={4} bg="#FFFFFF">
                            <h2>
                                <AccordionButton px={6} py={5}>
                                    <Box flex="1" textAlign="left" fontWeight="600" fontSize={{ base: "18px", md: "20px" }}>
                                        {faq.question}
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel px={6} pb={6} color="#475467">
                                {Array.isArray(faq.answer) ? faq.answer.map((paragraph, index) => (
                                    <Text key={index} mb={index === faq.answer.length - 1 ? 0 : 3}>
                                        {paragraph}
                                    </Text>
                                )) : faq.answer}
                            </AccordionPanel>
                        </AccordionItem>
                    ))}
                </Accordion>
            </Flex>

            <Flex
                direction="column"
                align="center"
                textAlign="center"
                gap={4}
                px={{ base: "10px", md: "80px", lg: "115px", xl: "128px", "2xl": "10%" }}
                py={{ base: 8, md: 12 }}
                bg="#FEF4EC"
                rounded="32px"
            >
                <Text color="#C27A42" fontWeight="600" letterSpacing="0.2em" textTransform="uppercase">
                    Still Curious?
                </Text>
                <Text as="h3" fontSize={{ base: "28px", md: "48px" }} fontWeight="500" className="font-playfair" color="#121212">
                    Book a discovery call to see how this translates to your stadium footprint.
                </Text>
                <Flex direction={{ base: "column", md: "row" }} align="center" gap={4}>
                    <Box
                        as={NextLink}
                        href={discoveryLink}
                        bg="#121212"
                        color="#FFFFFF"
                        fontWeight="700"
                        px={10}
                        py={3}
                        rounded="full"
                        _hover={{ bg: "#1f1f1f" }}
                    >
                        Schedule Free Discovery Call
                    </Box>
                    <Flex direction="column" color="#475467">
                        <Text>Phone: <a href="tel:+12148105516">+1 (214) 810-5516</a></Text>
                        <Text>Email: <a href="mailto:info@rischerconsulting.com">info@rischerconsulting.com</a></Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
}

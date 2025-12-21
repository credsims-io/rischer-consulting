"use client"

import { useState } from "react";
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Radio,
    RadioGroup,
    Select,
    Stack,
    Text,
    Textarea,
    useToast,
    VStack
} from "@chakra-ui/react";

const SERVICE_OPTIONS = [
    "World Cup Readiness Audit",
    "Grant Funding & Sponsorship Support",
    "Operational Capacity Planning",
    "Team Training & Cultural Competency",
    "Event / Venue Logistics Support"
];

export default function DiscoveryPage() {
    const toast = useToast();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [website, setWebsite] = useState('');
    const [socialMedia, setSocialMedia] = useState('');
    const [isBusinessOrg, setIsBusinessOrg] = useState('');
    const [businessOrg, setBusinessOrg] = useState('');
    const [operatingBudget, setOperatingBudget] = useState('');
    const [grantServicesBudget, setGrantServicesBudget] = useState('');
    const [interestedService, setInterestedService] = useState('');
    const [hearAboutUs, setHearAboutUs] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    website,
                    socialMedia,
                    isBusinessOrg,
                    businessOrg,
                    operatingBudget,
                    grantServicesBudget,
                    interestedService,
                    hearAboutUs,
                }),
            });
            if (!response.ok) {
                throw new Error('Request failed');
            }
            toast({
                title: "Discovery request received",
                description: "We’ll follow up within 2 business days to schedule your call.",
                status: "success",
                duration: 5000,
                isClosable: true,
            });
            setName('');
            setEmail('');
            setWebsite('');
            setSocialMedia('');
            setIsBusinessOrg('');
            setBusinessOrg('');
            setOperatingBudget('');
            setGrantServicesBudget('');
            setInterestedService('');
            setHearAboutUs('');
        } catch (error) {
            toast({
                title: "Unable to submit",
                description: "Please try again or email info@rischerconsulting.com.",
                status: "error",
                duration: 5000,
                isClosable: true,
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Flex
            direction="column"
            px={{ base: "10px", md: "80px", lg: "115px", xl: "128px", "2xl": "10%" }}
            py={{ base: 8, md: 4 }}
            gap={{ base: 8, md: "80px" }}
            mb={6}
        >
            <Flex direction="column" gap={6} maxW="820px">
                <Text
                    as="h1"
                    fontSize={{ base: "32px", md: "60px" }}
                    fontWeight="500"
                    className="font-playfair"
                    color="#121212"
                >
                    FIFA 2026 Discovery Call
                </Text>
                <Text color="#475467" fontSize={{ base: "16px", md: "20px" }}>
                    Tell us about your World Cup 2026 goals, budgets, and current readiness. The more context you share, the more actionable your 60-minute discovery session will be.
                </Text>
            </Flex>

            <form onSubmit={handleSubmit}>
                <VStack spacing={6} align="stretch" border="1px solid #E4E7EC" p={{ base: 6, md: 10 }} borderRadius="16px" bg="#FFFFFF">
                    <Stack direction={{ base: "column", md: "row" }} spacing={6}>
                        <FormControl isRequired>
                            <FormLabel color="#101828">Full Name</FormLabel>
                            <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel color="#101828">Email</FormLabel>
                            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com" />
                        </FormControl>
                    </Stack>
                    <Stack direction={{ base: "column", md: "row" }} spacing={6}>
                        <FormControl>
                            <FormLabel color="#101828">Website</FormLabel>
                            <Input value={website} onChange={(e) => setWebsite(e.target.value)} placeholder="https://example.com" />
                        </FormControl>
                        <FormControl>
                            <FormLabel color="#101828">Primary Social Media</FormLabel>
                            <Input value={socialMedia} onChange={(e) => setSocialMedia(e.target.value)} placeholder="@yourhandle" />
                        </FormControl>
                    </Stack>
                    <FormControl isRequired>
                        <FormLabel color="#101828">Are you a business or non-profit organization?</FormLabel>
                        <RadioGroup value={isBusinessOrg} onChange={setIsBusinessOrg}>
                            <Stack direction={{ base: "column", md: "row" }} gap={4}>
                                <Radio value="business">Business</Radio>
                                <Radio value="non-profit">Non-Profit</Radio>
                            </Stack>
                        </RadioGroup>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel color="#101828">Tell us about your organization</FormLabel>
                        <Textarea value={businessOrg} onChange={(e) => setBusinessOrg(e.target.value)} placeholder="What you do, current footprint, and World Cup goals." rows={4} />
                    </FormControl>
                    <Stack direction={{ base: "column", md: "row" }} spacing={6}>
                        <FormControl isRequired>
                            <FormLabel color="#101828">Annual Operating Budget</FormLabel>
                            <Select placeholder="Select range" value={operatingBudget} onChange={(e) => setOperatingBudget(e.target.value)}>
                                <option value="Under $250K">Under $250K</option>
                                <option value="$250K - $1M">$250K - $1M</option>
                                <option value="$1M - $5M">$1M - $5M</option>
                                <option value="Over $5M">Over $5M</option>
                            </Select>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel color="#101828">Budget for World Cup preparation</FormLabel>
                            <Select placeholder="Select range" value={grantServicesBudget} onChange={(e) => setGrantServicesBudget(e.target.value)}>
                                <option value="Under $25K">Under $25K</option>
                                <option value="$25K - $75K">$25K - $75K</option>
                                <option value="$75K - $150K">$75K - $150K</option>
                                <option value="Over $150K">Over $150K</option>
                            </Select>
                        </FormControl>
                    </Stack>
                    <FormControl isRequired>
                        <FormLabel color="#101828">Primary focus for the discovery call</FormLabel>
                        <Select placeholder="Select focus" value={interestedService} onChange={(e) => setInterestedService(e.target.value)}>
                            {SERVICE_OPTIONS.map((option) => (
                                <option key={option} value={option}>{option}</option>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl>
                        <FormLabel color="#101828">How did you hear about Rischer Consulting?</FormLabel>
                        <Textarea value={hearAboutUs} onChange={(e) => setHearAboutUs(e.target.value)} rows={3} placeholder="Referral, media feature, event, LinkedIn, etc." />
                    </FormControl>
                    <Button
                        type="submit"
                        bg="#F49953"
                        color="white"
                        size="lg"
                        isLoading={isSubmitting}
                        _hover={{ bg: "#e48845" }}
                    >
                        Submit Discovery Request
                    </Button>
                </VStack>
            </form>
        </Flex>
    );
}

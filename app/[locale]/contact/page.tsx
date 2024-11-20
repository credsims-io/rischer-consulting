"use client"

import { Flex, Text, FormControl, FormLabel, Input, Textarea, Button, useToast, VStack, Radio, RadioGroup, Checkbox, Select } from "@chakra-ui/react";
import { useState } from "react";

const SERVICE_OPTIONS = [
    "Development Planning and Fundraising",
    "Grant Funding Research/Prospecting",
    "Strategic Planning Consultation and Report",
    "C-Suite Executive Coaching",
    "Leadership Coaching for Non-profit Executives"
];

export default function ContactPage() {
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
    const toast = useToast();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Handle form submission with updated state
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

            if (response.ok) {
                toast({
                    title: "Message sent successfully!",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                });
                // Reset form
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
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            toast({
                title: "Error sending message",
                description: "Please try again later.",
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
            paddingX={{ base: "10px", md: "60px", lg: "115px" }}
            paddingY={{ base: 8, md: 4 }}
            gap={{ base: 8, md: "80px" }}
            mb={6}
        >
            <Flex direction="column" gap={6}>
                <Text
                    as="h2"
                    fontSize={{ base: "32px", lg: "64px" }}
                    color="#121212"
                    fontWeight="500"
                >
                    Contact Us
                </Text>
                <Text
                    maxW="800px"
                    color="#667085"
                    fontSize={{ lg: "24px" }}
                    lineHeight={{ base: "24px", md: "32px" }}
                >
                    Thank you for your interest in Rischer Consulting. We look forward to providing you with the services you deserve.
                </Text>
            </Flex>

            <form onSubmit={handleSubmit} className="flex items-center justify-center">
                <VStack spacing={6} align="stretch" maxW="800px" border="1px solid #E4E4E4" p={{ base: 6, md: 8, lg: 16 }} borderRadius="12px">
                    <FormControl isRequired>
                        <FormLabel color="#101828">Name</FormLabel>
                        <Input fontSize="12px" name="name" placeholder="Enter your fullname" value={name} onChange={(e) => setName(e.target.value)} />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel color="#101828">Email</FormLabel>
                        <Input fontSize="12px" name="email" type="email" placeholder="Enter your email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel color="#101828">Website</FormLabel>
                        <Input fontSize="12px" name="website" placeholder="Enter Website link" value={website} onChange={(e) => setWebsite(e.target.value)} />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel color="#101828">Social Media Handle</FormLabel>
                        <Input fontSize="12px" name="socialMedia" placeholder="Enter Social media handle" value={socialMedia} onChange={(e) => setSocialMedia(e.target.value)} />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel color="#101828">Are you a business or non-profit organization?</FormLabel>
                        <RadioGroup value={isBusinessOrg} onChange={setIsBusinessOrg} display="flex" flexDirection="column" gap={4}>
                            <Radio value="business">Business</Radio>
                            <Radio value="non-profit">Non-Profit</Radio>
                        </RadioGroup>
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel color="#101828">Tell us about your business or organization</FormLabel>
                        <Textarea fontSize="12px" name="businessOrg" placeholder="Enter details about your business or organization" value={businessOrg} onChange={(e) => setBusinessOrg(e.target.value)} rows={3} />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel color="#101828">What is your Operating Budget?</FormLabel>
                        <RadioGroup value={operatingBudget} onChange={setOperatingBudget} display="flex" flexDirection="column" gap={4}>
                            <Radio value="0-500000">$0 - $500,000</Radio>
                            <Radio value="500000-1000000">$500,000 - $1,000,000</Radio>
                            <Radio value="1000000-above">$1,000,000 - Above</Radio>
                        </RadioGroup>
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel color="#101828">What is your budget for grant services?</FormLabel>
                        <RadioGroup value={grantServicesBudget} onChange={setGrantServicesBudget} display="flex" flexDirection="column" gap={4}>
                            <Radio value="0-3000">$0 - $3000</Radio>
                            <Radio value="3000-6000">$3000 - $6000</Radio>
                            <Radio value="6000-8000">$6000 - $8000</Radio>
                        </RadioGroup>
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel color="#101828">What service are you interested in?</FormLabel>
                        <Select 
                            name="interestedService"
                            value={interestedService}
                            onChange={(e) => setInterestedService(e.target.value)}
                            placeholder="Select a service"
                            fontSize="12px"
                        >
                            {SERVICE_OPTIONS.map((service) => (
                                <option key={service} value={service}>
                                    {service}
                                </option>
                            ))}
                        </Select>
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel color="#101828">How did you hear about Rischer Consulting?</FormLabel>
                        <Textarea fontSize="12px" name="hearAboutUs" placeholder="Enter how you heard about Rischer Consulting" value={hearAboutUs} onChange={(e) => setHearAboutUs(e.target.value)} rows={3} />
                    </FormControl>

                    <Button
                        type="submit"
                        bg="#F49953"
                        color="white"
                        size="lg"
                        isLoading={isSubmitting}
                        _hover={{ bg: "#E38842" }}
                    >
                        Send Message
                    </Button>
                </VStack>
            </form>
        </Flex>
    )
}
"use client"

import { FacebookFooterIcon, InstagramFooterIcon, LinkedInFooterIcon, YoutubeFooterIcon } from "@/public/assets";
import { Box, Button, Checkbox, CheckboxGroup, Flex, Input, Link, Text, useToast } from "@chakra-ui/react";
import Image from "next/image";
import { useState, FormEvent } from "react";

export default function Footer() {
    const [email, setEmail] = useState("");
    const [agreedToEmails, setAgreedToEmails] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const toast = useToast();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (!email || !agreedToEmails) {
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch('/api/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                // Reset form
                setEmail("");
                setAgreedToEmails(false);
                toast({
                    title: "Subscription successful",
                    description: "Thank you for subscribing to our newsletter!",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                });
            } else {
                toast({
                    title: "Subscription failed",
                    description: "There was an error subscribing to the newsletter. Please try again.",
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                });
            }
        } catch (error) {
            toast({
                title: "Error",
                description: "There was an error subscribing to the newsletter. Please try again.",
                status: "error",
                duration: 5000,
                isClosable: true,
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <footer>
            <Flex
                bg="#FEF4EC"
                px={{ base: 6, md: "80px", lg: "115px", xl: "10%", "2xl": "15%" }}
                py={16}
                direction={{ base: "column-reverse", md: "row" }}
                justify="space-between"
                gap={6}
            >
                <Flex direction="column" gap={2}>
                    <Text
                        color="#000"
                        fontSize={{ base: "16px", md: "24px" }}
                        fontWeight="600"
                    >
                        Join our newsletter
                    </Text>
                    <Text
                        color="#667085"
                        fontSize={{ base: "14px", md: "16px" }}
                        lineHeight={{ base: "20px", md: "24px" }}
                    >
                        Sign up for our newsletter and email alerts.
                    </Text>
                    <form onSubmit={handleSubmit}>
                        <Input
                            my={4}
                            bg="#ffffff"
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <CheckboxGroup>
                            <Checkbox
                                colorScheme="orange"
                                isChecked={agreedToEmails}
                                onChange={(e) => setAgreedToEmails(e.target.checked)}
                                required
                            >
                                I agree to receive emails from Rischer Consulting
                            </Checkbox>
                        </CheckboxGroup>
                        <Box mt={4}>
                            <Button
                                bg="#F49953"
                                paddingX={{ base: 4, md: 6 }}
                                paddingY={{ base: 2, md: 3 }}
                                color="#FFFFFF"
                                rounded="4px"
                                fontWeight="700"
                                type="submit"
                                isLoading={isSubmitting}
                                disabled={!email || !agreedToEmails || isSubmitting}
                            >
                                Sign me up
                            </Button>
                        </Box>
                    </form>
                </Flex>
                <Flex align="center" justify="center">
                    <Image src="/images/rischer_logo_2.png" alt="Rischer Consulting" width={190} height={190} />
                </Flex>
                <Flex align="center" justify="center" direction="column">
                    <Text color="#000000" fontSize="24px">RISCHER CONSULTING</Text>
                    <Flex align="center" justify="center" gap={6} mt={6}>
                        <Image src="/images/badge1.png" alt="Rischer Consulting" width={96} height={96} />
                        <Image src="/images/badge2.png" alt="Rischer Consulting" width={96} height={96} />
                    </Flex>
                    <Flex align="center" justify="center" gap={4} mt={4}>
                        <Link href="https://www.instagram.com/rischer_consulting/" target="_blank" rel="noopener noreferrer">
                            <InstagramFooterIcon />
                        </Link>
                        <Link href="https://www.facebook.com/rischerconsulting" target="_blank" rel="noopener noreferrer">
                            <FacebookFooterIcon />
                        </Link>
                        <Link href="https://www.linkedin.com/company/rischer-consulting" target="_blank" rel="noopener noreferrer">
                            <LinkedInFooterIcon />
                        </Link>
                    </Flex>
                    <Flex align="center" justify="center" gap={4} mt={4} fontSize={{ base: "18px", md: "20px" }}>
                        <Link href="/contact" color="#667085">
                            Contact
                        </Link>
                        <Link color="#667085">
                            Privacy
                        </Link>
                        <Link color="#667085" href="/">
                            Website
                        </Link>
                    </Flex>
                </Flex>
            </Flex>

            <Flex
                bg="#F49953"
                color="#FFFFFF"
                direction={{ base: "row", md: "row" }}
                px={{ base: 6, md: "80px", lg: "115px", xl: "10%", "2xl": "15%" }}
                py={4}
                justify="space-between"
            >
                <Text
                    color="#FFFFFF"
                    fontWeight="500"
                    lineHeight={{ base: "20px", md: "24px" }}
                    fontSize={{ base: "14px", md: "16px" }}
                >
                    &copy; 2024-2025 Rischer Consulting
                </Text>
                <Text
                    color="#FFFFFF"
                    fontWeight="500"
                    lineHeight={{ base: "20px", md: "24px" }}
                    fontSize={{ base: "14px", md: "16px" }}
                >
                    Website powered by Credsims
                </Text>

            </Flex>
        </footer>
    )
}

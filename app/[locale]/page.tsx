import { Metadata } from "next";
import Clients from "@/components/layout/Home/Clients";
import Header from "@/components/layout/Home/Header";
import IndustriesStrip from "@/components/layout/Home/IndustriesStrip";
import ProofBar from "@/components/layout/Home/ProofBar";
import CommunityHealthPopup from "@/components/layout/Home/CommunityHealthPopup";
import Raised from "@/components/layout/Home/Raised";
import Reviews from "@/components/layout/Home/Reviews";
import Welcome from "@/components/layout/Home/Welcome";
import ThreeWaysToStart from "@/components/layout/ThreeWaysToStart";
import { Box, Flex } from "@chakra-ui/react";

export const metadata: Metadata = {
  title: "Rischer Consulting - Professional Consulting Services",
  description: "Rischer Consulting offers integrity-driven services that provide clients with stellar results in strategic planning, grant writing, coaching, and leadership development.",
  keywords: ["consulting", "grant writing", "strategic planning", "coaching", "leadership development"],
};

export default async function Home() {

  return (
    <>
      <CommunityHealthPopup />
      <Flex
        direction="column"
        paddingX={{ base: 2, md: 4 }}
        paddingY={{ base: 8, md: 4 }}
        gap={{ base: 8, md: "80px" }}
        mb={6}
      >
        <Header />
        <IndustriesStrip />
        <ProofBar />
        <Welcome />
        <Raised />
        <Reviews />
        <Box px={{ base: "10px", md: "80px", lg: "115px", xl: "128px", "2xl": "10%" }}>
          <ThreeWaysToStart />
        </Box>
        <Clients />
      </Flex>
    </>
  )
}

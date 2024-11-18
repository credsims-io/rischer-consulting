import Clients from "@/components/layout/Home/Clients";
import Header from "@/components/layout/Home/Header";
import Raised from "@/components/layout/Home/Raised";
import Reviews from "@/components/layout/Home/Reviews";
import Welcome from "@/components/layout/Home/Welcome";
import { Flex } from "@chakra-ui/react";

export default async function Home() {

  return (
    <Flex
      direction="column"
      paddingX={{ base: 2, md: 4 }}
      paddingY={{ base: 8, md: 4 }}
      gap={{ base: 8, md: "120px" }}
      mb={6}
    >
      <Header />
      <Welcome />
      <Raised />
      <Reviews />
      <Clients />
    </Flex>
  )
}
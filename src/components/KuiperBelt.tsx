import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import kuiper from "../images/cinturon-de-kuiper.jpg.jpg";

export const KuiperBelt = () => {
  const navigation = useNavigate();
  return (
    <>
    <div className="planets">
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>
      <Flex
        backgroundColor="black"
        width="100%"
        height="full"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Flex
          cursor={"pointer"}
          onClick={() => navigation(-1)}
          w={"100%"}
          h={"50vh"}
          margin={"10px"}
          alignItems="center"
          flexDirection="column"
          bgImage={kuiper}
          bgRepeat={"no-repeat"}
          bgPosition={"center"}
          justify={"center"}
        >
          <Heading
            as="h1"
            color={"white"}
            justifyContent={"center"}
            marginTop={"5px"}
          >
            Kuiper Belt
          </Heading>
        </Flex>
        <Flex direction={"column"} margin={"10px"}>
          <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
            A tourist trip to the Kuiper Belt is a truly unique and exciting
            experience to this remote and mysterious corner of space.
          </Text>
          <br></br>
          <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
            Exploration of the Kuiper Belt: Tourist Journey to the Edge of the
            Solar System
          </Text>

          <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
            Get ready for unparalleled interplanetary adventure on a trip to the
            Kuiper Belt, a remote region of the solar system filled with frozen
            objects and cosmic mysteries. Although you will not be able to walk
            on solid surfaces, you will enjoy unique activities in this ice
            kingdom.
          </Text>

          <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
            This was first proposed in the 1950s by the Dutch astronomer Gerard
            Kuiper, who predicted the existence of a region of objects beyond
            Neptune. However, it was not until the 1990s that objects in this
            region were discovered through telescopic observations.
          </Text>

          <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
            It is located on the edge of the solar system, extending from
            approximately 30 astronomical units (AU) to about 50 AU from the
            Sun. An UA is the average distance between the Earth and the Sun,
            approximately 149.6 million kilometers.
          </Text>

          <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
            It is populated by a wide variety of objects, mainly rocky and ice,
            including comets, dwarf planets and other small celestial bodies.
            These objects are composed mainly of water ice, methane and ammonia,
            along with small amounts of rocky material.
          </Text>
        </Flex>
        <Flex>
          <Heading as="h2" color={"white"} margin={"15px"} paddingTop={"10px"}>
            Embark on the Adventure of Your Life: Tourist Journey to Kuiper Belt
          </Heading>
        </Flex>

        <Flex alignItems="flex-start">
          <Text
            color={"white"}
            fontWeight={"bold"}
            textDecoration={"underline"}
            paddingTop={"20px"}
          >
            Day 1: Launch from Earth
          </Text>
        </Flex>
        <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
          Your exciting journey begins on Earth, where you will approach an
          advanced spacecraft designed to explore deep space. For several years,
          you will head towards the Kuiper Belt, a vast region that extends
          beyond Neptune's orbit.
        </Text>

        <Flex alignItems="flex-start">
          <Text
            color={"white"}
            fontWeight={"bold"}
            textDecoration={"underline"}
            paddingTop={"20px"}
          >
            Day 2: Discovery of Kuiper Belt Objects
          </Text>
        </Flex>
        <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
          Once in the Kuiper Belt, you will begin to exploring ice objects, such
          as Pluto, Eris, and Haumea, which are some of the largest bodies in
          this region. You will observe their surface, composition and geology
          as you orbit close to them.
        </Text>
        <Flex alignItems="flex-start">
          <Text
            color={"white"}
            fontWeight={"bold"}
            textDecoration={"underline"}
            paddingTop={"20px"}
          >
            Day 3: Observing Comets and Distant Objects
          </Text>
        </Flex>
        <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
          You will continue to explore comets and smaller objects, some of which
          are visitors to the distant outer solar system. You will observe their
          tails of gas and dust as they approach the Sun.
        </Text>
        <Flex alignItems="flex-start">
          <Text
            color={"white"}
            fontWeight={"bold"}
            textDecoration={"underline"}
            paddingTop={"20px"}
          >
            Day 4: Study of Solar System History
          </Text>
        </Flex>
        <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
          The Kuiper Belt harbors objects that are considered living fossils of
          the early solar system. Scientists believe their study can provide
          valuable information about the formation and evolution of our solar
          system. You will participate in scientific research to learn more
          about the origins of this
        </Text>
        <Flex alignItems="flex-start">
          <Text
            color={"white"}
            fontWeight={"bold"}
            textDecoration={"underline"}
            paddingTop={"20px"}
          >
            Day 5: Exploration of Moons and Dwarf Planet Rings
          </Text>
        </Flex>
        <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
          Many of the dwarf planets in the Kuiper Belt have intriguing moons and
          ring systems. You will explore these unique features and be able to
          study their origin and dynamics.
        </Text>
        <Flex alignItems="flex-start">
          <Text
            color={"white"}
            fontWeight={"bold"}
            textDecoration={"underline"}
            paddingTop={"20px"}
          >
            Day 6: Return to Earth
          </Text>
        </Flex>
        <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
          After an unforgettable experience, you will return to Earth on your
          spacecraft. During the return trip, you will have time to reflect on
          your amazing adventures and share stories with your fellow travellers.
        </Text>
        <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
          This is a journey that allows you to explore one of the most
          mysterious and understood regions of the solar system.
        </Text>
        <Button cursor={'pointer'} onClick={() => navigation(-1)}color={'white'} bgColor={'blue'} borderRadius={'13px'} padding={'10px'} marginBottom={'10px'}>Back to Home</Button>
      </Flex>
      </div>
    </>
  );
};

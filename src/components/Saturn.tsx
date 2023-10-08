import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import saturno from "../images/saturn-rings.jpg";
export const Saturn = () => {
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
          bgImage={saturno}
          bgRepeat={"no-repeat"}
          bgPosition={"center"}
          justify={"center"}
          bgSize={"cover"}
        >
          <Heading
            as="h1"
            color={"white"}
            justifyContent={"center"}
            marginTop={"5px"}
          >
            Saturn
          </Heading>
        </Flex>
        <Flex direction={"column"} margin={"10px"}>
          <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
            Explore the Rings of Saturn: Planetary Ring Sightseeing Trip
          </Text>
          <br></br>
          <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
            Get ready for an out-of-this-world experience on a sightseeing trip
            to Saturn, the planet famous for its dazzling rings. Although you
            won't be able to land in Saturn's gaseous atmosphere, you'll enjoy
            exciting activities in its vicinity.
          </Text>

          <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
            It is a fascinating planet known for its beauty and complexity,
            which remains an important target for space exploration and
            scientific research in the solar system.
          </Text>

          <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
            It is the sixth in the solar system and is known to be a gas giant,
            similar to Jupiter. It has a diameter of approximately 116,464
            kilometers, making it the second largest planet after Jupiter. Like
            this, it is composed mainly of hydrogen and helium, with traces of
            other elements and compounds.
          </Text>
          <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
            Saturn is famous for its dazzling rings, which are composed of
            thousands of individual rings that vary in size and density, and
            which are mainly made up of ice and rock particles, ranging from
            small grains of sand to large pieces of ice.
          </Text>
          <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
            It has more than 80 known moons to date. Some of the most notable
            are Titan, which is the largest, and Enceladus, which has geysers
            that expel water and water vapor into space.
          </Text>
        </Flex>
        <Flex>
          <Heading as="h2" color={"white"} margin={"15px"} paddingTop={"10px"}>
            Embark on the Adventure of Your Life: Tourist Journey to Saturn
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
          Your exciting journey begins on Earth, where you will approach a
          state-of-the-art spacecraft designed to travel through deep space. For
          several months, you will head to the closest orbits of Saturn.
        </Text>

        <Flex alignItems="flex-start">
          <Text
            color={"white"}
            fontWeight={"bold"}
            textDecoration={"underline"}
            paddingTop={"20px"}
          >
            Day 2: Arrival to the moons of Saturn
          </Text>
        </Flex>
        <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
          Once in the vicinity of Saturn, you will explore its fascinating
          moons, such as Titan and Enceladus. Titan, Saturn's largest moon, has
          a world of lakes and rivers of methane and ethan, while Enceladus has
          geysers that expel water and water vapour into space.
        </Text>
        <Flex alignItems="flex-start">
          <Text
            color={"white"}
            fontWeight={"bold"}
            textDecoration={"underline"}
            paddingTop={"20px"}
          >
            Day 3: Exploration of the moons of Jupiter's Moons
          </Text>
        </Flex>
        <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
          You will have the opportunity to approach Saturn’s famous rings and
          explore its complex structure, composed of thousands of individual
          rings made up of ice and rock particles. You will be able to take
          stunning photos of this unique natural spectacle in the solar system.
        </Text>
        <Flex alignItems="flex-start">
          <Text
            color={"white"}
            fontWeight={"bold"}
            textDecoration={"underline"}
            paddingTop={"20px"}
          >
            Day 4: Observation of Saturn and its Storms
          </Text>
        </Flex>
        <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
          Saturn is known for its atmospheric storms and its distinctive
          hexagonal feature at its north pole. You will observe these features
          closely in its atmosphere and learn about Saturn’s unique winds and
          weather conditions.
        </Text>
        <Flex alignItems="flex-start">
          <Text
            color={"white"}
            fontWeight={"bold"}
            textDecoration={"underline"}
            paddingTop={"20px"}
          >
            Day 5: Exploration of the Minor Moons
          </Text>
        </Flex>
        <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
          You will continue to explore Saturn’s smaller moons, some of which
          have unusual geological features, such as Mimas, which has a large
          eye-shaped crater called Herschel.
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
          After an unforgettable experience in the vicinity of Saturn, you will
          return to Earth in your spacecraft. During the return trip, you will
          have time to reflect on your adventures and share stories with your
          fellow travellers.
        </Text>
        <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
          This trip to Saturn allows you to explore one of the most iconic
          planets in the solar system and its dazzling rings. Although it is not
          possible to land on Saturn, the proposed activities will give you an
          exciting and educational experience in deep space.
        </Text>
        <Button cursor={'pointer'} onClick={() => navigation(-1)}color={'white'} bgColor={'blue'} borderRadius={'13px'} padding={'10px'} marginBottom={'10px'}>Back to Home</Button>
      </Flex>
      </div>
    </>
  );
};

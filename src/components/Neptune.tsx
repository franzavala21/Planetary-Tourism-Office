import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import neptune from "../images/neptuno-paisaje.jpg";
export const Neptune = () => {
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
          bgImage={neptune}
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
            Neptune
          </Heading>
        </Flex>
        <Flex direction={"column"} margin={"10px"}>
          <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
            A tourist trip to Neptune, the eighth and most distant planet in the
            solar system, will be an incredible adventure.
          </Text>
          <br></br>
          <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
            Explore the Deep Mystery: Tourist Trip to Neptune
          </Text>

          <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
            Prepare for an unparalleled exploration trip on a tourist trip to
            Neptune, the enigmatic ice giant of the solar system. Although you
            will not be able to land on Neptune due to its gasy atmosphere, you
            will enjoy a number of exciting activities nearby.
          </Text>

          <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
            It is the eighth planet in the solar system and is a gas giant. It
            has a diameter of approximately 49,244 kilometers, making it the
            fourth largest planet in terms of size, after Jupiter, Saturn and
            Uranus. Like Uranus, it is composed mainly of hydrogen and helium,
            with traces of other compounds, such as methane, ammonia and water.
          </Text>

          <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
            The atmosphere is dense and consists mainly of hydrogen and helium,
            with a significant amount of methane. This methane is responsible
            for the characteristic deep blue color. The atmosphere also features
            active clouds and weather systems, including storms and extremely
            fast winds.
          </Text>

          <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
            Although less well known than Saturn's, Neptune also has thin, dark
            rings, composed mainly of ice and dust particles. These rings are
            difficult to observe from Earth and were discovered by spacecraft.
          </Text>

          <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
            It has 14 known moons, with Triton being the largest and most known.
            Triton is interesting because it has a retrograde orbit, which means
            it orbits in the opposite direction of Neptune's rotation,
            suggesting that it may have been captured by the planet's gravity
            rather than forming next to it.
          </Text>

          <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
            It is one of the coldest planets in the solar system, with
            temperatures falling below -200 degrees Celsius. (-328 grados
            Fahrenheit). Winds in its atmosphere are extremely fast, reaching
            speeds of up to 2,100 kilometers per hour. (1,300 millas per hour).
          </Text>
        </Flex>
        <Flex>
          <Heading as="h2" color={"white"} margin={"15px"} paddingTop={"10px"}>
            Embark on the Adventure of Your Life: Tourist Journey to Neptune
          </Heading>
        </Flex>

        <Flex alignItems="flex-start">
          <Text
            color={"white"}
            fontWeight={"bold"}
            textDecoration={"underline"}
            paddingTop={"20px"}
          >
            Day 1: Arrival to Neptune
          </Text>
        </Flex>
        <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
          Your exciting journey begins on Earth, where you will approach a
          state-of-the-art spacecraft designed to travel through deep space. For
          several years, you will head towards the vicinity of Neptune.
        </Text>

        <Flex alignItems="flex-start">
          <Text
            color={"white"}
            fontWeight={"bold"}
            textDecoration={"underline"}
            paddingTop={"20px"}
          >
            Day 2: Arrival to the moons of Neptune
          </Text>
        </Flex>
        <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
          Neptune has a diverse set of moons, including Triton, the largest and
          most well-known moon on the planet. You will explore some of these
          moons, studying their unique composition and geological
          characteristics.
        </Text>
        <Flex alignItems="flex-start">
          <Text
            color={"white"}
            fontWeight={"bold"}
            textDecoration={"underline"}
            paddingTop={"20px"}
          >
            Day 3: Observation of Neptune and its Atmosphere
          </Text>
        </Flex>
        <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
          From a safe distance, you will observe its characteristic deep blue
          color, caused by the presence of methane in its atmosphere. You will
          study its storms and turbulent weather systems.
        </Text>
        <Flex alignItems="flex-start">
          <Text
            color={"white"}
            fontWeight={"bold"}
            textDecoration={"underline"}
            paddingTop={"20px"}
          >
            Day 4: Exploration of Neptune's Rings and Systems
          </Text>
        </Flex>
        <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
          Neptune has thin, dark rings and fragmented ring systems. You will
          explore these rings and the ice and dust particles that compose them
        </Text>
        <Flex alignItems="flex-start">
          <Text
            color={"white"}
            fontWeight={"bold"}
            textDecoration={"underline"}
            paddingTop={"20px"}
          >
            Day 5: Dive into the Deep Atmosphere
          </Text>
        </Flex>
        <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
          Using probes and unmanned spacecraft, you will venture into its deep
          atmosphere by studying its clouds, extremely fast winds and
          atmospheric composition.
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
          After an unforgettable experience in the vicinity of Neptune, you will
          return to Earth in your spacecraft. During the return trip, you will
          have time to reflect on your amazing adventures and share stories with
          your fellow passengers.
        </Text>
        <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
          This trip to Neptune allows you to explore one of the most mysterious
          and enigmatic planets in the solar system, along with its moons and
          ring systems. It's an exciting experience to a place where in the past
          it was science fiction
        </Text>
        <Button cursor={'pointer'} onClick={() => navigation(-1)}color={'white'} bgColor={'blue'} borderRadius={'13px'} padding={'10px'} marginBottom={'10px'}>Back to Home</Button>
      </Flex>
      </div>
    </>
  );
};

import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import jupiter from "../images/paisajejupiter.jpg";
export const Jupiter = () => {
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
          bgImage={jupiter}
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
            Jupiter
          </Heading>
        </Flex>
        <Flex direction={"column"} margin={"10px"}>
          <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
            Discover the Greatness of Jupiter: Tourist Trip to the Gas Giant
          </Text>
          <br></br>
          <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
            Get ready for an unparalleled adventure on a tourist trip to
            Jupiter, the gas giant of the solar system. Although it is not
            possible to land on the surface of Jupiter due to its dense
            atmosphere and lack of a solid surface, you can enjoy an exciting
            experience in its vicinity.
          </Text>

          <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
            Jupiter is the largest planet in our solar system and is a gas giant
            composed mainly of hydrogen and helium. Its diameter is
            approximately 139,822 kilometers, which is more than 11 times the
            diameter of the Earth. Jupiter's atmosphere is extremely dense and
            consists mainly of molecular hydrogen and helium, with traces of
            other gases such as methane, ammonia, water vapour and other
            compounds.
          </Text>

          <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
            Jupiter has a large number of moons, with more than 80 known moons
            to date. Some of Jupiter's largest and most interesting moons
            include Io, Europa, Ganymede and Calisto. Europe, in particular, has
            been of scientific interest because of the possibility that it has a
            subsurface ocean that could harbor life. Although Jupiter's rings
            are not as impressive as those of Saturn, the planet has a system of
            rings made up of dust particles. These rings are difficult to see
            from Earth and were discovered by spacecraft.
          </Text>
        </Flex>
        <Flex>
          <Heading as="h2" color={"white"} margin={"15px"} paddingTop={"10px"}>
            Embark on the Adventure of Your Life: Tourist Journey to Jupiter
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
          several months, you will travel to the closest orbits of Jupiter.
        </Text>

        <Flex alignItems="flex-start">
          <Text
            color={"white"}
            fontWeight={"bold"}
            textDecoration={"underline"}
            paddingTop={"20px"}
          >
            Day 2: Great Red Spot Observation
          </Text>
        </Flex>
        <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
          Once in the vicinity of Jupiter, you will have the opportunity to
          observe closely the Great Red Spot, a giant storm in the planet’s
          atmosphere that has existed for centuries. You will be able to study
          this unique feature and observe its tumultuous winds.
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
          Jupiter has many interesting moons, such as Io, Europa, Ganymede and
          Calisto. Using smaller spacecraft, you can explore these moons,
          discovering their unique geology, ice caves and underground oceans.
        </Text>
        <Flex alignItems="flex-start">
          <Text
            color={"white"}
            fontWeight={"bold"}
            textDecoration={"underline"}
            paddingTop={"20px"}
          >
            Day 4: Navigation in Jupiter's Magnetosphere
          </Text>
        </Flex>
        <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
          Jupiter has an extremely powerful magnetic field that creates a vast
          magnetosphere that extends throughout space near the planet.
          Experience navigating through this region, where you will see auroras
          and experience exceptional magnetic fields.
        </Text>
        <Flex alignItems="flex-start">
          <Text
            color={"white"}
            fontWeight={"bold"}
            textDecoration={"underline"}
            paddingTop={"20px"}
          >
            Day 5: Observation of Rings and Grazing Moons
          </Text>
        </Flex>
        <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
          Jupiter has a system of rings and pastoral moons that help maintain
          the structure of the rings. You will have the opportunity to observe
          these rings closely and see the shepherding moons in action.
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
          After an unforgettable experience in the vicinity of Jupiter, you will
          return to Earth in your spacecraft. During the return trip, you will
          have time to reflect on your adventures and share stories with your
          fellow travellers.
        </Text>
        <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
          This trip to Jupiter will allow you to explore the greatness of one of
          the most majestic planets in the solar system. Although it is not
          possible to land in its gaseous atmosphere, the activities proposed
          allow you to enjoy an exciting experience near Jupiter and its
          fascinating moons.
        </Text>
        <Button cursor={'pointer'} onClick={() => navigation(-1)}color={'white'} bgColor={'blue'} borderRadius={'13px'} padding={'10px'} marginBottom={'10px'}>Back to home</Button>
      </Flex>
      </div>
    </>
  );
};

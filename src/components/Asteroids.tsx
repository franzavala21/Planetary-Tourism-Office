import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import asteroids from "../images/paisajeasteroid.jpg";
import { useNavigate } from "react-router-dom";

export const Asteroids = () => {
  const navigation = useNavigate();

  return (
    
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
          bgImage={asteroids}
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
            Asteroids
          </Heading>
        </Flex>
        <Flex direction={"column"} margin={"10px"}>
          <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
            Explore the Asteroid Belt: A Deep Space Tour
          </Text>
          <br></br>
          <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
            Prepare for the adventure of your life on a tourist trip to the
            asteroid belt, a region in space between Mars and Jupiter full of
            space rocks and exciting exploration opportunities.
          </Text>
        </Flex>
        <Flex>
          <Heading as="h2" color={"white"} margin={"15px"} paddingTop={"10px"}>
            Embark on the Adventure of Your Life: Tourist Journey to Asteroids
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
          state-of-the-art spacecraft designed to travel safely and comfortably
          through deep space. For several days, you will head towards the
          asteroid belt.
        </Text>

        <Flex alignItems="flex-start">
          <Text
            color={"white"}
            fontWeight={"bold"}
            textDecoration={"underline"}
            paddingTop={"20px"}
          >
            Day 2: Arrival at the Asteroid Belt
          </Text>
        </Flex>
        <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
          After crossing interplanetary space, you will reach a vast region
          populated by thousands of space rocks of different sizes and
          compositions.
        </Text>
        <Flex alignItems="flex-start">
          <Text
            color={"white"}
            fontWeight={"bold"}
            textDecoration={"underline"}
            paddingTop={"20px"}
          >
            Day 3: Asteroid Exploration
          </Text>
        </Flex>
        <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
          Using smaller spacecraft equipped to maneuver at low gravity, you will
          venture to visit several selected asteroids. Some of these may be
          ancient remains from the formation of the solar system, while others
          may have unique geological characteristics.
        </Text>
        <Flex alignItems="flex-start">
          <Text
            color={"white"}
            fontWeight={"bold"}
            textDecoration={"underline"}
            paddingTop={"20px"}
          >
            Day 4: Space Excursion
          </Text>
        </Flex>
        <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
          During this day, you will have the opportunity to take a walk, wearing
          a specialized space suit, allowing you to float between the asteroids
          and experience the ingravity of space.
        </Text>
        <Flex alignItems="flex-start">
          <Text
            color={"white"}
            fontWeight={"bold"}
            textDecoration={"underline"}
            paddingTop={"20px"}
          >
            Day 5: Star Observation
          </Text>
        </Flex>
        <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
          In the darkness of deep space, away from the light pollution of the
          Earth, you will have the opportunity to enjoy a spectacular starry
          night and observe the wonders of the universe.
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
          After exciting days of exploration in the asteroid belt, you will
          return to Earth in your spacecraft. During the return trip, you will
          have time to reflect on your adventures and share stories with your
          fellow travelers.
        </Text>
        <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
          This asteroid belt tour offers a unique experience for exploring deep
          space and closely observing some of the oldest and most mysterious
          objects in our solar system.
        </Text>
        <Button cursor={'pointer'} onClick={() => navigation(-1)}color={'white'} bgColor={'blue'} borderRadius={'13px'} padding={'10px'} marginBottom={'10px'}>Back to Home</Button>
      </Flex>
      </div>
  
  );
};

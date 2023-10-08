import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import urano from "../images/paisajeurano.jpg";
export const Uranus = () => {
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
          bgImage={urano}
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
            Uranus
          </Heading>
        </Flex>
        <Flex direction={"column"} margin={"10px"}>
          <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
            A tourist trip to Uranus would be an exciting experience
          </Text>
          <br></br>
          <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
            Get ready for a unique space odyssey on a tourist trip to Uranus,
            the mysterious ice giant of the solar system. Although you will not
            be able to land, due to its gasy atmosphere, you will enjoy a number
            of exciting activities.
          </Text>

          <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
            Given its extreme inclination and unique characteristics, this
            intriguing and mysterious planet continues to be the subject of
            study and exploration in the scientific community.
          </Text>
          <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
            It is the seventh planet in the solar system and is a gas giant. It
            has a diameter of approximately 51,118 kilometers, making it the
            third largest in terms of size, after Jupiter and Saturn. The
            composition of Uranus is mainly hydrogen and helium, with traces of
            other compounds, such as methane, ammonia and water.
          </Text>
          <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
            The atmosphere is composed mainly of molecular hydrogen and helium,
            with a significant amount of methane. This high concentration of
            methane in the atmosphere is what gives Uranus its distinctive green
            blue color.
          </Text>
          <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
            It is notable for its extreme inclination. Unlike other planets that
            rotate almost vertically in relation to their orbit, Uranus is
            inclined at an angle of approximately 98 degrees. This means it
            rotates virtually sideways, contributing to its extreme seasons and
            unique weather patterns
          </Text>
          <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
            It has a thin, dark ring system composed of ice and dust particles.
            These rings are less visible and spectacular than those of Saturn,
            but they are still an intriguing feature of the planet.
          </Text>
        </Flex>
        <Flex>
          <Heading as="h2" color={"white"} margin={"15px"} paddingTop={"10px"}>
            Embark on the Adventure of Your Life: Tourist Journey to uranus
          </Heading>
        </Flex>
        <Flex alignItems="flex-start">
          <Text
            color={"white"}
            fontWeight={"bold"}
            textDecoration={"underline"}
            paddingTop={"20px"}
          >
            Day 1: Arrival to Venus
          </Text>
        </Flex>
        <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
          Your exciting journey begins on Earth, where you will approach a
          state-of-the-art spacecraft designed to travel through deep space to
          the vicinity of Uranus.
        </Text>

        <Flex alignItems="flex-start">
          <Text
            color={"white"}
            fontWeight={"bold"}
            textDecoration={"underline"}
            paddingTop={"20px"}
          >
            Day 2: Exploration of the moons of Uranus
          </Text>
        </Flex>
        <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
          One of the most notable features of Venus is its thick atmosphere
          composed mainly of carbon dioxide and sulfuric acid. During this day,
          you will be able to explore the sulfuric acid clouds through specially
          designed spacecraft. These clouds hide a mysterious world of unique
          particles and structures.
        </Text>
        <Flex alignItems="flex-start">
          <Text
            color={"white"}
            fontWeight={"bold"}
            textDecoration={"underline"}
            paddingTop={"20px"}
          >
            Day 3: Observation of Venus from the Orbit
          </Text>
        </Flex>
        <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
          On this day, you will have the opportunity to observe Venus from the
          orbit aboard our spacecraft. From this point of view, you can
          appreciate the majesty of the cloud layers of Venus and its volcanic
          landscape.
        </Text>
        <Flex alignItems="flex-start">
          <Text
            color={"white"}
            fontWeight={"bold"}
            textDecoration={"underline"}
            paddingTop={"20px"}
          >
            Day 4: Underground Exploration
          </Text>
        </Flex>
        <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
          Since the surface of Venus is extremely hot, with temperatures that
          can exceed 450 degrees Celsius (850 degrees Fahrenheit), it is
          impossible to explore it directly. However, you can visit an
          underground station designed to withstand extreme heat, where you can
          study the rocks and the geology of Venus.
        </Text>
        <Flex alignItems="flex-start">
          <Text
            color={"white"}
            fontWeight={"bold"}
            textDecoration={"underline"}
            paddingTop={"20px"}
          >
            Day 5: Admire the Venusian Dawn
          </Text>
        </Flex>
        <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
          Experience one of the most impressive views of your life while
          watching the Venetian sunrise. Due to its dense atmosphere, Venus
          experiences a long, beautiful sunrise that illuminates its clouds
          spectacularly. After an unforgettable experience on Venus, you will
          return to Earth in your specially designed spacecraft. During the
          return trip, you will have time to reflect on your adventures and
          share stories with your fellow travellers. This tourist trip to Venus
          is a unique opportunity to explore one of the most extreme and
          enigmatic places in the solar system. Our advanced technology ensures
          your safety at all times as you venture into this exciting space
          destination. Prepare for a journey that will take you beyond the
          borders of the Earth and to the burning heart of Venus!
        </Text>
        <Button cursor={'pointer'} onClick={() => navigation(-1)}color={'white'} bgColor={'blue'} borderRadius={'13px'} padding={'10px'} marginBottom={'10px'}>Back to Home</Button>
      </Flex>
      </div>
    </>
  );
};

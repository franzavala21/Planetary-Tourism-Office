import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import venus from "../images/paisaje venus.jpg";
export const Venus = () => {
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
          bgImage={venus}
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
            Venus
          </Heading>
        </Flex>
        <Flex direction={"column"} margin={"10px"}>
          <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
            It is one of the most inhospitable and extreme planets in our solar
            system due to its dense and hot atmosphere. Venus is the second
            closest planet to the Sun and is similar in size and composition to
            the Earth. It has a diameter of approximately 12,104 kilometers,
            making it barely slightly smaller than our planet. Like Earth, Venus
            is composed mainly of rocks and metals.
          </Text>
          <br></br>
          <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
            Venus has an extremely dense and toxic atmosphere, composed mainly
            of carbon dioxide with traces of nitrogen and other gases. This
            dense atmosphere traps the sun's heat into an uncontrolled
            greenhouse effect, making the surface temperature the highest of any
            planet in the solar system, reaching around 465 degrees Celsius.
            (869 grados Fahrenheit).
          </Text>

          <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
            Due to its dense atmosphere, the pressure on the surface of Venus is
            more than 90 times that of the Earth. This would equal the pressure
            you would feel at a depth of almost 900 meters underwater on Earth.
            Venus has a retrograde rotation, which means it rotates in the
            opposite direction to most other planets in the solar system. Its
            day is longer than its year, with a full rotation taking about 243
            Earth days, while its orbit around the Sun takes about 225 Earth
            days.
          </Text>
        </Flex>
        <Flex>
          <Heading as="h2" color={"white"} margin={"15px"} paddingTop={"10px"}>
            Embark on the Adventure of Your Life: Tourist Journey to Venus
          </Heading>
        </Flex>
        <Flex>
          <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
            Get ready for the most daring travel experience of your life, a
            sightseeing trip to Venus, the hottest and most mysterious planet in
            our solar system. Despite its hostile environment, we have designed
            an exciting itinerary that will allow you to explore the unique
            wonders of Venus in a safe and comfortable way.
          </Text>
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
          state-of-the-art spacecraft specially designed to withstand the
          extreme conditions of Venus. After a trip of several months, you will
          reach Venus and enter its dense atmosphere.
        </Text>

        <Flex alignItems="flex-start">
          <Text
            color={"white"}
            fontWeight={"bold"}
            textDecoration={"underline"}
            paddingTop={"20px"}
          >
            Day 2: Visit to the Acid Clouds
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

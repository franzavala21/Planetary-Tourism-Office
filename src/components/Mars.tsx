import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import mars from "../images/paisajemarte.jpg";
export const Mars = () => {
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
          bgImage={mars}
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
            Mars
          </Heading>
        </Flex>
        <Flex direction={"column"} margin={"10px"}>
          <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
            Discover a New World: Tourist Trip to Mars
          </Text>
          <br></br>
          <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
            Prepare for a unique experience in life with our exciting tourist
            trip to Mars, the fourth planet in the solar system. This trip will
            take you to explore stunning Martian landscapes and immerse yourself
            in emerging Martian culture. Mars is the fourth planet in our solar
            system and is approximately half the size of the Earth, with a
            diameter of about 6,779 kilometers. It is composed mainly of rock
            and metal, similar in composition to the Earth and Venus.
          </Text>

          <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
            Its surface is diverse and has a varied landscape that includes
            craters, canyons, mountains and plains. It has the distinctive
            feature of having Mount Olympus, the largest volcano in the Solar
            System, and the Valles Marineris Canyon, which is the largest and
            deepest known canyon in the solar system.
          </Text>

          <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
            Its atmosphere is extremely thin compared to that of Earth and is
            composed mainly of carbon dioxide, with traces of nitrogen and
            argon, and its atmospheric pressure on the surface is less than 1%
            of that. Gravity is approximately one-third that of Earth, which
            means you would weigh much less on Mars than on this planet. This
            difference in gravity affects the way objects fall and how living
            beings move on Mars.
          </Text>
        </Flex>
        <Flex>
          <Heading as="h2" color={"white"} margin={"15px"} paddingTop={"10px"}>
            Embark on the Adventure of Your Life: Tourist Journey to Mars
          </Heading>
        </Flex>

        <Flex alignItems="flex-start">
          <Text
            color={"white"}
            fontWeight={"bold"}
            textDecoration={"underline"}
            paddingTop={"20px"}
          >
            Day 1: Arrival at the Martian Base
          </Text>
        </Flex>
        <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
          Your exciting journey begins on Earth, where you will approach a
          state-of-the-art spacecraft specially designed for the trip to Mars.
          After several months, you will reach the Martian base, where you will
          stay in a comfortable and secure space station.
        </Text>

        <Flex alignItems="flex-start">
          <Text
            color={"white"}
            fontWeight={"bold"}
            textDecoration={"underline"}
            paddingTop={"20px"}
          >
            Day 2: Martian Surface Excursion
          </Text>
        </Flex>
        <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
          Equipped with advanced space costumes, you will venture to take a walk
          on the surface of Mars. Explore the rocky landscape and see unique
          martian craters, canyons and mountains. The gravity on Mars is
          approximately one-third that of Earth, which will allow you to move
          differently.
        </Text>
        <Flex alignItems="flex-start">
          <Text
            color={"white"}
            fontWeight={"bold"}
            textDecoration={"underline"}
            paddingTop={"20px"}
          >
            Day 3: Visit to the Martian Valley
          </Text>
        </Flex>
        <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
          Today, you will head to the famous Martian valleys, such as the Valles
          Marineris, which is the largest canyon in the solar system. You can
          walk through the cliffs, observe the geological formations and enjoy
          spectacular views.
        </Text>
        <Flex alignItems="flex-start">
          <Text
            color={"white"}
            fontWeight={"bold"}
            textDecoration={"underline"}
            paddingTop={"20px"}
          >
            Day 4: Explore Mars Caves
          </Text>
        </Flex>
        <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
          Mars is known to have natural caves in its subsoil that could have
          offered shelter to life in the past. You will descend to one of these
          caves to explore its unique geology and discover clues about the
          history of Mars.
        </Text>
        <Flex alignItems="flex-start">
          <Text
            color={"white"}
            fontWeight={"bold"}
            textDecoration={"underline"}
            paddingTop={"20px"}
          >
            Day 5: Experience Mars Life
          </Text>
        </Flex>
        <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
          Today you will have the opportunity to experience everyday life on
          Mars at the base, interacting with Mars settlers and learning about
          their challenges and achievements in building a society on the Red
          Planet. You can also taste food grown on Mars and enjoy local Martian
          cuisine.
        </Text>
        <Flex alignItems="flex-start">
          <Text
            color={"white"}
            fontWeight={"bold"}
            textDecoration={"underline"}
            paddingTop={"20px"}
          >
            Day 6: Ascension to Mount Olympus
          </Text>
        </Flex>
        <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
          Today you will embark on an exciting adventure to explore Mount
          Olympus, the largest volcano in the solar system. After a spacecraft
          trip from the Martian base, you will reach the volcano slopes.
        </Text>
        <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
          This tourist trip is a unique opportunity to experience the excitement
          of space exploration and discover the beauty of our natural satellite.
          Our advanced technology ensures your safety and comfort at all times
          as you explore the lunar world. Get ready for an adventure that will
          take you beyond the confines of Earth and into the mysterious world of
          the Moon!
        </Text>
        <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
          Tomorrow on Mount Olympus: You will start early to take advantage of
          the morning freshness on Mars as you prepare to climb through varied
          terrain, from lava plains to sharp slopes. You will enjoy stunning
          panoramic views as you climb.
        </Text>
        <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
          Afternoon on Mount Olympus: When you reach the summit of Mount
          Olympus, you will be at an altitude of approximately 21 kilometers
          above the surface of Mars. From here, you will have a stunning view of
          Mars and you will be able to appreciate the magnitude of this giant
          volcano. Night on Mount Olympus: At the top, you will spend the night
          in a specially equipped camp, where you can enjoy the martian star
          views and learn about the geology of Mount Olimpus from experts in the
          area.
        </Text>
        <Text
          color={"white"}
          fontWeight={"bold"}
          textDecoration={"underline"}
          paddingTop={"20px"}
        >
          Day 7: Descent and Return
        </Text>
        <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
          After spending a night on the top of Mount Olympus, you will start the
          early morning descent. During the descent, you will have the
          opportunity to collect unique geological samples of the volcano and
          experience the unique feeling of walking in the martian gravity.
        </Text>
        <Text
          color={"white"}
          fontWeight={"bold"}
          textDecoration={"underline"}
          paddingTop={"20px"}
        >
          Day 8: Return to Base
        </Text>
        <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
          You will return to the Martian base at the end of the day, where you
          will have time to rest and share your experiences on Mount Olympus
          with your traveling companions.
        </Text>
        <Text
          color={"white"}
          fontWeight={"bold"}
          textDecoration={"underline"}
          paddingTop={"20px"}
        >
          Day 9: Return to Earth
        </Text>
        <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
          After an unforgettable experience on Mars, you will return to Earth in
          your specially designed spacecraft. You will have time to reflect on
          your adventures and share stories with your fellow travellers during
          the return trip.
        </Text>
        <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
          This sightseeing trip to Mars is a unique opportunity to explore a
          whole new world and witness the exciting colonization of the Red
          Planet. Our advanced technology ensures your safety and comfort at all
          times as you explore the Martian world. Get ready for an adventure
          that will take you beyond the confines of Earth and into the exciting
          future of space exploration on Mars!
        </Text>
        <Button cursor={'pointer'} onClick={() => navigation(-1)}color={'white'} bgColor={'blue'} borderRadius={'13px'} padding={'10px'} marginBottom={'10px'}>Back to Home</Button>
      </Flex>
      </div>
    </>
  );
};

import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import moon from "../images/paisajeluna.jpg";

export const Moon = () => {
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
          bgImage={moon}
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
            Moon
          </Heading>
        </Flex>
        <Flex direction={"column"} margin={"10px"}>
          <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
            Explore the Closest Place to Home: Sightseeing Trip to the Moon
          </Text>
          <br></br>
          <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
            Prepare to live the adventure of your life on a tourist trip to our
            closest neighbor, the Moon. This will take you to a world of
            fascinating lunar landscapes and unique activities that you can only
            experience in space. The Moon is the fifth largest satellite of the
            solar system and the natural satellites of the Earth. It has a
            diameter of approximately 3,474 kilometers, which makes it about
            one-sixth the size of the Earth. The average distance between this
            and the Moon is approximately 384,400 kilometers.
          </Text>

          <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
            It is in a synchronous orbit with the Earth, which means that it
            always shows the same face towards our planet. It has an extremely
            tenuous and almost non-existent atmosphere, composed mainly of
            helium and traces of other gases. Because of its weak gravity, it
            cannot retain a significant atmosphere.
          </Text>

          <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
            It experiences extremely variable temperatures due to the lack of an
            atmosphere that regulates the temperature. During lunar day, the
            temperature can exceed 127 degrees Celsius (260 degrees Fahrenheit),
            while during lunar night, it can fall to -173 degrees. (-280 grados
            Fahrenheit).
          </Text>
        </Flex>
        <Flex>
          <Heading as="h2" color={"white"} margin={"15px"} paddingTop={"10px"}>
            Embark on the Adventure of Your Life: Tourist Journey to Moon
          </Heading>
        </Flex>

        <Flex alignItems="flex-start">
          <Text
            color={"white"}
            fontWeight={"bold"}
            textDecoration={"underline"}
            paddingTop={"20px"}
          >
            Day 1: Arrival at the Lunar Base
          </Text>
        </Flex>
        <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
          Your exciting journey begins on Earth, where you will approach a
          state-of-the-art spacecraft to the Moon. After a short flight, you
          will reach the lunar base, where you will stay in a comfortable and
          secure space station.
        </Text>

        <Flex alignItems="flex-start">
          <Text
            color={"white"}
            fontWeight={"bold"}
            textDecoration={"underline"}
            paddingTop={"20px"}
          >
            Day 2: Walk on the Lunar Surface
          </Text>
        </Flex>
        <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
          After an orientation and training on the lunar base, you will venture
          to take a walk on the surface. Equipped with state-of-the-art space
          suits, you will walk on the lunar sand and observe the craters and
          unique rock formations closely.
        </Text>
        <Flex alignItems="flex-start">
          <Text
            color={"white"}
            fontWeight={"bold"}
            textDecoration={"underline"}
            paddingTop={"20px"}
          >
            Day 3: Astronomical Observation
          </Text>
        </Flex>
        <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
          The Moon offers one of the best places for observing the night sky. In
          this exciting evening, you will have the opportunity to use advanced
          telescopes to explore deep space and observe the Earth from the Moon.
        </Text>
        <Flex alignItems="flex-start">
          <Text
            color={"white"}
            fontWeight={"bold"}
            textDecoration={"underline"}
            paddingTop={"20px"}
          >
            Day 4: Tour to a Lunar Crater
          </Text>
        </Flex>
        <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
          Today you will explore one of the largest and most famous craters on
          the Moon, such as the Tycho Crater. Discover its unique geology and
          walk along its edge, enjoying stunning panoramic views of the lunar
          surface.
        </Text>
        <Flex alignItems="flex-start">
          <Text
            color={"white"}
            fontWeight={"bold"}
            textDecoration={"underline"}
            paddingTop={"20px"}
          >
            Day 5: Experience Lunar Gravity
          </Text>
        </Flex>
        <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
          The Moon has only one-sixth of Earth's gravity, allowing you to
          experience the unique feeling of moving with ease. You can try
          activities like jumping very high and throwing objects at surprising
          distances.
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
          After an unforgettable experience on the Moon, you will return to
          Earth in your spacecraft. You will have time to reflect on your
          adventures and share stories with your fellow travellers during the
          return trip.
        </Text>
        <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
          This tourist trip is a unique opportunity to experience the excitement
          of space exploration and discover the beauty of our natural satellite.
          Our advanced technology ensures your safety and comfort at all times
          as you explore the lunar world. Get ready for an adventure that will
          take you beyond the confines of Earth and into the mysterious world of
          the Moon!
        </Text>
        <Button cursor={'pointer'} onClick={() => navigation(-1)}color={'white'} bgColor={'blue'} borderRadius={'13px'} padding={'10px'} marginBottom={'10px'}>Back to Home</Button>
      </Flex>
      </div>
    </>
  );
};

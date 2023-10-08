import { Flex, Heading, Text, Button } from "@chakra-ui/react";
import mercurio from "../images/paisaje-mercurio.jpg";
import { useNavigate } from "react-router-dom";
export const Mercury = () => {
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
          bgImage={mercurio}
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
            Mercury
          </Heading>
        </Flex>
        <Flex direction={"column"} margin={"10px"}>
          <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
            Discover the Wonder of Heat: Your Tourist Trip to Mercury
          </Text>
          <br></br>
          <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
            If you are looking for a unique interplanetary adventure in life,
            look no further than our exciting tourist trip to Mercury. Although
            Mercury is known to be the closest planet to the Sun and to have
            extremely high temperatures, this experience will take you to
            explore its beauty and mystery like never before.
          </Text>

          <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
            It orbits very close to the Sun and completes an orbit in
            approximately 88 Earth days, its rotation period takes approx. 59
            Earth days. This means that a day on Mercury is longer than a year
            on Merkurius (a full orbit around the Sun).
          </Text>

          <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
            Due to its proximity to the Sun and its lack of a significant
            atmosphere to retain heat, temperatures on Mercury vary enormously.
            On the face exposed to the Sun, they can exceed 400 degrees Celsius
            (750 degrees Fahrenheit), while on the face opposite the Sun they
            can fall below -180 degrees. (-290 grados Fahrenheit).
          </Text>
          <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
            Despite its burning temperatures, it has been discovered that in the
            polar regions of Mercury there is ice water, sheltered in
            permanently shaded craters.
          </Text>
        </Flex>
        <Flex>
          <Heading as="h2" color={"white"} margin={"15px"} paddingTop={"10px"}>
            Embark on the Adventure of Your Life: Tourist Journey to Mercury
          </Heading>
        </Flex>

        <Flex alignItems="flex-start">
          <Text
            color={"white"}
            fontWeight={"bold"}
            textDecoration={"underline"}
            paddingTop={"20px"}
          >
            Day 1: Arrival to Mercury
          </Text>
        </Flex>
        <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
          Your exciting journey begins on Earth, where you will approach a
          state-of-the-art spacecraft that will take you to Mercury. After an
          exciting space trip of several days, you will finally land on the
          surface of Mercury.
        </Text>

        <Flex alignItems="flex-start">
          <Text
            color={"white"}
            fontWeight={"bold"}
            textDecoration={"underline"}
            paddingTop={"20px"}
          >
            Day 2: Explore the Caloris Region
          </Text>
        </Flex>
        <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
          On the second day, you will venture to explore the Caloris region, an
          immense impact basin filled with steep landscapes and mysterious
          geological formations. Although the temperature is extreme, our
          advanced space suit technology will keep you safe and comfortable.
        </Text>
        <Flex alignItems="flex-start">
          <Text
            color={"white"}
            fontWeight={"bold"}
            textDecoration={"underline"}
            paddingTop={"20px"}
          >
            Day 3: Visit the Craters
          </Text>
        </Flex>
        <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
          Today you will visit some of Mercury’s most impressive craters,
          including Kuiper Crater, which is more than 100 kilometres in
          diameter. You will be able to walk through the surface marked by
          asteroid and meteoritic impacts over the millennia.
        </Text>
        <Flex alignItems="flex-start">
          <Text
            color={"white"}
            fontWeight={"bold"}
            textDecoration={"underline"}
            paddingTop={"20px"}
          >
            Day 4: Relax in the Solar Thermal
          </Text>
        </Flex>
        <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
          To escape the extreme heat of Mercury, enjoy a relaxing day at the
          Solar Thermas. These natural thermal springs, heated by intense solar
          radiation, offer a unique place to relax and rejuvenate in a
          spectacular environment.
        </Text>
        <Flex alignItems="flex-start">
          <Text
            color={"white"}
            fontWeight={"bold"}
            textDecoration={"underline"}
            paddingTop={"20px"}
          >
            Day 5: Sunset on Mercury
          </Text>
        </Flex>
        <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
          One of the highlights of your trip will be to observe the stunning
          sunset. Due to the lack of significant atmosphere, the sun will look
          like a giant red sphere on the horizon, creating a visual spectacle
          you will never forget.
        </Text>
        <Flex alignItems="flex-start">
          <Text
            color={"white"}
            fontWeight={"bold"}
            textDecoration={"underline"}
            paddingTop={"20px"}
          >
            Day 6: Journey Back to Earth
          </Text>
        </Flex>
        <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
          After an unforgettable experience on Mercury, you will return to Earth
          in your spacecraft. You will have time to reflect on your adventures
          and share stories with your fellow travellers during the return trip.
        </Text>
        <Text as="b" color={"white"} textAlign={"justify"} margin={"20px"}>
          This tourist trip to Mercury is a unique experience that will allow
          you to explore one of the most challenging and fascinating planets in
          our solar system. While the extreme heat of Mercury can be
          intimidating, our advanced technology ensures your safety and comfort
          at all times. Prepare for an adventure that will take you beyond the
          borders of the Earth and to the heart of the solar system!
        </Text>
        <Button cursor={'pointer'} onClick={() => navigation(-1)}color={'white'} bgColor={'blue'} borderRadius={'13px'} padding={'10px'} marginBottom={'10px'}>Back to Home</Button>
      </Flex>
      </div>
    </>
  );
};

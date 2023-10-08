import { Text, Flex, Grid, GridItem, Image, Link } from "@chakra-ui/react";
import moon from "../src/images/sat_moon.png";
import jupiter from "../src/images/planet_jupiter.png";
import mars from "../src/images/planet_mars.png";
import venus from "../src/images/planet_venus.png";
import uranus from "../src/images/planet_uranus.png";
import saturn from "../src/images/planet_saturn.png";
import neptune from "../src/images/kisspng-planet-neptune-solar-system-earth-uranus-outer-space-5aca05bc209ed2.1095111215231891801336.png";
import mercury from "../src/images/Mercury-Planet-PNG-HD-Image.png";
import asteroids from "../src/images/asteroids.jpg";
import kuiper from "../src/images/kuiper-belt.jpg";
export const Home = () => {
  return (
    <div className="center">
      <Flex
        h="100vh"
        w="100vw"
        direction="column"
        justify={"center"}
        align={"center"}
        position="relative"
        overflow="not-scroll"
      >
        <Flex
          backgroundColor="black"
          width="100%"
          direction={"column"}
          zIndex="10"
        >
          <div className="stars"></div>
          <div className="stars2"></div>
          <div className="stars3"></div>

          <Text
            color="white"
            bg="black"
            paddingTop={"20px"}
            textAlign={"center"}
            fontSize={"30px"}
          >
            Planetary Travel Guides
          </Text>

          <Grid
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(5, 1fr)"
            gap={4}
            m={20}
            justifyContent={"auto"}
            alignItems={"center"}
          >
            <GridItem
              rowSpan={1}
              colSpan={1}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              m={12}
            >
              <Text as="b" color="white">
                Mercury
              </Text>
              <Link href="/mercury">
                <Image
                  src={mercury}
                  alt="tierra"
                  h={160}
                  w={160}
                  _hover={{
                    transform: "scale(1.1) rotate(360deg)", // Escala y gira en hover
                    cursor: "pointer",
                    transition: "10s",
                    animation: "rotate360 0s infinite", // Aplica la animación
                  }}
                />
              </Link>
            </GridItem>
            <GridItem
              rowSpan={1}
              colSpan={1}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              m={12}
            >
              <Text as="b" color="white">
                Venus
              </Text>
              <Link href="/venus">
                <Image
                  src={venus}
                  alt="tierra"
                  h={160}
                  w={160}
                  _hover={{
                    transform: "scale(1) rotate(360deg)", // Escala y gira en hover
                    cursor: "pointer",
                    transition: "10s",
                    animation: "rotate360 0s infinite", // Aplica la animación
                  }}
                />
              </Link>
            </GridItem>
            <GridItem
              rowSpan={1}
              colSpan={1}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              m={12}
            >
              <Text as="b" color="white">
                Moon
              </Text>
              <Link href="/moon">
                <Image
                  src={moon}
                  alt="tierra"
                  h={160}
                  w={160}
                  _hover={{
                    transform: "scale(1.1) rotate(360deg)", // Escala y gira en hover
                    cursor: "pointer",
                    transition: "10s",
                    animation: "rotate360 0s infinite", // Aplica la animación
                  }}
                />
              </Link>
            </GridItem>
            <GridItem
              rowSpan={1}
              colSpan={1}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              m={12}
            >
              <Text as="b" color="white">
                Mars
              </Text>
              <Link href="/mars">
                <Image
                  src={mars}
                  alt="tierra"
                  h={160}
                  w={160}
                  _hover={{
                    transform: "scale(1.1) rotate(360deg)", // Escala y gira en hover
                    cursor: "pointer",
                    transition: "10s",
                    animation: "rotate360 0s infinite", // Aplica la animación
                  }}
                />
              </Link>
            </GridItem>
            <GridItem
              rowSpan={1}
              colSpan={1}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              m={12}
            >
              <Text as="b" color="white">
                Asteroids
              </Text>
              <Link href="/asteroids">
                <Image
                  src={asteroids}
                  alt="tierra"
                  h={160}
                  w={160}
                  _hover={{ cursor: "pointer" }}
                />
              </Link>
            </GridItem>
            <GridItem
              rowSpan={2}
              colSpan={1}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Text as="b" color="white">
                Jupiter
              </Text>
              <Link href="/jupiter">
                <Image
                  src={jupiter}
                  alt="tierra"
                  h={160}
                  w={160}
                  _hover={{
                    transform: "scale(1) rotate(360deg)", // Escala y gira en hover
                    cursor: "pointer",
                    transition: "10s",
                    animation: "rotate360 0s infinite", // Aplica la animación
                  }}
                />
              </Link>
            </GridItem>
            <GridItem
              rowSpan={2}
              colSpan={1}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Text as="b" color="white">
                Saturn
              </Text>
              <Link href="/saturn">
                <Image
                  src={saturn}
                  alt="tierra"
                  h={160}
                  w={160}
                  _hover={{
                    transform: "scale(1.1) rotate(360deg)", // Escala y gira en hover
                    cursor: "pointer",
                    transition: "10s",
                    animation: "rotate360 0s infinite", // Aplica la animación
                  }}
                />
              </Link>
            </GridItem>
            <GridItem
              rowSpan={2}
              colSpan={1}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Text as="b" color="white">
                Uranus
              </Text>
              <Link href="/uranus">
                <Image
                  src={uranus}
                  alt="tierra"
                  h={160}
                  w={160}
                  _hover={{
                    transform: "scale(1.1) rotate(360deg)", // Escala y gira en hover
                    cursor: "pointer",
                    transition: "10s",
                    animation: "rotate360 0s infinite", // Aplica la animación
                  }}
                />
              </Link>
            </GridItem>
            <GridItem
              rowSpan={2}
              colSpan={1}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Text as="b" color="white">
                Neptune
              </Text>
              <Link href="/neptune">
                <Image
                  src={neptune}
                  alt="tierra"
                  h={160}
                  w={160}
                  _hover={{
                    transform: "scale(1.1) rotate(360deg)", // Escala y gira en hover
                    cursor: "pointer",
                    transition: "10s",
                    animation: "rotate360 0s infinite", // Aplica la animación
                  }}
                />
              </Link>
            </GridItem>
            <GridItem
              rowSpan={2}
              colSpan={1}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Text as="b" color="white">
                Kuiper belt
              </Text>
              <Link href="/kuiperBelt">
                <Image
                  src={kuiper}
                  alt="tierra"
                  h={160}
                  w={160}
                  _hover={{ cursor: "pointer" }}
                />
              </Link>
            </GridItem>
          </Grid>
        </Flex>
      </Flex>
    </div>
  );
};

import { Button, Flex, Grid, Text } from "@chakra-ui/react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const emojis = ["🥰", "🤩", "😘", "😛", "😇", "🤫", "😮", "🥺", "🙈"]
const correctSecret = "😛😛😛😛"
const primaryColor = "#0097FD"

export const Login = () => {
  const navigate = useNavigate()
  const [secret, setSecret] = useState<string[]>([])

  //   useEffect(() => {
  // if (correctSecret === secret.join("")) {
  //   navigate(`/dashboard`)
  // }
  //   }, [secret])

  return (
    <Flex
      overflow="scroll"
      width="100%"
      justify="center"
      flexDirection="column"
      align="center"
    >
      <Flex
        mt="20px"
        marginBottom="50px"
        flexDirection="column"
        align="center"
        justify="center"
      >
        <Text fontSize="4xl" fontWeight={600}>
          Ahoj
        </Text>
        <Text fontSize="4xl" fontWeight={600}>
          Petko!
        </Text>
      </Flex>
      <Grid gridTemplateColumns="repeat(4, 1fr)" gridGap="8px" mb="55px">
        {[
          ...secret,
          ...Array(4)
            .fill("")
            .slice(0, 4 - secret.length),
        ].map((char) => (
          <Flex
            align="center"
            justify="center"
            borderRadius="12px"
            border="1px solid #DCDFE3"
            fontSize="30px"
            width="48px"
            height="48px"
            textAlign="center"
            backgroundColor="white"
          >
            {char}
          </Flex>
        ))}
      </Grid>
      <Grid
        gridTemplateColumns="1fr 1fr 1fr"
        gridTemplateRows="1fr 1fr 1fr"
        maxWidth="300px"
        width="100%"
        justifyContent="center"
      >
        {emojis.map((emoji) => (
          <Flex
            justify="center"
            align="center"
            fontSize="40px"
            padding="15px"
            key={emoji}
            onClick={() => {
              setSecret((prev) => {
                if (prev.length === 4) {
                  return prev
                }
                return [...prev, emoji]
              })
            }}
          >
            {emoji}
          </Flex>
        ))}
        <Flex />
        <Flex
          justify="center"
          align="center"
          onClick={() => {
            setSecret((secret) => secret.slice(0, secret.length - 1))
          }}
          fontSize="30px"
          padding="10px"
        >
          ❌
        </Flex>
      </Grid>
      <Button
        mx="10px"
        backgroundColor={primaryColor}
        color="white"
        borderRadius="40px"
        padding="16px"
        width="100%"
        maxWidth="350px"
        onClick={() => {
          if (correctSecret === secret.join("")) {
            navigate(`/dashboard`)
          }
        }}
      >
        Prihlasit sa
      </Button>
    </Flex>
  )
}

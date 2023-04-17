import React from "react";
import "./App.css";
import Cards from "./components/Cards";
import {
  ActionIcon,
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
  Paper,
  useMantineColorScheme,
} from "@mantine/core";
import LightDarkButton from "./components/LightDarkButton";
import { IconMoonStars, IconSun } from "@tabler/icons-react";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";
import Buttons from "./components/Buttons";
import HoverCardInfo from "./components/HoverCard";
import OpenModal from "./components/OpenModal";

function App() {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  useHotkeys([["mod+J", () => toggleColorScheme()]]);
  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <Paper radius={10} style={{ minHeight: "100vh" }}>
          <LightDarkButton />
          <Cards />
          <Buttons />
          <HoverCardInfo />
          <div>
            <OpenModal />
          </div>
        </Paper>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;

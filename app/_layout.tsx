import { Stack } from 'expo-router';
import { createContext, useEffect, useRef, useState } from 'react';
import { Appearance } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('magic-react');
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
};
var defaultPlayer = {
  gold: 10,
  goldPerClick: 1,
  gps: 0,
  buildings: [0,0,0,0,0,0,0],
  buildingsGoldPerSecond: [1, 3, 5, 10, 50, 100, 1000, 10000],
  upgradesOwned: [0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0],
}


export const Player = createContext({player: defaultPlayer, setPlayer: (x) => {}});

const stack = () => {
  const [player, setPlayer] = useState(defaultPlayer);
  const previousTimeRef = useRef(0);

  useEffect(() => {
    getData().then((data) => {
      setPlayer(data ? data : defaultPlayer)
    })
    let frameId;

    const frame = time => {
      if (time !== previousTimeRef.current) {
        const timeDiff = time - previousTimeRef.current;
        setPlayer(prevPlayer => ({
          ...prevPlayer,
          gold: (prevPlayer.gold + (prevPlayer.gps * (timeDiff/1000))),
          previousTime: time
        }));
      }
      previousTimeRef.current = time;
      frameId = requestAnimationFrame(frame);
    };

    requestAnimationFrame(frame)
    return () => cancelAnimationFrame(frameId)
  }, []);

  // Appearance.setColorScheme('dark');
  return (
    <Player.Provider value={{player, setPlayer} as any}>
      <Stack>
        <Stack.Screen name="(tabs)"  options={{headerShown: false}}  />
      </Stack>
    </Player.Provider>
  )
}
export default stack;

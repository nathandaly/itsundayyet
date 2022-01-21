import React, { useEffect } from "react";
import JSConfetti from 'js-confetti'
import { useIsItFriday, useIsItSaturday, useIsItSunday } from "./hooks";

export default function App() {
  const isItSunday = useIsItSunday();
  const isItFriday = useIsItFriday();
  const isItSaturday = useIsItSaturday();
  const canvas = document.getElementById('main');
  const jsConfetti = new JSConfetti({ canvas });

  useEffect(() => {
    if (isItSunday) {
      jsConfetti.addConfetti({
        emojis: ['🥰', '❤️', '💜', '✨', '😍', '🌸', '🐶', '🐱', '🦄'],
        emojiSize: 120,
        confettiNumber: 100,
      });
    }
  });

  let message = <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-black sm:text-5xl">No 🙁</h1>;

  if (isItFriday) {
    message = <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-black sm:text-5xl">2 more sleeps 😴</h1>
  } else if (isItSaturday) {
      message = <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-black sm:text-5xl">1 more sleep 😬</h1>
  } else if (isItSunday) {
    message = <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-black sm:text-5xl">YES 😀</h1>
  }

  return (
    <>
      <main
        id="main"
        className="min-h-full bg-top bg-cover sm:bg-top"
        style={{
          backgroundImage:
            'url("https://wallpapercave.com/wp/wp4195668.jpg")',
        }}
      >
        <div className="px-4 py-16 mx-auto text-center max-w-7xl sm:px-6 sm:py-24 lg:px-8 lg:py-48">
         { message }
        </div>
      </main>
    </>
  )
}

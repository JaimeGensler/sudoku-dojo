# Sudoku Dojo

A web app to play Sudoku, in which I accidentally recreate Redux.

_by Jaime Gensler_

## About

Sudoku Dojo is a web app where you can play the classic game of Sudoku! Current
features include conflict notification, complete board access using only the
keyboard, and a button to populate all potential candidates for you!

This app is primarily an experiment in custom state management (and, for this
branch, learning Vue). The state management is entirely reusable for other
games, too - Minesweeper and KenKen would be good candidates! There is only one
puzzle available, as making a Sudoku puzzle generator is beyond the scope of
this project. To check out the experimental state management pieces, please see
`src/components/utils/provideGame` and `src/components/utils/consumeGame`. To
see the game state manager used, go to `src/lib/sudoku`. For specifically game
logic, `src/lib/sudoku/rules`.

_Built with TypeScript, TailwindCSS, and Vue 3 (rc5)._

## Check it out!

Now hosted! Vue (hah) this project on
[Github Pages](https://jaimegensler.github.io/sudoku-dojo/)!

Note: I was silly and used Tailwind breakpoints to make it responsive, but
that's only based on device width, so the game is too tall on some screens
(oops). I'll resolve this in the future.

## Contact

For questions, comments, complaints, or confessions, please reach out to me at:
[jaimegensler0@gmail.com](mailto:jaimegensler0@gmail.com).

# Sudoku Dojo

A web app to play Sudoku, in which I accidentally recreate Redux.

_by Jaime Gensler_

## About

Sudoku Dojo is a web app where you can play the classic game of Sudoku! Current
features include conflict notification, complete board access using only the
keyboard, and a button to populate all potential candidates for you!

This app is primarily an experiment in custom state management (and for this
branch learning Vue). There is only one puzzle available, as making a Sudoku
puzzle generator is currently beyond the scope of this project. To check out the
experimental state management pieces, please see
`src/components/utils/provideGame` and `src/components/utils/consumeGame`. To
check out game logic, look at `src/lib/sudoku/rules`.

_Built with TypeScript, TailwindCSS, and Vue 3 (rc5)._

## Check it out!

To be hosted once I have appeased the gh-pages gods.

## Contact

For questions, comments, complaints, or confessions, please reach out to me at:
[jaimegensler0@gmail.com](mailto:jaimegensler0@gmail.com).

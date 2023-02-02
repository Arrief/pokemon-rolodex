# Pokémon Rolodex

![Welcome to Pokémon Rolodex!](https://raw.githubusercontent.com/Arrief/pokemon-rolodex/main/src/assets/poke-landing.png)

## <a href="https://pokemon-rolodex.netlify.app/" target="_blank">Live Demo ▶</a>

## Table of Contents

- [Pokémon Rolodex](#pokemon-rolodex)
  1. [Live demo](#-live-demo)
  2. [Introduction](#-introduction)
  3. [Features](#-features)
  4. [Installation](#-installation)
  5. [Development info](#-development-info)
  6. [Created with](#-created-with)

## Introduction

**Pokémon Rolodex** is an online resource for fans of the classic Pokémon games. Browse through 251 Pokémon and select them one by one, to get more detailed information on each little creature.

**Disclaimer**: Pokémon and Pokémon character names are trademarks of Nintendo.

## Features

- Overview of all 251 Pokémon of the first and second generation
- Cards with more information on each Pokémon
- Search tool to find a Pokémon by name
- Switch between pages of 30 Pokémon for clearer overview
- Fully responsive for a great user experience on desktop, laptop, tablet and mobile devices

![Search for Pokémon](https://raw.githubusercontent.com/Arrief/pokemon-rolodex/main/src/assets/poke-search.png)

![Info card on Pokémon](https://raw.githubusercontent.com/Arrief/pokemon-rolodex/main/src/assets/poke-blast.png)

![Pagination](https://raw.githubusercontent.com/Arrief/pokemon-rolodex/main/src/assets/poke-page.png)

## Installation

After cloning this repository from Github, use the terminal to cd into the folder, then run `npm install`.

After that, run `npm start` and keep your terminal window open and running while using the application locally.

## Development info

This project started out as a simple app, with the intention of getting a better understanding of and a little practice in "the old way" of using **class components in React**.

Inspired by ZTM's Monster Rolodex, I added several features of my own and significantly changed the app in looks and content to resemble a _Pokédex_. Being used to functional components in React and increasing the scope of the project step by step, it evolved into a "learning by doing" experience. As a result I now feel not only more comfortable with class components but have improved my general understanding of React, specifically the **component lifecycle phases**.

The app consumes an **external API**, pokeapi.co API, for the data and utilizes **dynamic URL parameters** for specific calls for the detail card with **React Router**. As an additional challenge for myself, I implemented **pagination** with class component based state management.

All styling was done with CSS and specifically with **CSS grid**, which proved very useful for **responsive design**, to ensure smooth transitions of the UI for different screen sizes.

## Created with

- React v18.2.0
- React Router v6
- JavaScript
- HTML & CSS
- <a href="https://pokeapi.co/" target="_blank">PokéAPI</a>

![Pika Pika!](https://raw.githubusercontent.com/Arrief/pokemon-rolodex/main/src/assets/pikachu.png)

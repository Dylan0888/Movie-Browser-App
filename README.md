# Movie Browser App 
A dynamic movie browsing web application built with React that fetches real-time movie data from the TMDB API, allowing users to explore films, sort by ratings or release date, and browse through a responsive movie grid interface inspired by popular review platforms.

## Live Preview 
![App Preview](src/assets/imgs/MovieBrowserAppSS.png)
[Click Here to View Live Preview](https://movie-browser-app-8egd.vercel.app/)

## Features 
- Fetches real-time movie data from the TMDB API
- Sort movies by rating or release date
- Dynamic movie search and filtering
- Responsive grid layout for browsing movies
- Modern UI styled using Tailwind CSS
- Component-based architecture built with React

## Tech Stack
- React
- Vite
- JavaScript (ES6+)
- Tailwind CSS
- TMDB API

## Learning Outcomes 
- Consuming third-party API in React Applications
- Implementing dynamic sorting and filtering logic
- Designing responsive UI layouts using Tailwind CSS
- Structuring scalable component-based React applications

## Project Structure 

```
movie-browser-app/
├── public/
├── src/
│   ├── assets/
│   │   ├── fonts/
│   │   └── imgs/
│   │       ├── MovieBrowserAppSS.png
│   │       ├── dune.jpg
│   │       ├── dune.webp
│   │       └── icon.png
│   ├── components/
│   │       ├── Header.jsx
│   │       └── movie/
│   │            ├── Filters.jsx
│   │            ├── HardCodedCard.jsx (Testing purposes, can remove)
│   │            ├── Library.jsx
│   │            └── MovieCard.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── App.css
│   └── index.css
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

## Liscence 
MIT License

Copyright (c) [2026] [Dylan Jones]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

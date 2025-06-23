# Frontend Challenge

## Overview

Welcome! This challenge is designed to assess your frontend engineering skills using a modern React stack. You'll build a Pokemon web app that allows users to browse, search, and manage their favorite Pokemon using the Pokemon API.

**Time Limit: 6 hours**

## Requirements

### **Tech Stack**

- **Next.js** (latest, App Router, TypeScript)
- **Zustand** for state management
- **React Query** for data fetching/caching

### **Core Features**

1. **Pokemon List Page**

   - Display a list of Pokemon with pagination
   - Show Pokemon name, image, and basic info
   - Search functionality to find Pokemon by name
   - Responsive grid layout

2. **Pokemon Detail Modal**

   - Click on a Pokemon to open detailed view
   - Show comprehensive Pokemon information:
     - Stats (HP, Attack, Defense, etc.)
     - Abilities
     - Types
     - Height/Weight
     - Evolution chain (if time permits)

3. **Favorites Management**

   - Add/remove Pokemon to favorites
   - Favorites page showing saved Pokemon
   - Persist favorites in local storage

4. **UX/UI**
   - Responsive and accessible design
   - Loading states and error handling
   - Clean, modern interface
   - Smooth animations/transitions

## Bonus Points (if time permits)

- **Advanced Search**: Filter by type, abilities, or stats
- **Evolution Chain**: Display Pokemon evolution paths
- **Battle Stats**: Compare Pokemon stats visually
- **Dark/Light Mode**: Theme toggle
- **Animations**: Smooth transitions and micro-interactions
- **Testing**: Add a few unit tests
- **Deployment**: Deploy to Vercel or Netlify

## Evaluation Criteria

- **Functionality**: Does the app meet the core requirements?
- **Code Quality**: Is the code clean, modular, and well-typed?
- **Project Structure**: Is the codebase organized and scalable?
- **Best Practices**: Are modern React/Next.js patterns used?
- **UI/UX**: Is the app visually appealing and user-friendly?
- **Performance**: Efficient API calls and state management
- **Communication**: Clear comments and helpful README

## Getting Started

1. **Fork this repo** or create a new one
2. **Set up Next.js** with TypeScript
3. **Install dependencies**: zustand, @tanstack/react-query, react-modal
4. **Use the Pokemon API**: https://pokeapi.co/
5. **Follow the requirements above**
6. **Push your code** to GitHub and share the link

## API Resources

- **Pokemon API**: https://pokeapi.co/
- **API Documentation**: https://pokeapi.co/docs/v2
- **Key Endpoints**:
  - List Pokemon: `https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`
  - Pokemon Details: `https://pokeapi.co/api/v2/pokemon/{id}`
  - Pokemon Species: `https://pokeapi.co/api/v2/pokemon-species/{id}`

## Submission

- Share your GitHub repo link
- (Optional) Share your deployed app link
- Include a brief summary of what you accomplished in 6 hours

---

**Good luck! We're excited to see your Pokemon app! 🎮**

© 2020 Showcase Creators Inc. All rights reserved. Certain information contained herein is derived from information which is protected by copyrights held by Showcase Creators Inc. This code challenge, including any parts of it, cannot be duplicated, distributed, copied, modified, used to make a derivative work or used in any way without the prior written consent of Showcase Creators Inc.

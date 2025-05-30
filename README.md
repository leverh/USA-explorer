# USA Explorer

USA Explorer is a personal travel website showcasing America's national parks and natural wonders through my journey across the country. The site features an interactive map, detailed park information, photo galleries, and a travel diary.

![USA Explorer Screenshot](/public/projectscreenshot.png)

## 🌲 Features

- **Interactive Map**: Explore national parks across the United States
- **Park Details**: In-depth information about each park including photos, wildlife, and personal notes
- **Travel Diary**: Chronological journal entries documenting travel experiences
- **Responsive Design**: Optimized for all device sizes from mobile to desktop
- **Dark Mode**: Toggle between light and dark themes for comfortable viewing
- **Accessibility**: Built with a focus on web accessibility standards

## 🛠️ Technologies Used

- React.js + Vite
- React Router for navigation
- CSS with custom variables for theming
- Responsive design with CSS Grid and Flexbox
- Interactive maps

## 📂 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Footer/
│   ├── LoadingSpinner/
│   ├── Map/
│   ├── Navigation/
│   ├── ParkCard/
│   ├── PhotoItem/
│   ├── ScrollTopButton/
│   └── ThemeToggle/
├── data/                # Data files
│   └── parks.js         # Park information
├── pages/               # Page components
│   ├── AboutPage/
│   ├── ExplorePage/
│   ├── HomePage/
│   ├── NotFoundPage/
│   ├── ParkPage/
│   └── TravelDiaryPage/
└── styles/              # Global styles
    └── global.css
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/usa-explorer.git
   cd usa-explorer
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

4. Open your browser and visit `http://localhost:3000`

## 📱 Responsive Design

USA Explorer is designed to work on all device sizes:

- **Mobile**: Optimized layout with hamburger menu
- **Tablet**: Adjusted grid layouts for medium screens
- **Desktop**: Full experience with multiple columns and expanded content

## 🎨 Customization

### Theme Colors

The site uses CSS variables for easy theme customization. You can adjust colors in `src/styles/global.css`:

```css
:root {
  --color-forest: #2c5f2d;
  --color-moss: #97bc62;
  --color-earth: #5e503f;
  /* more colors... */
}
```

### Adding Parks

To add new parks, edit the `src/data/parks.js` file following the existing data structure.

## 📄 License

This project is licensed under the MIT License.

## 📧 Contact

Project Link: [https://flourishing-treacle-e276f2.netlify.app/](https://flourishing-treacle-e276f2.netlify.app/)

Github Link: [https://github.com/leverh/USA-explorer](https://github.com/leverh/USA-explorer)

My Portfolio: [https://pixelsummit.dev/](https://pixelsummit.dev/)

## 🙏 Acknowledgements

- [React Router](https://reactrouter.com/)
- [National Park Service](https://www.nps.gov/) for park information
- [Wikipedia](https://www.wikipedia.org/) for general information

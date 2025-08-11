# Currency Converter App

A modern, responsive currency converter application built with React and Vite. This app allows users to convert currencies in real-time using live exchange rates.

## 🚀 Features

- **Real-time Currency Conversion**: Convert between multiple currencies using live exchange rates
- **Swap Functionality**: Easily swap between "from" and "to" currencies with a single click
- **Responsive Design**: Beautiful, responsive UI built with Tailwind CSS
- **Custom React Hook**: Utilizes a custom `useCurrencyInfo` hook for fetching currency data
- **Error Handling**: Robust error handling for API failures

## 🛠️ How It Works

The application is built using modern React patterns and consists of several key components:

### Core Components

1. **App.jsx**: Main application component that manages the conversion logic and state
2. **InputBox.jsx**: Reusable input component for amount entry and currency selection
3. **useCurrencyInfo.js**: Custom React hook that fetches live currency exchange rates

### Data Flow

1. **Currency Selection**: Users select their base currency (from) and target currency (to)
2. **Amount Input**: Users enter the amount they want to convert
3. **API Call**: The `useCurrencyInfo` hook fetches live exchange rates from the currency API
4. **Conversion**: The app calculates the converted amount using the fetched exchange rates
5. **Display**: Results are displayed in real-time in the second input box

### Custom Hook Implementation

The `useCurrencyInfo` hook:
- Fetches data from `@fawazahmed0/currency-api`
- Uses React's `useState` and `useEffect` hooks
- Implements error handling for failed API requests
- Returns currency exchange rate data for the selected base currency

## 🚦 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## 📦 Available Scripts

- `npm run dev` - Start development server with hot reloading
- `npm run build` - Build the app for production
- `npm run lint` - Run ESLint for code quality checks
- `npm run preview` - Preview the production build locally

## 🔧 Technologies Used

- **React 19.1.1**: Frontend library for building user interfaces
- **Vite 7.1.0**: Fast build tool and development server
- **Tailwind CSS 4.1.11**: Utility-first CSS framework
- **Currency API**: Live exchange rate data source

## 📱 Usage

1. Enter the amount you want to convert in the "From" input field
2. Select your source currency from the dropdown
3. Select your target currency in the "To" section
4. Click "Convert" to see the converted amount
5. Use the "Swap" button to quickly switch between currencies

The application automatically fetches the latest exchange rates and provides accurate, real-time conversions.

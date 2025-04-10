🎵 Interactive Music & Light Control

## 📌 Project Overview

This project is an interactive web application based on the game Maffia, that controls background music and lighting scenes at the same time using React, TypeScript, and the Hue API. The application allows users to trigger different soundtracks and corresponding lighting effects, providing an immersive experience. Additionally, the project includes a script section and interactive elements for an enhanced user experience.

## 🛠️ Technologies Used

- **React & TypeScript**: Frontend framework and strongly typed JavaScript.
- **Tailwind**: Used for styling.
- **Hue API**: Controls Philips Hue lighting scenes.

## 📂 Project Structure

```
├── components
│   ├── MusicController.tsx   # Handles music playback and lighting control
│   ├── nightactions.tsx      # Allow the game leader too take notes from the night
│   ├── playerlist.tsx        # Showing the amount of players
│   ├── Script.tsx            # Displays the interactive script
│   ├── SoundButton.tsx       # Individual sound buttons with lighting integration
│
├── data
│   ├── sounds.tx             # Contains sound-related data
│   ├── music.tsx             # Contains music and scene mapping
│
│
├── layout
│   ├── header.tx             # Contains simple header layout with game title
│
│
├── globals.css               # Global styles
│── layout.tsx                # Specific components that should be on each page
├── page.tsx                  # Main page integrating components
│
│
├── public
│   ├── fonts                 # Contains fonts
│   ├── music                 # Contains music and scene mapping
│   ├── sounds                # Contains sound-related data
│   ├── svg                   # Contains symbols for buttons
```

## 🎶 Features

✅ **Dynamic Music Control**: Plays various background music tracks with corresponding scenes.
✅ **Hue Light Scene Activation**: Triggers Hue API to match lighting with the selected track.
✅ **Interactive Experience**: Users can interact with sound buttons and trigger different scenes.
✅ **State Management**: React hooks are used to manage the last active scene for the lights.
✅ **Responsive UI**: Styled with Tailwind CSS and designed to work on multiple devices.

## 🚀 How to Run the Project

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/kaspervik/project-hex.git
cd project-hex
```

### 2️⃣ Install Dependencies

```sh
npm install
```

### 3️⃣ Run the Development Server

```sh
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## ⚡ Environment Variables

Create a `.env.local` file in the root directory and add:

```env
HUE_BRIDGE_IP=your-hue-bridge-ip
HUE_API_KEY=your-api-key
```

## 🔮 Future Improvements

- Implement **Players** directly in the script.
- Enhance **animation effects** for UI interactions.
- Add **customizable scenes** based on user preferences.
- Improve **accessibility** and **SEO optimization**.

## 📝 Author & Contributions

Developed by **Kasper Vikström**. Contributions are welcome! Feel free to open an issue or submit a pull request.

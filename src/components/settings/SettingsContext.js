import React from "react";

const settingsContext = React.createContext();

const SettingsProvider = settingsContext.Provider;
const SettingsConsumer = settingsContext.Consumer;

export { SettingsProvider, SettingsConsumer };

export default settingsContext;

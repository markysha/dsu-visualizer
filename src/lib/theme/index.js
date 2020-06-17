
const theme = {
  palette: {
    primary: { main: "#1976d2" },
    secondary: { main: "rgb(220, 0, 78)" },
    text: { disabled: "rgba(0, 0, 0, 0.80)" },
    dashboard: {
      appBar: { background: "#1976d2", text: "#FFF", icon: "#FFF" },
      drawer: {
        background: "#FFF",
        text: "rgba(0, 0, 0, 0.70)",
        icon: "rgba(0, 0, 0, 0.58)",
      },
    },
    login: {
      submit: {
        background: "#1976d2",
        text: "#FFF",
        hover: "#0959a3",
      },
      padlockIcon: {
        color: "#FFF",
        background: "rgb(220, 0, 78)",
      },
      paper: {
        background: "#FFF",
      },
      mainText: {
        color: "#222",
      },
      field: {
        label: {
          focused: "#1976d2",
          current: "rgba(0, 0, 0, 0.50)",
        },
        border: {
          current: "rgba(196, 196, 196)",
          hover: "#212121",
          focused: "#1976d2",
        },
        input: {
          text: "#222",
        },
      },
    },
    background: {
      default: "#F7F9FC",
    },
  },
};

export default theme;
import { useEffect } from "react";
import useOnlineStatus from "./data/hooks/useOnlineStatus";
import { Button } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./ui/themes/theme";

function App() {
  const isOnline = useOnlineStatus();

  useEffect(() => {
    if (!isOnline) {
      alert("Sua conexão caiu!");
    }
  }, [isOnline]);

  return (
    <ThemeProvider theme={theme}>
      <div>
        {isOnline ? "Você esta Online" : "Você está desconectado!"}
        <Button variant={"contained"}>Clique Aqui</Button>
      </div>
    </ThemeProvider>
  );
}

export default App;

import { NavigationContainer } 
from "@react-navigation/native";
import NavegacaoPilha from "./NavegacaoPilha";
import NavegacaoGaveta from "./NavegacaoGaveta";

function NavegacaoPrincipal() {
  return (
    <NavigationContainer>
        {logado ? ( 
      <NavegacaoGaveta />
        ) : (
      <NavegacaoPilha />
      )}      
    </NavigationContainer>
  );
}

export default NavegacaoPrincipal;
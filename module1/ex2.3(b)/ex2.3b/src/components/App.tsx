import PageTitle from "./TitlePage";
import ClientAffichage from "./Client";
import { Client } from "../../type"
import Footer from "./Footer";

const App = () => {
  const title = "Welcome to My App";
  const clients:Client[]= [{
      name:"Alice",
      age:25
  },
  {
    name:"Bob",
    age:30
  },
  {
    name:"Charlie",
    age:35
  }
]
  const footerText = "© 2023 My App";

  return (
    <div>
      <PageTitle title={title}/>
      <ClientAffichage clients={clients}/>
      <Footer text={footerText}/>
    </div>
  );
};

export default App;

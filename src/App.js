import logo from "./logo.svg";
import "./App.css";
import Profile from "./Profile/Profile";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let handleName = (x) => {
    alert(x);
  };

  return (
    <div className="App">
      <Profile
        fullName="Amal Gafsi"
        bio="Étudiante en génie informatique avec une licence fondamentale en mathématiques et applications.
              Intéressé par le développement software.
              Au travers mes expériences acquises durant mes études et mes stages, j'ai travaillé sur différents projets qui m'ont aidé à développer mes compétences en travail d'équipe et en gestion du temps.
              Si motivée et enthousiaste, je suis toujours à la recherche de nouveaux défis pour développer et partager mes compétences et ma créativité."
        profession="étudiante en génie informatique"
        handleName={handleName}
      >
        <img src="./me.png" />
      </Profile>
    </div>
  );
}

export default App;

import Advertiser from "./comps/advertiser/Advertiser";
import Footer from "./comps/footer/Footer";
import Header from "./comps/header/Header";
import TaskGallery from "./comps/taskGallery/TaskGallery";

function App() {
  return (
    <main>
      <Header />
      <TaskGallery />
      <Advertiser />
      <Footer />
    </main>
  );
}

export default App;

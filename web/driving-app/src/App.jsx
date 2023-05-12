import Navbar from "./routes/global/Navbar";
import Sidebar from "./routes/global/Sidebar";
import Modal from "./routes/global/Modal";
import { useSelector } from "react-redux";
import ModalButton from "./routes/homepage/ModalButton";
import Footer from "./routes/global/Footer";
import SearchPage from "./routes/searchpage/SearchPage";

export default function App() {
  const isSidebarOpen = useSelector((state) => state.sidebar.isOpen);
  const isModalOpen = useSelector((state) => state.modal.isOpen);

  return (
    <div>
      {isSidebarOpen ? <Sidebar /> : null}
      <Navbar />

      {isModalOpen ? <Modal /> : null}
      <div className='min-h-screen bg-neutral-800 text-white px-5 py-2'>
        <SearchPage />
      </div>
      {/* <div><HomeLayout /></div> */}
      {/* <ModalButton /> */}
      <Footer />
    </div>
  );
}

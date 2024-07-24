import "./App.css";
import { Admin, EditGuesser, ListGuesser, Resource, ShowGuesser } from "react-admin";
import authProvider from "./utils/authProvider";
import LoginPage from "./components/Login/LoginPage";
import simpleRestProvider from "ra-data-simple-rest";
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import SensorOccupiedIcon from '@mui/icons-material/SensorOccupied';
import SwipeRightIcon from '@mui/icons-material/SwipeRight';
import Face4Icon from '@mui/icons-material/Face4';
import { dataProvider } from "./utils/dataProvider";
function App() {
  return (
    <>
      <Admin
        authProvider={authProvider}
        loginPage={LoginPage}
        dataProvider={dataProvider}
      >
        <Resource
          name="hire-requests"
          list={<ListGuesser />}
          create={<EditGuesser />}
          edit={<EditGuesser />}
          show={<ShowGuesser/>}
          icon={EmojiPeopleIcon}
        />
        <Resource
          name="recruitment-requests"
          list={<ListGuesser />}
          create={<EditGuesser />}
          edit={<EditGuesser />}
          show={<ShowGuesser/>}
          icon={SensorOccupiedIcon}
        />
        <Resource
          name="transfer-requests"
          list={<ListGuesser />}
          create={<EditGuesser />}
          edit={<EditGuesser />}
          show={<ShowGuesser/>}
          icon={ SwipeRightIcon }
        />
         <Resource
          name="housekeepers"
          list={<ListGuesser />}
          create={<EditGuesser />}
          edit={<EditGuesser />}
          show={<ShowGuesser/>}
          icon={Face4Icon}
        />
      </Admin>
    </>
  );
}

export default App;

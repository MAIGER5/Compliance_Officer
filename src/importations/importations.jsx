import {Cloudinary} from  '@cloudinary/url-gen';
import { CardTextScreen } from '../components/cardTextScreen/cardTextScreen';
import { Home } from "../views/home/home";
import { CardFloatServices } from '../components/cardFloatServices/cardFloatServices';
import { Boton_Contain} from '../components/botons/botons';
import { Cards_x2_Image_Text } from "../components/cards_x2_Image_Text/cards_x2_Image_Text";
import { data_cardFloatServices } from '../data/data_cardFloatServices';
import { data_cardX3 } from '../data/data_cardX3';
import { data_card_x2_image_text } from '../data/data_card_x2_image_text';
import { Card_x3 } from '../components/card_x3/card_x3';
import { Footer } from '../components/footer/footer';
import { useEffect_Styles } from '../hooks/useEffect_Styles';
import { data_services_1 } from '../data/data_services_1';
import { data_services_2 } from '../data/data_services_2';
import { dataNavbar } from '../data/data_navBar';
import { CardServices_Claves } from '../components/cardServices_Claves/cardServices_Claves';
import { NavBar } from '../components/navBar/navBar';

const cld = new Cloudinary({ 
  cloud: { 
    cloudName: 'dbn2bb4e2' 
  } 
});

const image1 = cld.image('firstCard')

export{
  Home,
  Cards_x2_Image_Text,
  image1,
  Boton_Contain,
  CardTextScreen,
  CardFloatServices,
  data_cardFloatServices,
  data_cardX3,
  data_card_x2_image_text,
  data_services_1,
  data_services_2,
  dataNavbar,
  Card_x3,
  Footer,
  useEffect_Styles,
  CardServices_Claves,
  NavBar,

}

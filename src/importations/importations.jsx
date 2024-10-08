import {Cloudinary} from  '@cloudinary/url-gen';
import { CardTextScreen } from '../components/cardTextScreen/cardTextScreen';
import { NavBar } from '../components/navBar/navBar';
import { Home } from "../views/home/home";
import { CardFloatServices } from '../components/cardFloatServices/cardFloatServices';
import { Cards_x2_Image_Text } from "../components/cards_x2_Image_Text/cards_x2_Image_Text";
import { data_cardFloatServices } from '../data/data_cardFloatServices';
import { data_cardX3 } from '../data/data_cardX3';
import { data_card_x2_image_text } from '../data/data_card_x2_image_text';
import { Card_x3 } from '../components/card_x3/card_x3';
import { Footer } from '../components/footer/footer';
import { useEffect_Styles } from '../hooks/useEffect_Styles';
import { data_services_1 } from '../data/data_services_1';
import { data_card_Text_Img } from '../data/data_card_Text_Img';
import { data_services_2 } from '../data/data_services_2';
import { dataNavbar, dataNavbarMenu } from '../data/data_navBar';
import { dataAboutCardX3 } from '../data/dataAboutCardX3';
import { CardServices_Claves } from '../components/cardServices_Claves/cardServices_Claves';
import { Socialmedia_Data } from '../data/socialMedia_Data';
import { Card_About } from '../components/card_About/card_About';
import { SocialMedia } from '../components/socialMedia/socialMedia';
import { AboutUs } from '../views/aboutUs/aboutUs';
import { dataFooter } from '../data/dataFooter';
import { Card_Text_Img } from '../components/card_Text_Img/card_Text_Img';
import { Boton_Contain} from '../components/botons/botons';
import { dataBotons } from '../data/dataBotons';
import { Contact } from '../views/contact/contact';
import { WhatsApp } from '../components/whatsApp/whatsApp';
import logoPSO from '../media/GrupoPSO.png'
import logoDHS from '../media/DHS.png'
import logoSEIN from '../media/SEIN.png'
import logoJURIDICA from '../media/Juridica.png'
import logoTECNI from '../media/tecnidomicilios.png'
import logosec from '../media/SEC.png'
import logoKO from '../media/KO.png'
import logoSGI from '../media/PSOSGI.png'

const cld = new Cloudinary({ 
  cloud: { 
    cloudName: 'dbn2bb4e2' 
  } 
});

const image1 = cld.image('firstCard')

export{
  Home,
  Cards_x2_Image_Text,
  Boton_Contain,
  CardTextScreen,
  CardFloatServices,
  Card_x3,
  Footer,
  useEffect_Styles,
  CardServices_Claves,
  NavBar,
  SocialMedia,
  AboutUs,
  Card_About,
  Card_Text_Img,
  Contact,
  WhatsApp,
  image1,
  data_cardFloatServices,
  data_cardX3,
  data_card_x2_image_text,
  data_services_1,
  data_services_2,
  dataNavbar,
  dataFooter,
  Socialmedia_Data,
  dataNavbarMenu,
  dataAboutCardX3,
  data_card_Text_Img,
  dataBotons,
  logoPSO,
  logoDHS,
  logoJURIDICA,
  logoKO,
  logoSEIN,
  logoSGI,
  logoTECNI,
  logosec


}

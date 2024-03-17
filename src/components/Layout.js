import React from 'react'
import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";
import { Outlet } from 'react-router-dom'
import Footer from './Footer';
import Header from './Header';
// import Header from './Header';
// import Navbar from './Navbar';
// import Header from "../components/Header";
const Layout = () => {
  return (
    <div>
    <Header/>
    <WhatsAppWidget
        phoneNo="919574057264"
        position="right"
        widgetWidth="300px"
        widgetWidthMobile="300px"
        autoOpen={false}
        autoOpenTimer={5000}
        messageBox={true}
        messageBoxTxt=""
        iconSize="50"
        iconColor="white"
        iconBgColor="#206c43"
        // headerIcon="./images/rntalhub.jpg"
        headerIconColor="red"
        headerTxtColor="white"
        headerBgColor="#206c43"
        headerTitle="Heer Mehndi Art"
        headerCaption="By Anjali Prajapati"
        bodyBgColor=""
        chatPersonName="Support"
        chatMessage={
          <>
            Hi there 👋
            <br />
            How can I help you?
          </>
        }
        footerBgColor="#999"
        btnBgColor="#206c43"
        btnTxtColor="white"
        btnTxt="Start Chat"
      />
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout

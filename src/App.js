import React, { Component } from "react";
import $ from "jquery";
import { Parallax, Background } from "react-parallax";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import HexaDominoes from "./components/HexaDominoes";
import EphemeralLight from "./components/EphemeralLight";
import Skills from "./components/Skills";
import Banner from "./components/Banner";
import Sketches from "./components/Sketches";


import colony from "./assets/images/experience/colony11.png";
import utLogo from "./assets/images/experience/Islamic_Azad_University_logo_(2).png";
import honarestan from "./assets/images/experience/honarestan-logo1.png";
import freelancer from "./assets/images/experience/Freelancer.png";
import moolfa from "./assets/images/experience/moolfa.png"
import qolenj from "./assets/images/experience/1630652738156.jpeg";
import noopArmyLogo from "./assets/images/experience/noopArmyLogo.png";
import PaeezanLogo from "./assets/images/experience/PaeezanLogo.png";

import playground0 from "./assets/images/projects/playground/playground_icon.jpg";
import playground1 from "./assets/images/projects/playground/mushroom.png";
import playground2 from "./assets/images/projects/playground/spidercube.png";
import playground3 from "./assets/images/projects/playground/lake.png";


import rebel0 from "./assets/images/projects/rebel/Rose.jpg"
import rebel1 from "./assets/images/projects/rebel/Rebel1.png"
import rebel2 from "./assets/images/projects/rebel/Rebel2.png"
import rebel3 from "./assets/images/projects/rebel/Rebel3.png"
import rebel4 from "./assets/images/projects/rebel/Rebel4.png"

import waterfall0 from "./assets/images/projects/waterfall/waterfall0.jpg"
import waterfall1 from "./assets/images/projects/waterfall/waterfall1.png"
import waterfall2 from "./assets/images/projects/waterfall/waterfall2.png"

import art0 from "./assets/images/arts/concept-art/Paint1.jpg"
import art1 from "./assets/images/arts/concept-art/PixelAsset1.png"
import art2 from "./assets/images/arts/concept-art/PixelAsset2.png"
import art3 from "./assets/images/arts/concept-art/Sketch1.jpg"
import art4 from "./assets/images/arts/concept-art/Sketch2.jpg"
import art5 from "./assets/images/arts/concept-art/watermill.gif"

import HDIcon from "./assets/images/projects/hexadominoes/Icon.jpg";
import HDScreenShot1 from "./assets/images/projects/hexadominoes/1.png";
import HDScreenShot2 from "./assets/images/projects/hexadominoes/2.png";
import HDScreenShot3 from "./assets/images/projects/hexadominoes/3.png";
import HDScreenShot4 from "./assets/images/projects/hexadominoes/4.png";
import HDScreenShot5 from "./assets/images/projects/hexadominoes/5.png";
import HDSetting from "./assets/images/projects/hexadominoes/setting.png";

import BRIcon from "./assets/images/projects/bridgerun/icon.jpg";
import BRScreenShot1 from "./assets/images/projects/bridgerun/1.png";
import BRScreenShot2 from "./assets/images/projects/bridgerun/2.png";
import BRScreenShot3 from "./assets/images/projects/bridgerun/3.png";
import BRScreenShot4 from "./assets/images/projects/bridgerun/4.png";
import BRShop from "./assets/images/projects/bridgerun/shop.png";
import BRVictoryPanel from "./assets/images/projects/bridgerun/victoryPanel.png";
import BRStartPage from "./assets/images/projects/bridgerun/startPage.png";

import parallexBackground from "./assets/images/arts/DominoColorBanner.png";

import ELPortrait from "./assets/images/projects/EphemeralLight/Portrait.jpg"
import ELLandscape from "./assets/images/projects/EphemeralLight/Landscap.jpg"
import EL1 from "./assets/images/projects/EphemeralLight/1.png"
import EL2 from "./assets/images/projects/EphemeralLight/2.png"
import EL3 from "./assets/images/projects/EphemeralLight/3.png"
import EL4 from "./assets/images/projects/EphemeralLight/4.png"
import EL5 from "./assets/images/projects/EphemeralLight/5.png"
import EL6 from "./assets/images/projects/EphemeralLight/6.png"
import EL7 from "./assets/images/projects/EphemeralLight/7.png"
import EL8 from "./assets/images/projects/EphemeralLight/8.png"

class App extends Component {

  constructor(props) {
    super();
    this.state = {
      windowInnerHeight: window.innerHeight,
      foo: "bar",
      resumeData: {
        experience: [
          {
              technologies: ["Cinema4D", "After Effects", "Adobe Illustrator"],
              mainTech: ["Social Media Admin", "Photographer", "Video Editor"],
              years: "2019 - present",
              title: "Freelance Content Editor",
              company: "Freelance",
              companyIcon: freelancer,
          },
          {
              mainTech: ["Major: Industrial Design"],
              technologies: ["Rhinoceros 3D", "3DS Max", "Maya", "Solid Works"],
              years: "2015 - 2019",
              title: "Industrial Design",
              company: "Islamic Azad University",
              companyIcon: utLogo,
          }
          ,
          {
              mainTech: ["Diploma of Animation"],
              technologies: ["Edius", "Premiere", "Photoshop"],
              years: "2011 - 2015",
              title: "Animation",
              company: "School of Broadcasting",
              companyIcon: honarestan,
          }
        ],
        projects: [
          {
            title: "Bridge Run",
            url: "https://play.google.com/store/apps/details?id=com.Moolfa.BridgeRun",
            description: "Bridge Run was created for Bazaar Game Contest, where the focus was on creating runner games in" +
                " three weeks. We participated as a team of two. Although my main contribution was game designing and coding," +
                " I created most of the 3D models and wrote shaders for the game too. We used standard characters model and Mixamo" +
                " animations for the project. Later we published it on Google Play and got 10k organic users in 2 months!\n",
                // "My contribution in this project was:\n"+
                // "    •\tImplementing game features.\n" +
                // "    •\tDesigning gameplay and levels.\n" +
                // "    •\tImplementing user interfaces.\n" +
                // "    •\tWrite shaders in HLSL.\n" +
                // "    •\tCreating 3D models.\n",
            thumbnail: BRIcon,
            images: [
                BRScreenShot1,
                BRScreenShot2,
                BRShop,
                BRStartPage,
                BRVictoryPanel,
                BRScreenShot3,
                BRScreenShot4,
            ],
            // youtube: "o1SbL0i7x1M",
            startDate: 2022,
          },
          {
            title: "Playground",
            url: "https://moolfa.itch.io/playground",
            description: "This game is created to prototype different mechanics in Unity." +
                " Each level is a minimal prototype where the objective is to reach the door. I Implemented different " +
                "challenging mechanics such as rope and water simulation.",
            thumbnail: playground0,
            images: [
              playground1,
              playground2,
              playground3,
            ],
            youtube: "o1SbL0i7x1M",
            startDate: 2022,
          },
          {
            title: "Hexa Dominoes",
            url: "https://play.google.com/store/apps/details?id=com.moolfa.dominocolor",
            description: "•    Designed and developed the game \n" +
                "•    Led a multi-disciplinary team to produce the game\n",
            thumbnail: HDIcon,
            youtube: "SWChghYIsMM",
            images: [
              HDScreenShot1,
              HDScreenShot2,
              HDScreenShot3,
              HDScreenShot4,
              HDScreenShot5,
              HDSetting,
            ],
            startDate: 2021,
          },
          {
            title: "Rebel",
            url: "https://moolfa.itch.io/rebel",
            description: "o    Designed and developed game logics\n" +
              "o    Worked on character design and animations\n",
            thumbnail: rebel0,
            images: [
              rebel1,
              rebel2,
              rebel3,
              rebel4,
            ],
            youtube: "kRbxADt-gVc",
            startDate: 2019,
          },
          {
            title: "Waterfall",
            url: "https://hvbashiri.itch.io/waterfall",
            description: "o    Final project of fundamentals of game design course \n" +
              "o    Worked on character animations and core gameplay mechanics\n",
            thumbnail: waterfall0,
            images: [
              waterfall1,
              waterfall2,
            ],
            startDate: 2016,
          },
        ],
        ephemeralLight:
          {
            title: "Ephemeral Light",
            description: "",
            des: "Ephemeral Light is an exciting tactical RPG game with a strong focus on storytelling." +
                " Players can explore cities, talk to people, and make choices that shape the outcome of the game." +
                " In combat, which happens in turns on hexagonal tile environments, players control one to three heroes" +
                " with unique abilities inspired by MOBA games. As the story unfolds, players can choose companions," +
                " upgrade abilities using resources they collect, and influence the game's ending. Ephemeral Light offers" +
                " a captivating adventure where players can experience strategic battles, immersive narratives," +
                " and the power to impact the game world.",
            thumbnail: ELLandscape,
            images: [
              EL1,
              EL2,
              EL3,
              EL4,
              EL5,
              EL6,
              EL7,
              EL8,
            ],
            projects: [
              {
                title: "Wit, our visual novel tool",
                description: "One of the key elements in a narrative-driven game is the art of storytelling. " +
                    "To facilitate the management of branching and complex narratives, I developed a graph-based tool" +
                    " called Wit within the Unity game engine. Wit provides us with a versatile platform to write dialogues," +
                    " design scenes, and set triggers or player choices. To get a better understanding of Wit and its capabilities," +
                    " I invite you to watch the demo reel or read about it in my Medium .",
                youtube: "VEHTnPa6LaU",
              },
              {
                title: "Mirage, our mesh generator tool",
                youtube: "wizsP7tyWHw",
                description: "We incorporated mesh generation techniques in two key areas of our project: \n" +
                    "•  We utilized mesh generation to create our object in our exploration world from 2D sprites.\n" +
                    "•  We employed mesh generation to create a path preview system. This feature visually displayed the walking paths for both the player and enemy units.\n"
              }
            ],
          },
        basic_info: {
          section_name: {
            experience: "My Journey",
            ephemeralLight: "Ephemeral Light",
            enlightenment: "Enlightenment",
            hexaDominoes: "Hexa Dominoes",
            projects: "Personal Projects",
            sketches: "Life Interests"
          }
        }
      },
      sharedData: {},
    };
  }


  componentDidMount() {
    this.loadSharedData();
    this.calculateBannerHeight(window.innerHeight, window.innerWidth);

    window.addEventListener("orientationchange", () => {
      this.calculateBannerHeight(window.innerWidth, window.innerHeight);
    })
  }

  calculateBannerHeight(height, width) {
    var bannerHeight = height < width ? height > 900 ? 480:  height / 3 : width / 2;
    bannerHeight = bannerHeight > 300 ? bannerHeight : 300;
    var mobileVersion = bannerHeight <= 300 || navigator.platform.indexOf('MacIntel') !== -1;
    this.setState({windowInnerHeight: height, bannerSize: bannerHeight, mobileVersion});
  }

  loadResumeFromPath(path) {
    $.ajax({
      url: path,
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }

  loadSharedData() {
    $.ajax({
      url: `portfolio_shared_data.json`,
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ sharedData: data });
        document.title = `${this.state.sharedData.basic_info.name}`;
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }

  render() {
    return (
      <div>
        <div
            className= "main-background-color-variable"
            style={{height: this.state.windowInnerHeight, flex: 1, display: "flex", flexDirection: "column"}}>
          <Banner/>
          <Header sharedData={this.state.sharedData.basic_info} />
        </div>
        <Experience
          resumeExperience={this.state.resumeData.experience}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        {/* <EphemeralLight
            resumeProjects={this.state.resumeData.ephemeralLight}
            resumeBasicInfo={this.state.resumeData.basic_info}
          /> */}
        {/*<HexaDominoes*/}
        {/*    resumeProjects={this.state.resumeData.dominoes}*/}
        {/*    resumeBasicInfo={this.state.resumeData.basic_info}*/}
        {/*/>*/}
        {/* <Projects
          resumeProjects={this.state.resumeData.projects}
          resumeBasicInfo={this.state.resumeData.basic_info}
        /> */}

        {/*<Parallax bgImage={parallexBackground} strength={500}>*/}
        {/*  <div style={{ height: window.innerHeight }}>*/}
        {/*  </div>*/}
        {/*</Parallax>*/}
        {/*<Parallax bgImage={parallexBackground} strength={500}>*/}
        {/*  <div style={{ height: this.state.windowInnerHeight }}>*/}
        {/*  </div>*/}
        {/*</Parallax>*/}
        <Sketches
          resumeProjects={this.state.resumeData.arts}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />

        <Footer sharedBasicInfo={this.state.sharedData.basic_info} />
      </div>
    );
  }
}

export default App;

import React,{useState,useContext} from "react";
import {Container,MobileCont,ToggleMode,Icon,IconCon,Img ,ImgWrapper,Titleimg,Disc,Title,Item,Line} from './AppStyle.js'
import logo from './logo.png'
import {ThemeContext} from './context'

function App() {
  const [mode,setMode]=useState(false)
  const [theme,setTheme]=useContext(ThemeContext)
  const dark={
        icon:"black",
        title:"black",
        background:"white"
  }
  const light={
    icon:"white",
        title:"white",
        background:"black"
  }
  const onChange =()=>{
  setMode(!mode)
  setTheme(mode ?dark :light)

  }
  return (
    <Container color={theme.background}>
      <MobileCont color={theme.background}>
        <IconCon>
          <Icon.IosArrowLeft color={theme.icon}/>
          <Icon.Switch       color={theme.icon}/>
        </IconCon>
        <ImgWrapper>
        <Img src={logo}  alt="logo"  />
        <Titleimg color={theme.title}>Night Mode</Titleimg>
        <Disc color={theme.title}> No one</Disc>
         </ImgWrapper>
         {/*Dark Mode*/}
         <Item>
           <Icon.Moon color={theme.icon}/>
           <Title color={theme.title} > Dark Mode</Title>
           <ToggleMode
            onChange={onChange}
            checked={mode}
            size={50}
           />
         </Item>
          {/*Grid*/}
          <Item>
           <Icon.Grid/>
           <Title color={theme.title}> Story</Title>
         </Item>
          {/* UserCheck*/}
          <Item>
           <Icon.UserCheck/>
           <Title color={theme.title}> Chat Head</Title>
         </Item>
          {/* UserPlus*/}
          <Item>
           <Icon.UserPlus/>
           <Title color={theme.title}> Groups </Title>
         </Item>
         <Line/>
         {/* PermMedia*/}
         <Item>
           <Icon.PermMedia />
           <Title color={theme.title}> Media and Photos</Title>
         </Item>
         {/*SettingsOutline */}
         <Item>
           <Icon.SettingsOutline/>
           <Title color={theme.title}> Settings and Privacy</Title>
         </Item>
         {/* CommentDots*/}
         <Item>
           <Icon.CommentDots/>
           <Title color={theme.title}>  Help Center</Title>
         </Item>
         {/* UserPlus*/}
         <Item>
           <Icon.BellFill/>
           <Title color={theme.title}> Notification</Title>
         </Item>
          </MobileCont>

    </Container>
  )
}

export default App;

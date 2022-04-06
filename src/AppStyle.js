import styled from 'styled-components'
import {IosArrowLeft} from '@styled-icons/fluentui-system-filled/IosArrowLeft'
import {Switch} from '@styled-icons/icomoon/Switch'
import {MoonFill} from '@styled-icons/bootstrap/MoonFill'
import {Grid} from '@styled-icons/bootstrap/Grid'
import {UserCheck} from '@styled-icons/boxicons-regular/UserCheck'
import {UserPlus} from '@styled-icons/boxicons-regular/UserPlus'
import {PermMedia} from '@styled-icons/material-outlined/PermMedia'
import {CommentDots} from '@styled-icons/boxicons-regular/CommentDots'
import {BellFill} from '@styled-icons/bootstrap/BellFill'
import {SettingsOutline} from '@styled-icons/evaicons-outline/SettingsOutline'
import Toggle from 'react-dark-mode-toggle'

export const  ToggleMode=styled(Toggle)`
margin-left:auto;
cursor:pointer;
`

export const Container=styled.div`
display:flex;
align-items:center;
width:100wh;
height:fit-content;
justify-content:center;
padding:50px ;
box-sizing:border-box;

`
export const MobileCont=styled.div`
box-sizing:border-box;
width:400px;
height:700px;
box-shadow:5px 5px 12px 6px rgba(0,0,0,0.25);
background:${({color})=>color};
`
export const IconCon=styled.div`
display:flex;
width:100%;
padding:20px;
box-sizing:border-box;
`
export const Icon=styled.div``

Icon.IosArrowLeft=styled(IosArrowLeft)`
color:${({color})=>color};
width:20px;
height:20px;
cursor pointer
`
Icon.Switch=styled(Switch)`
color:${({color})=>color};
width:20px;
height:20px;
cursor pointer;
margin-left:auto
`
export const ImgWrapper=styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
margin-top:50px;
margin-bottom:15px;
`
export const Img=styled.img`
width:80px;
height:80px;
border-radius:50%;
padding:20px;
border:1px solid #383e47;
`
export const Titleimg=styled.div`
font-size:22px;
font-weight:800;
margin-top:10px;
font-family:SF PRO Display;
color:${({color})=>color};
`
export const Disc=styled.div`
font-size:16px;
font-style:bold;
font-family:SF PRO Display;
color:${({color})=>color}
`
export const Item=styled.div`
display:flex;
padding:10px 35px;
`
export const Title=styled.div`
font-size:18 px;
font-style:bold;
padding-left:20px;
font-family:SF PRO Display;
color:${({color})=>color}
`
export const Line=styled.div`
width:85%;
height:2px;
background:#E9E9E9;
margin:10px 30px;
box-sizing:border-box;
`

 Icon.Moon=styled(MoonFill)`
 width:25px;
height:25px;
color:${({color})=>color};
`
Icon.Grid=styled(Grid)`
 width:25px;
height:25px;
color:#FBB65C;
`
Icon.UserCheck=styled(UserCheck)`
 width:25px;
height:25px;
color:#FF7EB0;
`
Icon.UserPlus=styled(UserPlus)`
 width:25px;
height:25px;
color:#36E3FF;
`
Icon.PermMedia=styled(PermMedia)`
 width:25px;
height:25px;
color:#5476FF;
`
Icon.SettingsOutline=styled(SettingsOutline)`
width:25px;
height:25px;
color:#36E3FF;
`
Icon.CommentDots=styled(CommentDots)`
width:25px;
height:25px;
color:#0BC630;
`
Icon.BellFill=styled(BellFill)`
width:25px;
height:25px;
color:#A394C2;
`




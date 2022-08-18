import React from "react"
import styled from "styled-components"

import {
  FaGithub,
  FaHome,
  FaEnvelope,
  // FaKaggle,
  // FaFacebook,
  // FaLinkedin,
  // FaInstagram,
  FaLink,
} from "react-icons/fa"
// import Velog from '../../assets/velog.svg';

import { siteUrl, description, author, links } from "../../../blog-config"

const Bio = () => {
  const { github, velog, email, kaggle, instagram, facebook, linkedIn, etc } = links

  return (
    <BioWrapper id="bio">
      <Profile />
      <div>
        <Author>@{author}</Author>
        <Description>{description}</Description>
        <LinksWrapper>
          <Link link={github}>
            <FaGithub />
          </Link>
          <Link link={velog}>
            <FaHome />
          </Link>
          {/* <Link link={velog}>
            <Velog />
          </Link> */}
          <Link link={email}>
            <FaEnvelope />
          </Link>
          {/* <Link link={kaggle}>
            <FaKaggle />
          </Link>
          <Link link={instagram}>
            <FaInstagram />
          </Link>
          <Link link={facebook}>
            <FaFacebook />
          </Link>
          <Link link={linkedIn}>
            <FaLinkedin />
          </Link> */}
          {/* <Link link={etc}>
            <FaLink />
          </Link> */}
        </LinksWrapper>
      </div>
    </BioWrapper>
  )
}

export default Bio
const BioWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0 15px;
  }
`

const profileImageRoot =
  typeof window !== "undefined" && window.location.host === "localhost:8000"
    ? "http://localhost:8000"
    : siteUrl

const Profile = styled.div`
  flex: 0 0 auto;
  margin-right: 16px;
  width: 128px;
  height: 128px;
  border-radius: 999px;
  background-image: url(${profileImageRoot}/profile.png);
  background-size: cover;
  background-position: center;
`

const Author = styled.div`
  margin-bottom: 5px;
  font-size: 24px;
  font-weight: 700;
  color: ${props => props.theme.colors.text};
`

const Description = styled.div`
  margin-bottom: 12px;
  line-height: 1.5;
  font-size: 16px;
  color: ${props => props.theme.colors.secondaryText};
`

const LinksWrapper = styled.div`
  & a {
    margin-right: 12px;
  }

  & svg {
    width: 25px;
    height: 25px;
    cursor: pointer;
  }

  & svg path {
    fill: ${props => props.theme.colors.icon};
    transition: fill 0.3s;
  }

  & a:hover svg path {
    fill: ${props => props.theme.colors.text};
  }
`

const Link = ({ link, children }) => {
  if (!link) return null
  return (
    <a href={link} target="_blank" rel="noreferrer">
      {children}
    </a>
  )
}

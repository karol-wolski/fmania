import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import { FACEBOOK, INSTAGRAM, LINKEDIN, TWITTER } from '../../../constants/constants'
import { List, ListItem, ListLink } from './SocialMedia.style'

const SocialMedia: React.FC = () => {
  return (
    <List>
      <ListItem>
        <ListLink href={FACEBOOK}>
          <FaFacebookF />
        </ListLink>
      </ListItem>
      <ListItem>
        <ListLink href={TWITTER}>
          <FaTwitter />
        </ListLink>
      </ListItem>
      <ListItem>
        <ListLink href={LINKEDIN}>
          <FaLinkedinIn />
        </ListLink>
      </ListItem>
      <ListItem>
        <ListLink href={INSTAGRAM}>
          <FaInstagram />
        </ListLink>
      </ListItem>
    </List>
  )
}

export default SocialMedia

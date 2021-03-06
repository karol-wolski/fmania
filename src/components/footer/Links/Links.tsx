import React from 'react'
import { List, ListItem, ListLink, SectionName, Wrapper } from './Links.style'

type SingleLink = {
  name: string
  path: string
}

interface LinksProps {
  sectionName: string
  linkArray: SingleLink[]
}

const Links: React.FC<LinksProps> = ({ sectionName, linkArray }) => {
  return (
    <Wrapper>
      <SectionName>{sectionName}</SectionName>
      <List>
        {linkArray.map(link => (
          <ListItem key={link.name}>
            <ListLink to={link.path}>{link.name}</ListLink>
          </ListItem>
        ))}
      </List>
    </Wrapper>
  )
}

export default Links

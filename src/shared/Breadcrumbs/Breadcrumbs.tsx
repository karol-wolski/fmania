import React from 'react'
import useBreadcrumbs from 'use-react-router-breadcrumbs'
import { Breadcrumb, BreadcrumbLink, BreadcrumbLinkBold, BreadcrumbsWrapper, Wrapper } from './Breadcrumbs.styles'
import { MdChevronRight } from 'react-icons/md'

const Breadcrumbs: React.FC = () => {
  const slug = ({ match }: any) => {
    const slug = match.params.product
    return slug.replaceAll('-', ' ')
  }

  const breadcrumbs = useBreadcrumbs([
    {
      path: '/orderplaced',
      breadcrumb: 'Order Placed',
    },
    {
      path: '/:gender/:category/:subcategory/product-:product',
      breadcrumb: slug,
    },
    {
      path: '/:gender/:category/product-:product',
      breadcrumb: slug,
    },
    {
      path: '/:gender/product-:product',
      breadcrumb: slug,
    },
  ])
  const breadcrumbLength = breadcrumbs.length
  return (
    <Wrapper>
      <BreadcrumbsWrapper>
        {breadcrumbs.map(({ match, breadcrumb }, index) => {
          return breadcrumbLength - 1 === index ? (
            <Breadcrumb key={match.url}>
              <BreadcrumbLink to={match.url || ''}>{breadcrumb}</BreadcrumbLink>
            </Breadcrumb>
          ) : (
            <Breadcrumb key={match.url}>
              <BreadcrumbLinkBold to={match.url || ''}>{breadcrumb}</BreadcrumbLinkBold>
              {index < breadcrumbLength - 1 && <MdChevronRight />}
            </Breadcrumb>
          )
        })}
      </BreadcrumbsWrapper>
    </Wrapper>
  )
}

export default Breadcrumbs

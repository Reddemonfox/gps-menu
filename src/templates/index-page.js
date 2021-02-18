import React from 'react'
import PropTypes from 'prop-types'
import {Link, graphql} from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

export const IndexPageTemplate = ({
                                     sections
                                  }) => (
    <div>
        <div
            className="full-width-image margin-top-0"
            style={{
                backgroundImage: `url(https://www.gbsthebarbequers.in/wp-content/uploads/2021/01/GBS-Banner-scaled.jpg)`,
                backgroundPosition: `top left`,
                backgroundAttachment: `fixed`,
                height: '300px'
            }}
        >
            <div
                style={{
                    display: 'flex',
                    height: '150px',
                    lineHeight: '1',
                    justifyContent: 'space-around',
                    alignItems: 'left',
                    flexDirection: 'column',
                }}
            >
                <h1
                    className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
                    style={{
                        boxShadow:
                            'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
                        backgroundColor: 'rgb(255, 68, 0)',
                        color: 'white',
                        textAlign: 'center',
                        lineHeight: '1',
                        padding: '0.25em',
                    }}
                >
                    GBS The Barbequers
                </h1>
                <h3
                    className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
                    style={{
                        boxShadow:
                            'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
                        backgroundColor: 'rgb(255, 68, 0)',
                        color: 'white',
                        textAlign: 'center',
                        lineHeight: '1',
                        padding: '0.25em',
                    }}
                >
                    Momos l Chinese l Tandoor l Gravies
                </h3>
            </div>
        </div>
        <section className="section section--gradient">
            <div className="container">
                <div className="section">
                    <div className="columns">
                        <div className="column is-10 is-offset-1">
                            <div className="content">
                                <Features sections={sections}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
)


const IndexPage = ({data}) => {
    const {frontmatter} = data.markdownRemark

    console.log(frontmatter);
    return (
        <Layout>
            <IndexPageTemplate
                sections={frontmatter.sections}
            />
        </Layout>
    )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        sections {
            title
            blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            price
            name
            description
          }
        }
      }
    }
  }
`

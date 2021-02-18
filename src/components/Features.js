import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureGrid = ({sections}) => (
    <div>
        {
            sections.map((section)=>{
                return <>
                    <div className="heading-light">
                        {section.title}
                    </div>
                    <div className="columns is-multiline">

                        {section.blurbs.map((item) => (
                            <div key={item.text} className="column is-6">
                                <section className="section menu-item" style={{padding: 0}}>
                                    <div className="has-text-centered image" style={{  backgroundImage: `url(${
                                            item.image.childImageSharp
                                                ? item.image.childImageSharp.fluid.src
                                                : item.image
                                        })`,
                                        backgroundPosition: `center`,
                                        height: '100pxpx'}}>
                                    </div>
                                    <div className="description-section">
                                        <div className="title">
                                            {
                                                item.name
                                            }
                                        </div>
                                        <p className="description">
                                            {
                                                item.description
                                            }
                                        </p>
                                        <p className="price">
                                            ₹ {item.price}
                                        </p>
                                    </div>
                                </section>
                            </div>
                        ))}
                    </div>
                </>
            })
        }
    </div>
)

FeatureGrid.propTypes = {
    gridItems: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
            text: PropTypes.string,
        })
    ),
}

export default FeatureGrid

import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureGrid = ({gridItems}) => (
    <div className="columns is-multiline">
        {gridItems.map((item) => (
            <div key={item.text} className="column is-6">
                <section className="section menu-item" style={{padding: 0}}>
                    <div className="has-text-centered image">
                        <div
                            style={{
                                width: '240px',
                                display: 'inline-block',
                            }}
                        >
                            <PreviewCompatibleImage imageInfo={item}/>
                        </div>
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

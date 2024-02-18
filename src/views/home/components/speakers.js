import React, { useState, useEffect, useContext } from "react"
import { useTranslation, I18nextContext } from "gatsby-plugin-react-i18next"
import "../styles/speakers.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Carousel from "react-bootstrap/Carousel"
import "../../../images/profile-pic.png"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import getCurrentTranslations from "../../../components/contentful-translator"
import Modal from "react-bootstrap/Modal"

const Speakers = () => {
  const { t } = useTranslation()
  const { language } = useContext(I18nextContext)
  const data = useStaticQuery(graphql`
    query {
      allContentfulSpeaker(sort: { createdAt: ASC }) {
        edges {
          node {
            description {
              description
            }
            name
            role
            image {
              file {
                url
              }
              gatsbyImageData(
                cornerRadius: 16
                height: 267
                width: 267
                quality: 100
              )
              title
            }
            node_locale
          }
        }
      }
    }
  `)

  const [speakers, setSpeakers] = useState()
  const [modalShow, setModalShow] = useState(false)
  const [currentSpeaker, setCurrentSpeaker] = useState()

  useEffect(() => {
    const getSpeakers = () => {
      const getSpeakers = getCurrentTranslations(
        data.allContentfulSpeaker.edges,
        language
      )
      setSpeakers(getSpeakers)
    }
    getSpeakers()
    console.log(speakers)
  }, [data.allContentfulSpeaker, language])

  const renderSpeakerGroups = () => {
    const speakerGroups = []

    // Determine the number of empty divs needed to fill a group
    const emptyDivsCount = Math.max(0, 10 - (speakers.length % 10))
    const emptyDivs = Array.from({ length: emptyDivsCount }).map(
      (_, idx) => idx
    )

    // Slice the speakers into groups of 10
    for (let i = 0; i < speakers.length; i += 10) {
      const group = speakers.slice(i, i + 10)

      // Append empty divs to fill the group if necessary
      if (group.length < 10) {
        group.push(...Array.from({ length: 10 - group.length }))
      }

      speakerGroups.push(group)
    }

    const openModal = speaker => {
      setCurrentSpeaker(speaker)
      setModalShow(true)
      console.log(speaker)
    }

    return speakerGroups?.map((group, index) => (
      <Carousel.Item key={index} interval={60000}>
        <div className="speakers-container">
          {group.map((speaker, idx) => (
            <div
              onClick={() => openModal(speaker)}
              className="speaker"
              key={idx}
            >
              {speaker && (
                <div className="speaker-content">
                  <div>
                    <h4>{speaker.node.name}</h4>
                    <p>{speaker.node.role}</p>
                  </div>
                  <p>{t`speakers.read-more`}</p>
                </div>
              )}
              <GatsbyImage
                className="speaker-image"
                image={
                  speaker ? getImage(speaker.node.image.gatsbyImageData) : null
                }
              />
            </div>
          ))}
        </div>
      </Carousel.Item>
    ))
  }

  const SpeakerModal = props => {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <GatsbyImage
            className="current-speaker-image"
            image={getImage(currentSpeaker.node.image.gatsbyImageData)}
          />
          <div>
            <h2>{currentSpeaker.node.name}</h2>
            <p>{currentSpeaker.node.role}</p>
            <pre>{currentSpeaker.node.description.description}</pre>
          </div>
        </Modal.Body>
      </Modal>
    )
  }

  return (
    <>
      <div className="s-container">
        <div className="container">
          <h2>{t`speakers.title`}</h2>
          <Carousel>{speakers && renderSpeakerGroups()}</Carousel>
          {currentSpeaker && (
            <SpeakerModal show={modalShow} onHide={() => setModalShow(false)} />
          )}
        </div>
      </div>
    </>
  )
}

export default Speakers

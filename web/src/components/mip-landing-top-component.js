import {Link} from 'gatsby'
import React from 'react'
import BlogPostPreview from './blog-post-preview'
import styled from "styled-components"

import eh_language_icon1 from '../asset/images/eh_language_icon1.png';
import eh_banner_bg_img1 from '../asset/images/eh_banner_bg_img1.png';
import eh_banner_tablate_img1 from '../asset/images/eh_banner_tablate_img1.png';
import eh_assesment_img1 from '../asset/images/eh_assesment_img1.png';
import eh_how_it_work_list_img1 from '../asset/images/eh_how_it_work_list_img1.png';
import eh_how_it_work_list_img2 from '../asset/images/eh_how_it_work_list_img2.png';
import eh_how_it_work_list_img3 from '../asset/images/eh_how_it_work_list_img3.png';

import eh_procedure_img_slider1 from '../asset/images/eh_procedure_img_slider1.png';
import eh_procedure_img_slider2 from '../asset/images/eh_procedure_img_slider2.png';

import eh_proof_list_img1 from '../asset/images/eh_proof_list_img1.png';
import eh_proof_list_img2 from '../asset/images/eh_proof_list_img2.png';
import eh_proof_list_img3 from '../asset/images/eh_proof_list_img3.png';
import eh_proof_list_img4 from '../asset/images/eh_proof_list_img4.png';

// import { Row, Col } from 'react-bootstrap';


// import div from 'react-bootstrap/div'
// import div from 'react-bootstrap/div'

// import styles from './mip-landing-top-component.css'


const CardContainer = styled.div`
  float: left;
  text-align: left;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px;
  margin-right: 4px;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.1);
  border-image: initial;
  border-radius: 3px;
  padding: 0px;

  width: 100%;
  height: 100%;

      border-radius: 10px;

  @media (min-width: 1023px) {
    /* width: 100%;
    display: table; */
  }
`;
const DivBgColor = styled.div`
  padding-top: 56.25%;
  background: rgb(72, 72, 72, 0.3);
  contain: strict;
  position: relative;
  width: 100%;

      border-radius: 10px 10px 0px 0px;


  @media (min-width: 1023px) {
    /* width: 96px;
    display: table-cell;
    vertical-align: middle;
    height: 72px;
    border-spacing: 0px;
    min-height: 100%;
    padding-top: 0px; */
  }
`;

const DivImagePosition = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  height: 100%;
  width: 100%;

  @media (min-width: 1023px) {
    width: 100%;
    height: 100%;
    position: relative;
  }
`;

const DivImageHolder = styled.div`
  position: relative;
  height: 99%;
  width: 100%;
  background-size: 140px;

  @media (min-width: 1023px) {
    /* background-size: cover !important;
    background-position: 50% 50% !important;
    background-repeat: no-repeat !important;
    position: absolute; */
  }
`;
const ProcedureName = styled.span`
  @media (min-width: 1023px) {
    vertical-align: sub;
  }
  font-size: 14px;
`;


const LandingBg = styled.div`
  position: relative !important;
  width: 100% !important;
  display: block;
  @media (min-width: 768) {
    height: 100vh !important;
    min-height: 650px !important;
  }
`;

const LandingBgContentHolder = styled.div`
  width: 100% !important;
  position: relative !important;
  height: 300px !important;
  @media (min-width: 744px) {
    height: 800px !important;
  }
`;

const ImgPlaceHolder = styled.div`
  height: 100% !important;
  position: relative !important;
  width: 100vw !important;
  margin-left: -50vw !important;
  margin-right: -50vw !important;
  left: 50% !important;
  right: 50% !important;
`;

const ImageObjectPlaceHolder = styled.div`
  display: table !important;
  position: relative !important;
  height: 100% !important;
  width: 100% !important;
`;

const ContentPlaceHolder = styled.div`
  display: table-cell !important;
  vertical-align: middle !important;
`;

const ImgOverFlowHandling = styled.div`
  padding-left: 24px !important;
  padding-right: 24px !important;
  /* padding-bottom: 30px !important; */
  max-width: none !important;
  overflow-anchor: none !important;
  @media (min-width: 320px) and (max-width: 1023px) {
    padding-left: 0px !important;
    padding-right: 0px !important;
  }
  @media (min-width: 1128px) {
    position: relative !important;
    padding-left: 64px !important;
    padding-right: 64px !important;
    margin: 0px auto !important;
  }
`;

const ContentObjectPlaceholder = styled.div`
  position: relative !important;
  margin-left: auto !important;
  margin-right: auto !important;
  text-align: center !important;
  margin-top: 0px !important;
  max-width: 100% !important;
  @media (min-width: 744px) {
    margin-top: 24px !important;
    margin-bottom: 24px !important;
    text-align: center !important;
    margin-left: auto !important;
    margin-right: auto !important;
  }
  @media (min-width: 1128px) {
    margin-bottom: 100px !important;
  }
`;

const ImgPlaceHolderParent = styled.div`
  position: absolute !important;
  width: 100% !important;
  height: 100% !important;
`;

const ImgPlaceHolderBase = styled.div`
    position: absolute !important;
    top: 0px !important;
    left: 0px !important;
    width: 100% !important;
    height: 100% !important;
    z-index: -1 !important;
}
`;

const LandingBgA = styled.div`
  /* background-image: url("${eh_banner_bg_img1}"); */
  background-size: 100% auto;
`;

const ContainerPlan = styled.div`
  position: relative !important;
  z-index: 1 !important;
  display: block;

    /* padding: 2em; */
    box-sizing: border-box;
    max-width: 100%;
    /* padding: 1.5em; */
    margin: 0 auto;

  padding-bottom:30px;

  @media (min-width: 1200px) {
    overflow: hidden;
    position: relative !important;
    /* max-height: 600px; */
    /* max-width: 1400px;  */

  }
  /* @media (min-width: 1200) {
      max-width: 1600
   }
   @media (min-width: 992) {
      max-width: 960
   } */
  @media (min-width: 768) {
    height: 100vh !important;
    min-height: 650px !important;
  }
`;

const SearchBoxContainer = styled.div`
  z-index: 1 !important;
  display: block;
  width: 100%;
  /* padding-right: 15px;
  padding-left: 15px; */
  margin-right: auto;
  margin-left: auto;
  height: 100%;

  @media (min-width: 1200px) {
    overflow: hidden;
    max-width: 1140px;
    /* padding-top: 180px; */
  }
  /* @media (min-width: 1200) {
  max-width: 1600
}
@media (min-width: 992) {
  max-width: 960
} */
  @media (min-width: 744px) {
    padding-top: 80px;
  }
`;

const HideMobile = styled.div`
  @media (min-width: 0px) and (max-width: 744px) {
    display: none !important;
  }
`;

const ShowMobile = styled.div`
  display: none !important;
  @media (min-width: 0px) and (max-width: 744px) {
    display: block !important;
  }
`;

const StyledComponent = styled.div`
  ${props => props.around && `padding: ${props.around}rem`};
  ${props => props.pt && `padding-top:${props.pt}rem`};
  ${props => props.pb && `padding-bottom:${props.pb}rem`};
  ${props => props.pl && `padding-left:${props.pl}rem`};
  ${props => props.pr && `padding-right:${props.pr}rem`};
  width: ${props => (props.w ? `${props.w}%` : 'initial')};
  height: ${props => (props.h ? props.h : 'initial')};
  ${props => props.displayIb && 'display: inline-block'};
  ${props => props.mt && `margin-top:${props.mt}rem`};
  ${props => props.mb && `margin-bottom:${props.mb}rem`};
  ${props => props.ml && `margin-left:${props.ml}rem`};
  ${props => props.mr && `margin-right:${props.mr}rem`};
  ${props => props.color && `color: ${props.color}`};
  font-family: ${props =>
    props.fontFamily ? props.fontFamily : 'Circular Book'};
  font-size: ${props => (props.fontSize ? props.fontSize : 1.875)}rem;
  ${props => props.bgColor && `background: ${props.bgColor}`};
  ${props => props.border && `border: ${props.border}`};
  ${props => props.borderWidth && `border-width: ${props.borderWidth}`};
  ${props => props.borderRadius && `border-radius:${props.borderRadius}`};
  ${props => props.borderR && `border-right:${props.borderR}`};
  ${props => props.borderL && `border-left:${props.borderL}`};
  ${props => props.borderT && `border-top:${props.borderT}`};
  ${props => props.borderB && `border-bottom:${props.borderB}`};
  ${props => props.vertialAlign && `vertical-align:${props.vertialAlign}`};
  ${props => props.alignSelf && `align-self:${props.alignSelf}`};
  ${props => props.textAlign && `text-align:${props.textAlign}`};
  ${props => props.clear && `clear: ${props.clear}`};
`;
const Media = styled(StyledComponent)`
  display: flex;
  align-items: flex-start;
`;

const MediaBody = styled(StyledComponent)`
  flex: 1;
`;

const Relative = styled(StyledComponent)`
  position: relative;
`;

const Absolute = styled(StyledComponent)`
  position: absolute;
  ${props => props.top && `top:${props.top}`};
  ${props => props.bottom && `bottom:${props.bottom}`};
  ${props => props.left && `left:${props.left}`};
  ${props => props.right && `right:${props.right}`};
`;

const Img = styled(StyledComponent)``;

const H3Title = styled(StyledComponent)`
  font-family: 'Circular Bold';
  @media (max-width: 440px) and (min-width: 0px) {
  }
`;

const H3 = styled(StyledComponent)`
  font-family: 'Circular Bold';
  margin-bottom: 0.1rem !important;
`;

const H4 = styled(StyledComponent)`
  font-family: 'Circular Medium';
`;

const P = styled(StyledComponent)`
  margin-bottom: ${props => (props.mb ? `${props.mb}rem` : 0)};
`;

const PLocationSearch = styled(StyledComponent)`
  margin-bottom: ${props => (props.mb ? `${props.mb}rem` : 0)};
  border-style: none !important;
  transition: all 0s !important;
`;

const ButtonBlueUpdate = styled.button`
  background-color: #00bae5;
  border-color: #00bae5;
  width: 5.625rem;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 20px;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-transition: color 0.15s ease-in-out,
    background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  border: 1px solid #6c757d;
  background-color: #6c757d;
  border-radius: 0.25rem;
  display: inline-block;
  font-size: 1rem;
  color: #fff;
  padding: 0.375rem 0.75rem;
  background-color: #00bae5;
  border-color: #00bae5;
  width: 5.625rem;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 20px;

  &:hover {
    background-color: white !important;
    color: #00bae5 !important;
    border: 1px solid #00bae5 !important;
  }

  &:active {
    color: white !important;
    background-color: #006d86 !important;
  }

  &:focus {
    color: white !important;
    background-color: #006d86 !important;
  }
`;
// const ButtonWhite = styled(Button)`
//   background-color: #fff;
//   color: #5a5a5a;
//   border: 0.0625rem solid #c4c4c4;
//   border-radius: 0.25rem;
//   text-transform: capitalize;
//   :hover {
//     color: black;
//     background-color: #fff !important;
//     border: 0.0625rem solid #c4c4c4 !important;
//   }
// `;
const TransparentBanner = styled(Relative)`
  display: flex;
  height: 2rem;
  margin: 0 auto;
  padding-left: 10px;
  border-radius: 0 0 6px 6px;
  z-index: 0;
  background-color: rgba(0, 0, 0, 0.05);
  align-items: center;
`;

const A = styled(Relative)`
  position: initial;
  text-decoration: ${props =>
    props.decoration ? props.decoration : 'underline'};
  :hover {
    color: ${props => (props.hoverColor ? props.hoverColor : 'white')};
  }
`;

const ContainerBody = styled.div`
  @media (min-width: 0px) and (max-width: 743px) {
    margin-top: 280px !important;
    /* margin-right: -40px !important; */
  }
  margin-left: 24px !important;
  margin-right: 24px !important;
  max-width: 1100px !important;
  margin: 0 auto !important;
  position: relative !important;
`;

const RelativeTitle = styled(Relative)`
  padding: 2rem;
  @media (max-width: 440px) and (min-width: 0px) {
    padding-top: 80px !important;
    padding-bottom: 0rem !important;
    margin-bottom: 0rem !important;
    padding: 10px;
  }
  margin-bottom: 2rem !important;
`;

const SectionHolder = styled.div`
  @media (max-width: 440px) and (min-width: 0px) {
    margin-left: 28px !important;
    margin-right: 28px !important;
    margin-bottom: 36px !important;
  }
  margin-left: 28px !important;
  margin-right: 28px !important;
  margin-bottom: 36px !important;
  @media (min-width: 744px) {
    margin-left: 0px;
  }
`;

const SectionHolderCard = styled.div`
  @media (max-width: 440px) and (min-width: 0px) {
    margin-left: 15px !important;
    margin-right: 15px !important;
    margin-bottom: 36px !important;
  }
  margin-left: 1.5rem !important;
  margin-right: 1.5rem !important;
  margin-bottom: 36px !important;
  @media (min-width: 744px) {
    margin-left: 0px;
  }
`;

const TopSectionChild = styled.div`
  display: inline-block;
  width: 100%;
  vertical-align: bottom;
`;

const ButtonSpanText0 = styled.button`
  font-size: 16px !important;
  line-height: 24px !important;
  letter-spacing: normal !important;
  color: inherit !important;
  padding-top: undefined !important;
  padding-bottom: undefined !important;
  color: white !important;

  &:hover {
    background-color: white !important;
    color: #00bae5 !important;
    border: 1px solid #00bae5 !important;
  }

  &:active {
    color: white !important;
    background-color: #006d86 !important;
  }

  &:focus {
    color: white !important;
    background-color: #006d86 !important;
  }
`;

const Button1 = styled.button`
  display: inline-block !important;
  position: relative !important;
  text-align: center !important;
  transition-property: background, border-color, color !important;
  transition-duration: 0.2s !important;
  transition-timing-function: ease-out !important;
  cursor: pointer !important;
  width: 100% !important;

  margin: 0px !important;
  text-decoration: none !important;
  border-radius: 4px !important;
  border-width: 2px !important;
  border-style: solid !important;
  background: #00bae5 !important;
  border-color: transparent !important;

  padding-left: 22px;
  padding-right: 22px;
  padding-top: 10px;
  padding-bottom: 10px;

  &:hover :active {
    cursor: pointer !important;
    background: #006d86 !important;
  }
`;

const ButtonDiv = styled.div``;

const ButtonPadding2 = styled.div`
  padding-top: 30px !important;
`;

const RelativeMiddle = styled.div`
  @media (min-width: 743px) {
    margin-left: 2rem !important;
    padding-left: 2.5rem !important;
  }
  margin-left: 0px !important;
  padding-left: 0px !important;
`;

const TitleAdjustment = styled.div`
  @media (max-width: 743px) {
    min-width: 100% !important;
  }
  min-width: 0% !important;
`;

const OptionIconHolder = styled.div`
  color: rgb(70, 70, 70) !important;
  display: table-cell !important;
  min-width: 44px !important;
  vertical-align: middle !important;
  text-align: middle !important;
  font-size: 16px !important;
  line-height: 22px !important;
  letter-spacing: normal !important;
  padding-left: 5px !important;
`;

const OptionIconHolderS = styled.div`
  color: rgb(70, 70, 70) !important;
  display: table-cell !important;
  min-width: 44px !important;
  vertical-align: middle !important;
  text-align: middle !important;
  font-size: 14px !important;
  line-height: 22px !important;
  letter-spacing: normal !important;
  padding-left: 5px !important;
`;

const OptionTextHolder = styled.div`
  color: rgb(70, 70, 70) !important;
  display: table-cell !important;
  vertical-align: middle !important;
  /* text-align: left !important; */
  width: 100% !important;
  padding-left: -15px !important;
  overflow-wrap: break-word !important;
`;

const RelativeResponsive = styled.div`
  @media (max-width: 744px) {
    padding-left: 15px !important;
    padding-right: 15px !important;
  }

  padding-left: 1.5rem !important;
  padding-right: 1.5rem !important;
`;

const RelativeResponsiveCard = styled.div`
  /* margin-bottom: 1.5rem; */
  /* margin-bottom: 2rem; */

  @media (max-width: 744px) {
    padding-left: 9px !important;
    padding-right: 9px !important;
  }
  padding-left: 1.5rem !important;
  padding-right: 1.5rem !important;
`;


const ACareTeam = styled.a`
    display: block !important;
    margin-bottom: 8px;
    line-height: 30px;
    font-size: 0.9375rem;

    &:hover{
      color: #005bae;
      cursor: underline;
    }
`;
const RelativeResponsiveCardLocation = styled.div`
  margin-bottom: 2rem;
  @media (max-width: 744px) {
    padding-left: 9px !important;
    padding-right: 9px !important;
  }
  padding-left: 1.5rem !important;
  padding-right: 1.5rem !important;
`;

const RelativeLanding = styled.div`
  margin-left: 0rem;
  margin-right: 0rem;

  @media (min-width: 768px) {
    margin-left: -0.9375rem;
    margin-right: -0.9375rem;
  }
`;

const RowAdj = styled.div`
  width: 100% !important;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
`;

const BoxContainer = styled.div`
background-color: white;
width: 250px;
height: 200px;
border-radius: 10px;
`;

const ActualImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
`;

function LandingTopComponent (props) {
  return (
    <ContainerPlan>
    <LandingBg>
      <ImgOverFlowHandling>
        <LandingBgContentHolder>
          <ImgPlaceHolderBase>
            <ImgPlaceHolderParent>
              <ImgPlaceHolder>
                <ActualImg
                  lt=""
                  role="presentation"
                  src={eh_banner_bg_img1}
                />
              </ImgPlaceHolder>
              <ShowMobile>
               
              </ShowMobile>
            </ImgPlaceHolderParent>
          </ImgPlaceHolderBase>

          <SearchBoxContainer>
            <div>
              <div className="xl-12 md-12 lg-12" div sm="12" md="12" lg="12">
                <RelativeTitle pt={12} pb={2}>
                <HideMobile>
                  <Relative w={50} displayIb>
                    <H3Title
                      as="h3"
                      fontSize={3.875}
                      color="white"
                      mb={1.875}
                    >
                     Ever Medical Travel Information Book
                    </H3Title>
                    {/* <P
                      as="p"
                      fontSize={0.9375}
                      color="white"
                      className="hide-mobile"
                      mb={1.875}
                    >
                      Book your treatment with internationally
                      accredited healthcare providers from all around
                      the world.{' '}
                    </P> */}
                  </Relative>
                  <Relative w={50} displayIb>
                    {/* <Img
                      as="img"
                      src={eh_banner_tablate_img1}
                      ml={1.25}
                      w="initial"
                    /> */}
                </Relative>
              </HideMobile>
                  
              <ShowMobile>
              <Relative w={50} displayIb>
                    <H3Title
                      as="h3"
                      fontSize={1.875}
                      color="white"
                      mb={1.875}
                    >
                     Ever Medical Travel Information Book
                    </H3Title>
                  </Relative>
              </ShowMobile>

                <HideMobile>
                  <Relative w={25} displayIb>
                  <BoxContainer>
                  <CardContainer>
                        <DivBgColor>
                          <DivImagePosition>
                            <DivImageHolder bgImage="" />
                          </DivImagePosition>
                        </DivBgColor>
                        <ProcedureName
                          fontSize={0.9375}
                          color="#021B0F"
                          displayIb
                          className="trending_card_container"
                        >
                          {"Dentistry Guide"}
                        </ProcedureName>
                      </CardContainer>
                  </BoxContainer>
                  </Relative>

                  <Relative w={25} displayIb>
                  <BoxContainer>
                  <CardContainer>
                        <DivBgColor>
                          <DivImagePosition>
                            <DivImageHolder bgImage="" />
                          </DivImagePosition>
                        </DivBgColor>
                        <ProcedureName
                          fontSize={0.9375}
                          color="#021B0F"
                          displayIb
                          className="trending_card_container"
                        >
                          {"Aesthetic Guide"}
                        </ProcedureName>
                      </CardContainer>
                  </BoxContainer>
                  </Relative>

                  <Relative w={25} displayIb>
                  <BoxContainer>
                  <CardContainer>
                        <DivBgColor>
                          <DivImagePosition>
                            <DivImageHolder bgImage="" />
                          </DivImagePosition>
                        </DivBgColor>
                        <ProcedureName
                          fontSize={0.9375}
                          color="#021B0F"
                          displayIb
                          className="trending_card_container"
                        >
                          {"Wellness Guide"}
                        </ProcedureName>
                      </CardContainer>
                    </BoxContainer>
                  </Relative>

                  <Relative w={25} displayIb>
                  <BoxContainer>
                  <CardContainer>
                        <DivBgColor>
                          <DivImagePosition>
                            <DivImageHolder bgImage="" />
                          </DivImagePosition>
                        </DivBgColor>
                        <ProcedureName
                          fontSize={0.9375}
                          color="#021B0F"
                          displayIb
                          className="trending_card_container"
                        >
                          {"Electives Surgery Guide"}
                        </ProcedureName>
                      </CardContainer>
                      </BoxContainer>
                  </Relative>
                
                </HideMobile>
                
                </RelativeTitle>
              </div>
            </div>

            <HideMobile>
              <Relative
                textAlign="right"
                pr={1.25}
                fontSize={1}
                h="3rem"
                mb={2}
              >
                {/* <A
                  href=""
                  as="a"
                  fontSize={1}
                  color="white"
                  around={0.625}
                  borderRadius="0.25rem"
                  decoration="none"
                  bgColor="rgba(255,255,255,0.11)"
                >
                  <Img as="img" mr={0.625} src={eh_language_icon1} />{' '}
                  Terms, Privacy & More
                </A> */}
              </Relative>
            </HideMobile>
          </SearchBoxContainer>
        </LandingBgContentHolder>
      </ImgOverFlowHandling>
    </LandingBg>
  </ContainerPlan>
  )
}

LandingTopComponent.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: ''
}

export default LandingTopComponent

import { connect } from "react-redux";
import SVGSlide from "./svg_slide";

const SVGSlidePreviewContainer = connect(
  ({entities}, ownProps) => ({
    isPreview: true,
    width: entities.docs[ownProps.docId].width,
    height: entities.docs[ownProps.docId].height,
    slide: entities.slides[ownProps.slideId],
  }),
  (dispatch, ownProps) => ({
  })
)(SVGSlide);

export default SVGSlidePreviewContainer;